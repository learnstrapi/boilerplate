import axios from "axios";
import { apiUrl } from "lib/config/root-url";

import { AuthEmailProps } from "./types";

const StrapiSendEmailConfirmation = ({ email }: AuthEmailProps) =>
  axios.post(`${apiUrl}/auth/send-email-confirmation`, {
    email,
  });

export default StrapiSendEmailConfirmation;
