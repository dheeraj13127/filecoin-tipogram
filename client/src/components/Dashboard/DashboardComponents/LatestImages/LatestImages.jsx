import React,{useState} from 'react'
import {Typography,Card,CardActionArea,CardContent, Button, IconButton} from '@mui/material'
import cartoon from '../../../../assets/dashboard/digitalart.jpg'
import '../../../../styles/DashboardStyles/LatestImages.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
function LatestImages({tipogramImages}) {
  const [like,setLike]=useState("0")
  console.log(tipogramImages)
  return (
    <div className="latestImagesContainer">
     <Typography className='latestImagesHeader' variant='h5'>Latest Crypto Images</Typography>
<div className='latestImagesCardParentBox'>
        {tipogramImages.map((x,index)=>(
     
          <div key={index} component={Card} className="latestImagesCardParent">
                    <CardActionArea className='latestImagesCard'>
                      <CardContent>
                        <div className="latestImagesImgBox">
                        <img src={cartoon} alt="cartoon" className="latestImagesImg" />
                        <IconButton className='latestImagesLikeBtn' size="small" onClick={()=>setLike(!like)}>
                          {like?<FavoriteIcon className='latestImagesLikeIconUnliked'/>:<FavoriteBorderIcon className='latestImagesLikeIconUnliked' />}
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
                          <Button size='small' className='latestImagesInfoTipBtn'>Tip</Button>
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