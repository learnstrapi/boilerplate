import axios from "axios";
import { apiUrl } from "lib/config/root-url";

import { AuthSignInProps } from "./types";

const StrapiSignIn = ({ identifier, password }: AuthSignInProps) =>
  axios.post(`${apiUrl}/auth/local`, {
    identifier,
    password,
  });

export default StrapiSignIn;
