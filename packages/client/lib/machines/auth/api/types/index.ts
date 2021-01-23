import { EventObject } from "xstate";

import { CurrentUserProps } from "./user";

export interface AuthEmailProps {
  email: string;
}

export interface AuthResetPasswordProps {
  code?: string | string[];
  password: string;
  passwordConfirmation: string;
}

export interface AuthSignInProps {
  identifier: string;
  password: string;
}

export interface AuthSignUpProps {
  username: string;
  email: string;
  password: string;
}

export interface AuthFormProps {
  formActions?: unknown;
  router?: unknown;
  toast?: unknown;
}

interface AuthFormDataProps extends AuthFormProps {
  values?:
    | AuthSignUpProps
    | AuthSignInProps
    | AuthResetPasswordProps
    | AuthEmailProps
    | unknown;
}

export interface AuthMachineContextProps {
  currentUser?: CurrentUserProps;
  profileCompleted?: boolean;
  userCookies: {
    id?: string;
    token?: string;
    username?: string;
    refCode?: string;
  };
}

export interface EventPayload extends EventObject {
  actions?: unknown;
  toast?: Function;
  data?: unknown;
  payload: AuthFormDataProps;
}
