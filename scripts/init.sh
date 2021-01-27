#!/usr/bin/env bash

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
