import React, { useState } from "react";
import { Grid, Typography, Button,TextField,Select,FormLabel,MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import "../../../../styles/DashboardStyles/PostImage.scss";
import toast, { Toaster } from "react-hot-toast";
import { create } from 'ipfs-http-client'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { uploadImage } from "../../../../redux/action/blockchain";

export default function PostImage({tipogramContract,userData,metamaskAccount}) {

 
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [post,setPost]=useState({
    title:"",
    imgType:"",
    
  })
  const client = create('https://ipfs.infura.io:5001/api/v0')

  const [imgHash,setImgHash]=useState(null)

  const handleInputChange=(e)=>{
   
    setPost((inp)=>({
      ...inp,
      [e.target.name]:e.target.value
    }))
}
const handleSignUpSubmit=async(e)=>{
  e.preventDefault()
 
  if(post.imgType===""||post.title===""||imgHash===""){
    toast("Please fill up the fields",{
      icon:"❗️"
    })
}

  else{
    try {
      const profile=await client.add(imgHash)
      const proUrl=`https://ipfs.infura.io/ipfs/${profile.path}`
      const data={
        title:post.title,
        imgType:post.imgType,
        imgUrl:proUrl
      }
      dispatch(uploadImage(data,tipogramContract,userData,metamaskAccount,navigate))
      setPost({imgType:"",title:"",tipAmount:""})
      setImgHash(null)
      
    } catch (error) {
      toast.error("Something went wrong !")
}
  }

}
  return (
    <>
    <div className="postImageParentContainer">
   
      <Grid container className="postImageContainer" >
        <Grid item xs={12} sm={2} md={2} lg={3}></Grid>
        <Grid item xs={12} sm={8} md={8} lg={6} className="postImageBox">
       
              <form autoComplete="off" >
                <Stack className="postImageFormBox" spacing={2}>
                  <Typography
                    variant="h6"
                    className="postImageTitle"
                    align="center"
                  >
                    Post Your Crypto Image
                  </Typography>

                  <TextField
                    label="Title"
                    type="text"
                    className="postImageInput"
                    name="title"
                    value={post.title}
                    onChange={handleInputChange}
                  />
                   <FormLabel id="demo-row-radio-buttons-group-label postImageSelectLabel">
                    Choose Image Category
                  </FormLabel><br />
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={post.imgType}
                    label="Image Type"
                    name="imgType"
                    onChange={handleInputChange}
                    className="postImageSelect"
                      >
                    <MenuItem value={"Art"}>Art</MenuItem>
                    <MenuItem value={"Sport"}>Sport</MenuItem>
                    <MenuItem value={"Cartoon"}>Cartoon</MenuItem>
                    <MenuItem value={"Tech"}>Tech</MenuItem>
                    <MenuItem value={"Health"}>Health</MenuItem>
                    <MenuItem value={"Movie"}>Movie</MenuItem>
                    <MenuItem value={"Music"}>Music</MenuItem>

                    
                  </Select>
               
               
                 
                  <section className="postImageUpload">
                  <FormLabel id="demo-row-radio-buttons-group-label postImageFileLabel">
                    Upload your Crypto Image
                  </FormLabel><br />
                    <input type="file" accept="image/*" onChange={e=>setImgHash(e.target.files[0])}/>
                  </section>
                 
                  <Button onClick={handleSignUpSubmit}  variant="contained" color="primary" className="postImageSubmitBtn">
                   Post
                  </Button>
                        
                </Stack>               
              </form>
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={3}></Grid>
      </Grid>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  
    </>
  );
}