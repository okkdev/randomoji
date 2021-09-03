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
        const emojis = JSON.parse(body).map((x) =>
          ["❌", "🔤", "🧲"].includes(x.character)
            ? `🔤❌${x.character}🔤`
            : `🔤${x.character}🔤`
        )
        const file = `🐇 😂 🍇
        🆕 🍇🍉
         ❗️ 👨‍👩‍👧‍👦 ➡️ 🍿 🍇
          ↩️ 🍿 ${emojis.join(" ")} 🍆 
         🍉 
        🍉`

        fs.writeFile("src/emojis.🍇", file, function (err) {
          if (err) return console.log(err)
          console.log("Emoji List Generated")
        })
      })
    }
  )
  .on("error", (e) => {
    console.error(e)
  })
