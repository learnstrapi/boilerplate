import axios from "axios";
import { apiUrl } from "lib/config/root-url";

import { AuthResetPasswordProps } from "./types";

const StrapiResetPassword = ({
  code,
  password,
  passwordConfirmation,
}: AuthResetPasswordProps) =>
  axios.post(`${apiUrl}/auth/reset-password`, {
    code,
    password,
    passwordConfirmation,
  });

export default StrapiResetPassword;
