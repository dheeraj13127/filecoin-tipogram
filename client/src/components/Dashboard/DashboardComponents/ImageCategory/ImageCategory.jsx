import React, { useState } from 'react'
import { Typography, Card, CardActionArea, CardContent, Button } from '@mui/material'
import '../../../../styles/DashboardStyles/ImageCategory.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux'
import { updatePostLikes } from '../../../../redux/action/blockchain';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
function ImagesCategory({ tipogramImages, metamaskAccount, tipogramContract, userData }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [imgType, setImgType] = useState("Art")
  const handleOpen = (id,authorId) => {

    if (userData && userData.imagesPosted.includes(id)) {

      toast("You can't tip yourself", {
        icon: "🤗"
      })
    }
    else {
      navigate(`/dashboard/tipimage/${id}/${authorId}`)

    }

  }


  const handleFilterImage = (it) => {
    setImgType(it)
  }



  const handleUpdatePostLikes = (id,authorId) => {
    if (userData && userData.likedPosts.includes(id)) {
      toast("You have already liked this post", {
        icon: "🤗"
      })
    }
    else if (userData && userData.imagesPosted.includes(id)) {
      toast("You can't like yourself", {
        icon: "🤗"
      })
    }
    else {
      dispatch(updatePostLikes(id, tipogramContract, metamaskAccount, userData,authorId))
      
    }

  }



  return (
    <div className="imageCategoryContainer">
      <Typography className='imageCategoryHeader' variant='h5'>Categorized Images</Typography>
      <div className="imageCategoryFilterBtnBox imageCategoryCardParentBox">
        <Button className={imgType === "Art" ? "imageCategoryFilterBtnActive" : "imageCategoryFilterBtn"} size="small" onClick={() => handleFilterImage("Art")}>art</Button>
        <Button className={imgType === "Sport" ? "imageCategoryFilterBtnActive" : "imageCategoryFilterBtn"} size="small" onClick={() => handleFilterImage("Sport")}>sport</Button>
        <Button className={imgType === "Cartoon" ? "imageCategoryFilterBtnActive" : "imageCategoryFilterBtn"} size="small" onClick={() => handleFilterImage("Cartoon")}>cartoon</Button>
        <Button className={imgType === "Tech" ? "imageCategoryFilterBtnActive" : "imageCategoryFilterBtn"} size="small" onClick={() => handleFilterImage("Tech")}>tech</Button>
        <Button className={imgType === "Nature" ? "imageCategoryFilterBtnActive" : "imageCategoryFilterBtn"} size="small" onClick={() => handleFilterImage("Nature")}>nature</Button>
        <Button className={imgType === "Movie" ? "imageCategoryFilterBtnActive" : "imageCategoryFilterBtn"} size="small" onClick={() => handleFilterImage("Movie")}>movie</Button>
        <Button className={imgType === "Music" ? "imageCategoryFilterBtnActive" : "imageCategoryFilterBtn"} size="small" onClick={() => handleFilterImage("Music")}>music</Button>
      </div>

      <div className='imageCategoryCardParentBox'>
        {tipogramImages.filter(z => z.imageType === imgType).map((x, index) => (

          <div key={index} component={Card} className="imageCategoryCardParent">
            <CardActionArea className='imageCategoryCard'>
              <CardContent>
                <div className="imageCategoryImgBox">
                  <img src={x.hash} loading="eager" alt="cartoon" className="imageCategoryImg" />
                  <span className='imageCategoryLikeBtn'  onClick={() => handleUpdatePostLikes(x.id,x.authorId)}>
                    {userData && userData.likedPosts.includes(x.id) ? <FavoriteIcon color="error" className='imageCategoryLikeIconUnliked' /> : <FavoriteBorderIcon className='imageCategoryLikeIconUnliked' />}
                  </span>
                </div>

                <div className="imageCategoryTitleBox">
                  <Typography
                    className='imageCategoryCardTitle'
                    gutterBottom
                    variant='h6'
                  >
                    {x.description}
                  </Typography>
                  <span className="imageCategoryEthSymbol">
                    ETH
                  </span>
                </div>
                <div className="imageCategoryCreatorInfoBox">
                  <div className="imageCategoryInfoImgBox">
                    <img src={x.authorImg} alt="author-img" className="imageCategoryCreatorImg" />
                    <div className="latestImageCreatorInfo">
                      <Typography variant='body1' className='latestImageCreatorInfoCreator'>Creator</Typography>
                      <Typography variant='h6' className='latestImageCreatorInfoCreatorName'>{x.authorName}</Typography>
                    </div>
                  </div>
                  <div className="imageCategoryInfoTipBtnBox">
                    <Button component="span" size='small' className='imageCategoryInfoTipBtn' onClick={() => handleOpen(x.id,x.authorId)}>Tip</Button>
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

export default ImagesCategory