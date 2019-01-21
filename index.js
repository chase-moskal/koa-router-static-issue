
const Koa = require("koa")
const serve = require("koa-static")
const Router = require("koa-router")

const app = new Koa()
const router = new Router()

// // fails with 404... why?
// router.use(serve("public"))

// this, on the other hand, works
app.use(serve("public"))

app.use(router.middleware())
app.listen(8080)

// browse to "http://localhost:8080/testfile.txt"
