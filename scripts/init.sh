#!/usr/bin/env bash

unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN:${unameOut}"
esac

echo ${machine} "detected!"

if test "$machine" = Mac; then
  echo "Installing gomplate and tree if needed."
  brew install gomplate
  brew install tree
fi

if test "$machine" = Linux; then
  echo "Installing gomplate and tree if needed."
  apk add --no-cache gomplate
  apk add --no-cache tree
fi

echo "Done!"

ROOT_ENV_FILE=.env
CMS_ENV_FILE=packages/cms/.env
CLIENT_ENV_FILE=packages/client/.env
CUSTOMIZE_FILE=customize.json

if test -f "$ROOT_ENV_FILE"; then
  echo "$ROOT_ENV_FILE exists."
else
  cp ./.env.sample ./.env
  echo "$ROOT_ENV_FILE created!"
fi


if test -f "$CMS_ENV_FILE"; then
  echo "$CMS_ENV_FILE exists."
else
  cp packages/cms/.env.sample packages/cms/.env
  echo "$CMS_ENV_FILE created!"
fi


if test -f "$CLIENT_ENV_FILE"; then
  echo "$CLIENT_ENV_FILE exists."
else
  cp packages/client/.env.sample packages/client/.env
  echo "$CLIENT_ENV_FILE created!"
fi

if test -f "$CUSTOMIZE_FILE"; then
  echo "$CUSTOMIZE_FILE exists."
else
  cp ./customize.json.sample ./customize.json
  echo "$CUSTOMIZE_FILE created!"
fi

if test -f "$ROOT_ENV_FILE"; then
  if test -f "$CMS_ENV_FILE"; then
    if test -f "$CLIENT_ENV_FILE"; then
      if test -f "$CUSTOMIZE_FILE"; then
        echo "🚀 Ready to go, add your project settings to customize.json then run yarn customize"
      fi
    fi
  fi
fi
