import React from 'react'
import {Typography,Card,CardActionArea,CardContent, Button} from '@mui/material'
import '../../../../styles/DashboardStyles/LatestImages.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useDispatch} from 'react-redux'
import {updatePostLikes } from '../../../../redux/action/blockchain';
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import {useAccount} from 'wagmi'
function LatestImages({tipogramImages,metamaskAccount,tipogramContract,userData}) {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleOpen = (id,authorId) =>{ 
    
    if(userData&&userData.imagesPosted.includes(id)){
   
      toast("You can't tip yourself",{
        icon:"🤗"
      })
    }
    else{
      navigate(`/dashboard/tipimage/${id}/${authorId}`)
      
    }
   
  }


  const {address}=useAccount()
 
  const handleUpdatePostLikes=(id,authorId)=>{
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
      dispatch(updatePostLikes(id,tipogramContract,address,userData,authorId))
     
    }

  }




  return (
    <div className="latestImagesContainer">
     <Typography className='latestImagesHeader' variant='h5'>Latest Crypto Images</Typography>
<div className='latestImagesCardParentBox'>
        {tipogramImages.sort((a,b)=>b.id-a.id).map((x,index)=>(
     
          <div key={index} component={Card} className="latestImagesCardParent">
                    <CardActionArea className='latestImagesCard'>
                      <CardContent>
                        <div className="latestImagesImgBox">
                        <img src={x.hash} loading="eager" alt="cartoon" className="latestImagesImg" />
                        <span onClick={()=>handleUpdatePostLikes(x.id,x.authorId)} className="latestImagesLikeBtn">
                          {userData&&userData.likedPosts.includes(x.id)?<FavoriteIcon color="error" className='latestImagesLikeIconUnliked'/>:<FavoriteBorderIcon className='latestImagesLikeIconUnliked' />}
                        </span>
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
                          <Button component="span" size='small' className='latestImagesInfoTipBtn' onClick={()=>handleOpen(x.id,x.authorId)}>Tip</Button>
                        </div>
          
                        
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