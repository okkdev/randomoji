const res = await fetch(
  `https://emoji-api.com/emojis?access_key=${Deno.env.get("EMOJI_API_KEY")}`
)
const body = await res.json()

let emojis = body.map((x) =>
  ["❌", "🔤", "🧲"].includes(x.character)
    ? `🔤❌${x.character}🔤`
    : `🔤${x.character}🔤`
)
emojis = [...new Set(emojis)]

const file = `🐇 😂 🍇
  🥯 🆕🍇🍉

  🥯 ❓ 👨‍👩‍👧‍👦 ➡️ 🍨🐚🔡🍆🍇
    ↩️ 🍿 ${emojis.join(" ")} 🍆 
  🍉 
🍉`

try {
  await Deno.writeTextFile("src/😂.🍇", file)
  console.log("Emoji List Generated")
} catch (err) {
  console.error(err)
}
