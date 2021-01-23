import axios from "axios";
import { apiUrl } from "lib/config/root-url";

import { AuthEmailProps } from "./types";

const StrapiForgotPassword = ({ email }: AuthEmailProps) =>
  axios.post(`${apiUrl}/auth/forgot-password`, {
    email,
  });

export default StrapiForgotPassword;
