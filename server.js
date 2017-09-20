const express = require(`express`)
const morgan = require(`morgan`)
const basicAuth = require('express-basic-auth')

const app = express()

const basicAuthMiddleware = basicAuth({
  users: { 'admin': 'admin' },
  challenge: true,
  realm: 'Imb4T3st4pp'
});

app.set(`view engine`, `ejs`)
app.use(`/static`, express.static(`public`))
app.use(morgan(`tiny`))

app.get(`/`, (req, res) => {
  res.render('index.ejs')
})
app.get(`/admin`, basicAuthMiddleware, (req, res) => {
  res.render(`admin.ejs`)
})
app.get(`/writting`, (req, res) => {
  res.render(`writting.ejs`)
})

app.listen(3001, () => {
  console.log(`listening...`)
})