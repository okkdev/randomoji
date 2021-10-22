#!/bin/bash
DIR=$(dirname $0)
mkdir -p $DIR/dist
echo "Compiling..."
if emojicodec $DIR/src/🏁.🍇 -o $DIR/dist/randomoji -O --color; then
    echo "Done!"
fi