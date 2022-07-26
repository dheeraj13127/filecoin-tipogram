const express=require('express')
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')
const app=express()
app.use(express.json()) 
app.use(cors())
const authRoutes=require('./routes/auth')
const dashboardRoutes=require('./routes/tipogram')

mongoose.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  
}).then(()=>console.log("Successfully connected to mongoDB"))
.catch(err=>console.log(err))
app.use('/auth',authRoutes)
app.use('/dashboard',dashboardRoutes)

const PORT=process.env.PORT||5000
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))