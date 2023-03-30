const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connection = require('./config/db')
const port = process.env.PORT || 3001
const { errorHandler } = require('./middleware/errorMiddleware')
const app = express();


connection();

app.use(express.urlencoded({extended: false}))
app.use(express.json());



app.use('/api/workouts', require('./routes/workOutRoutes'))

app.use(errorHandler)


app.listen(port, () => console.log(`server started on port ${port}`))