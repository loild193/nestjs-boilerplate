#!/usr/bin/env sh
set -e

if [ "$NODE_ENV" = "production" ] && [ "$IS_WORKER" != 1 ]; then
  echo "Migrating databases.."
  npm run migrate
  npm run seed:run:relational
  echo "Starting server..."
fi

exec "$@"
