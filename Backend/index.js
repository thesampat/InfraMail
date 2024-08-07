const express = require('express')
const app = express()

app.use(express.json())

const PORT = process.env.Node_Mode == 'development' ? 5000 : 3000
const clientRouter = require('./routes/clients')
const dbMiddleware = require('./middlewears/db');

app.use(dbMiddleware)

app.use('/test', (req, res)=>res.send("Backend API Infra"))
app.use('/client', clientRouter)

app.listen(PORT, () => {
    console.log("server is running on port: " + PORT)
})

