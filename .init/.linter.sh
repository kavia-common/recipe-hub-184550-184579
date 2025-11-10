#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-hub-184550-184579/recipe_app_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

