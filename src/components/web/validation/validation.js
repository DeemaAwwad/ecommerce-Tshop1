import * as yup from 'yup';
export const registerSchema = yup.object({
    userName:yup.string().required("user name is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
})
export const loginSchema = yup.object({
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
})
export const sendCodeSchema = yup.object({
    email:yup.string().required("email is required").email(),
})
export const ForgetPasswordSchema = yup.object({
    code:yup.string().required("user code is required").length(4,"must be 4 char"),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
})
export const createOrderSchema = yup.object({
    address:yup.string().required("user address is required"),
    phone:yup.number().typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
    coupon:yup.string().required("coupon is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
})