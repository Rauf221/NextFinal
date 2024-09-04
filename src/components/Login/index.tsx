"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { LoginValidation } from "./LoginValidation";
import CustomLoadingSpinner from "../CustomLoading";
import { setCookie, getCookie } from "cookies-next";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase/config";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import "../../styles/login.css";
import "../../styles/globals.css";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
  
    const token = getCookie("auth");
    if (token) {
      setIsChecked(false); 
    }
  }, []);

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const res: any = await signInWithEmailAndPassword(auth, values.email, values.password);
        if (res.user) {
          toast.success("Login success");
          localStorage.setItem("user", JSON.stringify(res.user));
          setCookie("auth", res.user.accessToken, {
            maxAge: 30 * 24 * 60 * 60, 
          });
          router.push("/home");
        }
      } catch (err) {
        toast.error((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  const signUpFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const res = await createUserWithEmailAndPassword(auth, values.email, values.password);
        if (res.user) {
          toast.success("Register success");
          router.push("/");
        }
      } catch (err) {
        toast.error((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div className="section w-full ">
      <div className="container mx-auto flex justify-center items-center">
        <div className="row full-height flex justify-center items-center">
          <div className="col-12 text-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3 ">
                <span className="text-black">Log In</span>
                <span className="text-black">Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
                checked={isChecked}
                readOnly
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <form onSubmit={loginFormik.handleSubmit}>
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-white">Log In</h4>
                          <input
                            name="email"
                            type="email"
                            className="form-style mb-5"
                            placeholder="Your Email"
                            onChange={loginFormik.handleChange}
                            onBlur={loginFormik.handleBlur}
                            value={loginFormik.values.email}
                          />
                          {loginFormik.errors.email && loginFormik.touched.email ? (
                            <div className="text-red-500 text-xs">
                              {loginFormik.errors.email}
                            </div>
                          ) : null}
                          <input
                            name="password"
                            type="password"
                            className="form-style"
                            placeholder="Your Password"
                            onChange={loginFormik.handleChange}
                            onBlur={loginFormik.handleBlur}
                            value={loginFormik.values.password}
                          />
                          {loginFormik.errors.password && loginFormik.touched.password ? (
                            <div className="text-red-500 text-xs">
                              {loginFormik.errors.password}
                            </div>
                          ) : null}
                          <p className="mb-0 mt-4 text-center">
                            <button  onClick={() => setIsChecked(!isChecked)} className="link">
                             You dont have an account? Sign Up
                            </button>
                          </p>
                          <button type="submit" className={`btn flex mt-5  gap-2 px-5 ${isLoading ?' disabled:opacity-50 disabled:cursor-not-allowed ' : 'opacity-100 cursor-pointer'}`}>
                          {isLoading && <CustomLoadingSpinner />}  Log In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="card-back">
                    <div className="center-wrap">
                      <form onSubmit={signUpFormik.handleSubmit}>
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3 text-white">Sign Up</h4>
                          <input
                            name="email"
                            type="email"
                            className="form-style mb-3"
                            placeholder="Your Email"
                            onChange={signUpFormik.handleChange}
                            onBlur={signUpFormik.handleBlur}
                            value={signUpFormik.values.email}
                          />
                          {signUpFormik.errors.email && signUpFormik.touched.email ? (
                            <div className="text-red-500 text-xs">
                              {signUpFormik.errors.email}
                            </div>
                          ) : null}
                          <input
                            name="password"
                            type="password"
                            className="form-style mb-3"
                            placeholder="Your Password"
                            onChange={signUpFormik.handleChange}
                            onBlur={signUpFormik.handleBlur}
                            value={signUpFormik.values.password}
                          />
                          {signUpFormik.errors.password && signUpFormik.touched.password ? (
                            <div className="text-red-500 text-xs">
                              {signUpFormik.errors.password}
                            </div>
                          ) : null}
                          <button type="submit" onClick={() => setIsChecked(!isChecked)} className="btn mt-4">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
