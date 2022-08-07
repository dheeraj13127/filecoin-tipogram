const express=require('express')
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')
const app=express()
app.use(express.json()) 
app.use(cors({
  origin:"*"
}))
const authRoutes=require('./routes/auth')
const dashboardRoutes=require('./routes/tipogram')
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

mongoose.connect(process.env.DATABASE,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  
}).then(()=>console.log("Successfully connected to mongoDB"))
.catch(err=>console.log(err))
app.use('/auth',authRoutes)
app.use('/dashboard',dashboardRoutes)

const PORT=process.env.PORT||5000
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))