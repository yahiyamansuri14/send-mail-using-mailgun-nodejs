const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./api/v1/router/userRouter')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use('/v1/user', userRouter)



app.listen(3300, (err) =>{
        if (err) console.log("there is some problem while running server")
        else console.log('server started')
})