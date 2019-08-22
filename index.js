const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 4000


app.use(bodyParser.json())

const UserController = require('./controllers/user')


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/users',  UserController.index) //auth
app.get('/user/:id',  UserController.show) //auth
app.post('/user', UserController.store)
app.patch('/user/:id',  UserController.patch) //auth
app.delete('/user/:id',  UserController.delete) //auth


app.listen(port, () => console.log(`Listening on port ${port}!`))