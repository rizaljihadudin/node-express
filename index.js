const express = require('express')
const blogRouter = require('./router/blogs')
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

app.get('/', (req, res) => {
    const blogs = {
        title : 'Harry Potter',
        author : 'Raldin'
    }
    res.render('pages/index', { blogs : blogs })
})

app.get('/about', (req, res) => {
    res.render('pages/about')
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