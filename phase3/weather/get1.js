const http = require("http")

http.get("https://postman-echo.com/status/200", res => {
  let data = ""

  res.on("data", d => {
    data += d
  })
  res.on("end", () => {
    console.log(data)
  })
})