# 🤣 Randomoji

Small tool to return random emojis.\
Written in Emojicode.

## Generate updated emoji list

Create [Open Emoji API](https://emoji-api.com/) key and set it as env var `EMOJI_API_KEY`.

Run the Deno script:
```
$ deno run --allow-env --allow-net --allow-write generate_emoji_list.js
```

## Build

1. Install [Emojicode](https://www.emojicode.org/)
2. Run: 
```
$ ./compile.sh
```
3. Binary will be built into `dist/`