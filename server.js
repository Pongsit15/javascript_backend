const express = require('express')
const {
    readdirSync
} = require('fs')
const morgan =   require('morgan');
const cors = require ('cors')
const bodyParse = require('body-parser')
// const pool = require ('./Connect/db')
// วิธีที่ 1
// const productRouter = require ('./Routes/product') 
// const auth = require ('./Routes/auth') 



const app = express();
// pool()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit: '10mb'})) 



// วิธีที่ 1
// app.use('/api',productRouter)
// app.use('/api',auth)

// วิธีที่ 2 ที่ควรใช้ 
readdirSync('./Router').map((r) => app.use('/api', require('./Router/' + r)))

app.listen(5000, () => console.log('Server ตอนนี้อยู่ที่ port 5000 เด้อ'))