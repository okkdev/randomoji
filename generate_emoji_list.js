const { Console } = require("console")
const fs = require("fs")
const https = require("https")

https
  .get(
    `https://emoji-api.com/emojis?access_key=${process.env.EMOJI_API_KEY}`,
    (res) => {
      let body = ""

      res.on("data", (chunk) => {
        body += chunk
      })

      res.on("end", () => {
        let emojis = JSON.parse(body).map((x) =>
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

        fs.writeFile("src/😂.🍇", file, function (err) {
          if (err) return console.log(err)
          console.log("Emoji List Generated")
        })
      })
    }
  )
  .on("error", (e) => {
    console.error(e)
  })
