const http = require("http")

http
  .request(
    {
      hostname: "postman-echo.com",
      path: "/status/400"
    },
    res => {
      let data = ""

      res.on("data", d => {
        data += d
      })
      res.on("end", () => {
        console.log(data)
      })
    }
  )
  .end()