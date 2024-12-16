import * as Yup from "yup";

export const initialSignupData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsAccepted: false,
};

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Minimum 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(/\./, "Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .trim()
    .required("New Password is required")
    .test(
      "len",
      "Password must be at least 8 characters",
      (val) => val?.length >= 8
    )
    .test(
      "upperCase",
      "Password must contain at least one uppercase letter",
      (val) => /(?=.*[A-Z])/g.test(val)
    )
    .test(
      "lowerCase",
      "Password must contain at least one lowercase letter",
      (val) => /(?=.*[a-z])/g.test(val)
    )
    .test("digit", "Password must contain at least one digit", (val) =>
      /\d/.test(val)
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  termsAccepted: Yup.boolean()
    .oneOf([true], "Please accept the terms and conditions")
    .required("Please accept the terms and conditions"),
});
