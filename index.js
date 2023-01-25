const express = require('express')
const blogRouter = require('./router/blogs')
const homeRouter = require('./router/home')
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencodeds
app.use(express.static('public')); 

const port = 3000

/** middleware */
const myLogger = (req, res, next) => {
    req.time = new Date();
    next()
}

app.use(myLogger);


/** set template engine EJS */
app.set('view engine', 'ejs')

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/login', (req, res) => {
    res.render('pages/blogs/login')
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

app.use("/", homeRouter)
app.use(blogRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})