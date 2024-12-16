import * as Yup from "yup";

export const initialForgotPasswordData = (defaultEmail: string) => ({
  email: defaultEmail ?? "",
});

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .matches(/\./, "Invalid email address")
    .required("Email is required"),
});
