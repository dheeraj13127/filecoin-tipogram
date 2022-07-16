const mongoose=require('mongoose')


const tipogramUserSchema=new mongoose.Schema({
  userName: {
    type: String,
    required: true,

    max: 30,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: { 
    type: String,
    required: true,
  },
  gender:{
      type:String,
      required:true
  },
  profileImage:{
      type:String,
      required:true
  },
  likeCount:{
    type:Number,
    required:true
  },
  tipsReceived:{
    type:Number,
    required:true
  },
  badges:{
    type:Array,
    required:true
  }

},{timestamps:true})


module.exports=mongoose.model('TipogramUser',tipogramUserSchema)