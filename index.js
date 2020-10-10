const koa = require('koa')
const http = require('http')
const app = new koa()

app.use(async request => {
  console.log(request)
})

const server = http.createServer(app.callback())

server.listen(3000)

