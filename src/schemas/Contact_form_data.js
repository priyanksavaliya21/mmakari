import * as Yup from "yup";
let commemtRegExp = /^[a-zA-Z0-9\s,.'-]{3,}$/ ;
export const SignUpSchema = Yup.object({
    name: Yup.string()
    .max(40, "Must be 40 characters or less")
    .required("Please Enter Your Name"),
    email: Yup.string()
    .email("Email is invalid")
    .required("Please Enter Your Email")
    .max( 70, "Must be 70 characters or less"),
    drop: Yup.string()
    .required("please enter your drop value"),
    message: Yup.string()
    .matches(commemtRegExp, 'Comment is not valid')
    .max(5000, "Must be 5000 characters or less")
    .required("Please Enter Your Comment"),
});


export const ReviewProductSchema = Yup.object({
    title: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("Please Enter Your title"),
    name: Yup.string()
    .max(40, "Must be 40 characters or less")
    .required("Please Enter Your Name"),
    email: Yup.string()
    .email("Email is invalid")
    .required("Please Enter Your Email")
    .max( 70, "Must be 70 characters or less"),
    phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min( 8,"Minimum 8 characters required")
    .required('A phone number is required'),
    w3review: Yup.string()
    .matches(commemtRegExp, 'Review is not valid')
    .max(100000, "Must be 100000 characters or less")
    .required("Please Enter Your Review"),
});
