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
  echo "Installing gomplate and tree if needed."
  
if test "$machine" = Mac; then
  brew install gomplate
  brew install tree
fi

if test "$machine" = Linux; then
  echo "Installing gomplate and tree if needed."
  npm install -g gomplate
fi

ignore_files=".git|node_modules|_templates|customize|README.md|.cache|.next|build|public|scripts"

for input_file in `tree -I "${ignore_files}" -Ffai --noreport`
do
  if [ ! -d "${input_file}" ]; then
    echo "Processing file: ${input_file}"
    gomplate \
         -f "${input_file}" \
         -o "${input_file}" \
         --left-delim "<<[" \
         --right-delim "]>>" \
         -c learnstrapi=./customize.json
  fi
done

# Clean up / implode
rm README.md
mv README_TEMPLATE.md README.md
