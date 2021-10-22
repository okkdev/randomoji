# 🤣 Randomoji

Small tool to return random emojis.\
Written in Emojicode.

## Generate updated emoji list

Create [Open Emoji API](https://emoji-api.com/) key and set it as env var `EMOJI_API_KEY`.

Run the JS script:
```
$ node generate_emoji_list.js
```

## Build

1. Install [Emojicode](https://www.emojicode.org/)
2. Run: 
```
$ ./compile.sh
```
3. Binary will be built into `dist/`