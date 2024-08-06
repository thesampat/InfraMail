const express = require('express')
const app = express()

const PORT = process.env.Node_Mode == 'development' ? 5000 : 3000


const testRouter = require('./routes/test')

app.use('/', testRouter)

app.listen(PORT, () => {
    console.log("server is running on port: " + PORT)
})

