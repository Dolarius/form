import * as yup from "yup";

const formValidation = yup.object().shape({
  name: yup.string().min(4).required("Name is required"),
  emailAddress: yup
    .string()
    .email("Enter a valid email")
    .required("Email Address is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, "Phone number format must be XXX-XXX-XXXX")
    .required("Phone Number is required"),
});

export default formValidation;
