import React from 'react'
import {Typography,Card,CardActionArea,CardContent} from '@mui/material'
import '../../../../../styles/DashboardStyles/MyPosts.scss'

function MyPosts({tipogramImages,tipogramUserId}) {



  return (
    <div className="myPostsContainer">
     <Typography className='myPostsHeader' textAlign="center" variant='h5'>My Posts</Typography>
<div className='myPostsCardParentBox'>
        {tipogramImages.filter(x=>x.authorId===tipogramUserId).sort((a,b)=>b.id-a.id).map((x,index)=>(
     
          <div key={index} component={Card} className="myPostsCardParent">
                    <CardActionArea className='myPostsCard'>
                      <CardContent>
                        <div className="myPostsImgBox">
                        <img src={x.hash} loading="eager" alt="cartoon" className="myPostsImg" />
                        </div>
                      
                       <div className="myPostsTitleBox">
                       <Typography
                          className='myPostsCardTitle'
                          gutterBottom
                          variant='h6'
                        > 
                          {x.description}
                        </Typography>
                        <span className="myPostsEthSymbol">
                          ETH
                        </span>
                       </div>
                       <div className="myPostsCreatorInfoBox">
                        <div className="myPostsInfoImgBox">
                        <img src={x.authorImg} alt="author-img" className="myPostsCreatorImg"/>
                        <div className="myPostsCreatorInfo">
                        <Typography variant='body1'className='myPostsCreatorInfoCreator'>Creator</Typography>
                        <Typography variant='h6'className='myPostsCreatorInfoCreatorName'>{x.authorName}</Typography>
                        </div>
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

export default MyPosts