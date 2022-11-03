const express = require('express')
const dotEnv = require('dotenv').config();
const colors = require('colors')
const {errorHandler}   = require('./middleware/errorMiddleware')
const connectDb = require('./config/db')
const app = express()

const PORT = process.env.PORT || 5000;

connectDb()

//to get values from our body

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(errorHandler)

app.use('/api/goals',require('./routes/goalRoutes') )

app.listen(PORT, () => {
    console.log(`server working on port ${PORT}`)
} )