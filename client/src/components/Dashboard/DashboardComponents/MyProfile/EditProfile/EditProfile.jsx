import { Button, FormLabel, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import '../../../../../styles/DashboardStyles/EditProfile.scss'
import CloseIcon from '@mui/icons-material/Close';
import HashLoader from 'react-spinners/HashLoader';
import { create } from 'ipfs-http-client'
import {useDispatch} from 'react-redux'
import { updateUserProfile } from '../../../../../redux/action/auth';
function EditProfile({userData,setEdit}) {
    const dispatch=useDispatch()
    const [profileImage,setProfileImage]=useState("")
    const [userName,setUserName]=useState(userData&&userData.userName)
    const [showImg,setShowImg]=useState(false)
    const onHandleProfileImageChange=(e)=>{
        setProfileImage(e.target.files[0])
        setShowImg(true)
    }
    const client = create('https://ipfs.infura.io:5001/api/v0')
    const handleUpdateProfile=async(userId)=>{
       
        if(profileImage!==""){
            const profile=await client.add(profileImage)
            const proUrl=`https://ipfs.infura.io/ipfs/${profile.path}`
            console.log(proUrl)
            dispatch(updateUserProfile(userId,userName,proUrl))
            
        }
        else{
            dispatch(updateUserProfile(userId,userName,userData&&userData.profileImage))
        }
      
       
    }
  return (
    <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} className="">
              <div className='myProfileEditButtonBox'>
              
              <Button onClick={()=>setEdit(false)} className='myProfileEditButton'><CloseIcon/></Button>
             
              </div>
              {userData&&userData.profileImg===undefined?
              
              <div className='myProfileUserImgBox'>
                {
                    showImg?<img  className='myProfileUserImg' alt='userImg' loading='eager' src={URL.createObjectURL(profileImage)}/>
                    :<img  className='myProfileUserImg' alt='userImg' loading='eager' src={userData&&userData.profileImage}/>
                }
              
                </div>
           
              :<div className='myProfileUserImgBox'>
                <HashLoader color="#ffffff" loading={true}  size={120} />
                </div>
}
    
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} ></Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} className="editProfileUploadFileBox" >
            <section className="editProfileUploadFileBoxForm">
                  <FormLabel id="demo-row-radio-buttons-group-label" className='editProfileFileLabel'>
                    Change Profile Picture
                  </FormLabel><br /><br/>
                    <input type="file" accept="image/*" onChange={onHandleProfileImageChange}/>
                  </section>
                  <TextField
                  autoComplete='off'
                    label="Username"
                    type="text"
                    name="userName"
                    className="editProfileInput"
                    value={userName}
                    variant="filled"
                    onChange={(e)=>setUserName(e.target.value)}
                    
                  />
                  <Button onClick={()=>handleUpdateProfile(userData._id)} className='editProfileUpdateBtn'>Update</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} ></Grid>
            </Grid>
  )
}

export default EditProfile