import React,{useState} from 'react'
import {Typography,Card,CardActionArea,CardContent, Button, IconButton, Modal, Box, TextField} from '@mui/material'
import '../../../../styles/DashboardStyles/LatestImages.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useDispatch} from 'react-redux'
import { tipImages, updatePostLikes } from '../../../../redux/action/blockchain';
import toast from 'react-hot-toast'
function LatestImages({tipogramImages,metamaskAccount,tipogramContract,userData}) {
  const dispatch=useDispatch()
  const [open, setOpen] = useState(false);
  const handleOpen = (id) =>{ 
    if(userData&&userData.imagesPosted.includes(id)){
      toast("You can't tip yourself",{
        icon:"🤗"
      })
    }
    else{
      setOpen(true)
    }
   
  }
  const handleClose = () => setOpen(false);
  const [tipAmt,setTipAmt]=useState("")
 
 
  const handleUpdatePostLikes=(id)=>{
    if(userData&&userData.likedPosts.includes(id)){
      toast("You have already liked this post",{
        icon:"🤗"
      })
    }
    else if(userData&&userData.imagesPosted.includes(id)){
      toast("You can't like yourself",{
        icon:"🤗"
      })
    }
    else{
      dispatch(updatePostLikes(id,tipogramContract,metamaskAccount,userData))
    }

  }


  const handleImageTip=(id)=>{
    
    if(tipAmt===""||tipAmt==="0"||tipAmt==null){
      toast("Please enter a valid tip amount",{
        icon:"❗️"
      })
    }
    
 
    else{
      dispatch(tipImages(id,tipogramContract,metamaskAccount,tipAmt))
    }
     
  } 

  return (
    <div className="latestImagesContainer">
     <Typography className='latestImagesHeader' variant='h5'>Latest Crypto Images</Typography>
<div className='latestImagesCardParentBox'>
        {tipogramImages.sort((a,b)=>b.createdAt-a.createdAt).map((x,index)=>(
     
          <div key={index} component={Card} className="latestImagesCardParent">
                    <CardActionArea className='latestImagesCard'>
                      <CardContent>
                        <div className="latestImagesImgBox">
                        <img src={x.hash} loading="eager" alt="cartoon" className="latestImagesImg" />
                        <IconButton className='latestImagesLikeBtn' size="small" onClick={()=>handleUpdatePostLikes(x.id)}>
                          {userData&&userData.likedPosts.includes(x.id)?<FavoriteIcon color="error" className='latestImagesLikeIconUnliked'/>:<FavoriteBorderIcon className='latestImagesLikeIconUnliked' />}
                        </IconButton>
                        </div>
                      
                       <div className="latestImagesTitleBox">
                       <Typography
                          className='latestImagesCardTitle'
                          gutterBottom
                          variant='h6'
                        >
                          {x.description}
                        </Typography>
                        <span className="latestImagesEthSymbol">
                          ETH
                        </span>
                       </div>
                       <div className="latestImagesCreatorInfoBox">
                        <div className="latestImagesInfoImgBox">
                        <img src={x.authorImg} alt="author-img" className="latestImagesCreatorImg"/>
                        <div className="latestImageCreatorInfo">
                        <Typography variant='body1'className='latestImageCreatorInfoCreator'>Creator</Typography>
                        <Typography variant='h6'className='latestImageCreatorInfoCreatorName'>{x.authorName}</Typography>
                        </div>
                        </div>
                        <div className="latestImagesInfoTipBtnBox">
                          <Button size='small' className='latestImagesInfoTipBtn' onClick={()=>handleOpen(x.id)}>Tip</Button>
                        </div>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                        <Box  className="latestImagesTipBox">
                        <TextField type="number" value={tipAmt} onChange={(e)=>setTipAmt(e.target.value)} id="outlined-basic" label="Tip Amount" variant="outlined" />
                        <Button onClick={()=>handleImageTip(x.id)}  size='small' className='latestImagesTipBoxBtn'>Tip</Button>
                        </Box>
                        </Modal>
                        
                       </div>
                        
                        
                      </CardContent>
                    </CardActionArea>
                  </div>

    
        ))
        }
                 
             
     
                 </div>
   
    </div>
  )
}

export default LatestImages