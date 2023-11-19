import * as Yup from "yup";

export const signUpSchema = Yup.object({
    fname: Yup.string().min(2).max(25).required("Please enter your firstname"),
    lname: Yup.string().min(2).max(25).required("Please enter your lastname"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
})