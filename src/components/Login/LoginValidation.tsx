import * as Yup from "yup";

   export const LoginValidation = Yup.object().shape({
        logemail: Yup.string().trim().email('Invalid email').required('Username is required'),
        logpass: Yup.string().trim().min(6, 'Password must be at least 6 characters').required('Password is required'),
        });
  