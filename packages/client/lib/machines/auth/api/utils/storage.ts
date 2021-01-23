import Cookies from "js-cookie";
import { isBrowser } from "lib/utils/env";
import Router from "next/router";
import { forEachObjIndexed } from "ramda";

export const removeCookie = (_value: unknown, key: string) => {
  Cookies.remove(key);
};

export let setToken = (response: any) => {
  if (!process.browser) {
    return;
  } else {
    Cookies.set("id", response.user.id);
    Cookies.set("token", response.jwt);
    Cookies.set("username", response.user.username);
    isBrowser && window?.localStorage?.removeItem("signout");

    if (Cookies.get("token")) {
      Router.push("/");
    }
  }
};

export let unsetToken = () => {
  if (!process.browser) {
    return;
  }

  Cookies.remove("token");
  Cookies.remove("id");
  Cookies.remove("username");
  Cookies.remove("cart");

  // to support logging out from all windows
  if (isBrowser) {
    window?.localStorage?.setItem("signout", Date.now().toString());
    Router.push("/");
  }
};

export let userCookies = {
  id: Cookies.get("id"),
  token: Cookies.get("token"),
  username: Cookies.get("username"),
  refCode: Cookies.get("refCode")
};

export const signOut = () => {
  forEachObjIndexed(removeCookie, userCookies);
  window.localStorage?.setItem("signout", Date.now().toString());
  window.location.reload();
};
