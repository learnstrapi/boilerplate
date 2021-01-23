#!/usr/bin/env bash

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
         -c cus=./customize.json
  fi
done

# Clean up / implode
rm README.md
mv README_TEMPLATE.md README.md

