require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const connectDB = require ('./config/db');

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

//Conecta ao banco de dados
connectDB();


//Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))



app.get('/', (req, res) =>{
    res.json({msg: "Funcionou GET"})
})

const PORT = 5000;

app.listen(PORT, () => console.log({PORT}))
