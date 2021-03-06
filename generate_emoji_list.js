const res = await fetch(
  `https://emoji-api.com/emojis?access_key=${Deno.env.get("EMOJI_API_KEY")}`
)
const body = await res.json()

let emojis = body.map((x) =>
  ["โ", "๐ค", "๐งฒ"].includes(x.character)
    ? `๐คโ${x.character}๐ค`
    : `๐ค${x.character}๐ค`
)
emojis = [...new Set(emojis)]

const file = `๐ ๐ ๐
  ๐ฅฏ ๐๐๐

  ๐ฅฏ โ ๐จโ๐ฉโ๐งโ๐ฆ โก๏ธ ๐จ๐๐ก๐๐
    โฉ๏ธ ๐ฟ ${emojis.join(" ")} ๐ 
  ๐ 
๐`

try {
  await Deno.writeTextFile("src/๐.๐", file)
  console.log("Emoji List Generated")
} catch (err) {
  console.error(err)
}
