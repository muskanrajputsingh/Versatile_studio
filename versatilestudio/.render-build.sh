#!/usr/bin/env bash

# Navigate to the correct folder
cd "$(dirname "$0")"

# Install dependencies
npm install

# Build the Sanity Studio
npx sanity build
