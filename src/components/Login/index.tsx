"use client";
import React from "react";
import { useFormik } from "formik";
import { LoginValidation } from "./LoginValidation";

export default function LoginSignUP() {
 
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      alert(`Log In Form Values: ${JSON.stringify(values, null, 2)}`);
    },
  });


  const signUpFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      alert(`Sign Up Form Values: ${JSON.stringify(values, null, 2)}`);
    },
  });

  return (
    <div className="section w-full">
      <div className="container mx-auto flex justify-center items-center">
        <div className="row full-height flex justify-center items-center">
          <div className="col-12 text-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In</span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      {/* Log In Form */}
                      <form onSubmit={loginFormik.handleSubmit}>
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>

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
                            <a href="#0" className="link">
                              Forgot your password?
                            </a>
                          </p>
                          <button type="submit" className="btn mt-5">
                            Log In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="card-back">
                    <div className="center-wrap">
                      {/* Sign Up Form */}
                      <form onSubmit={signUpFormik.handleSubmit}>
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>

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

                          <button type="submit" className="btn mt-4">
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
