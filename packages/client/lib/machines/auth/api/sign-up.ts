import axios from "axios";
import { apiUrl } from "lib/config/root-url";

import { AuthSignUpProps } from "./types";

const StrapiSignUp = ({ username, email, password }: AuthSignUpProps) =>
  axios.post(`${apiUrl}/auth/local/register`, {
    username,
    email,
    password,
  });

export default StrapiSignUp;
