const express = require('express')
const blogRouter = require('./router/blogs')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const port = 3000


app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/users', (req, res) => {
    res.send('Get User')
})

app.post('/users', (req, res) => {
    res.send('Post User')
})

app.put('/users/:userId', (req, res) => {
    res.send(req.params)
})

app.delete('/users/:userId', (req, res) => {
    res.send(req.params)
})

app.use(blogRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})