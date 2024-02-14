#!/bin/sh

rm -r build/package build/standalone build/h5p-svelte.h5p

set -e
npm run build
cd build/package && zip ../h5p-svelte.h5p -rDX . ; cd .