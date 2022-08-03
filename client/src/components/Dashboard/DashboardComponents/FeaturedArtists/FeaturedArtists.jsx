import React from 'react'
import { Typography, Card, CardActionArea, CardContent, Button, Tooltip } from '@mui/material'
import '../../../../styles/DashboardStyles/FeaturedArtists.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import {PopularBadge,TipogramAchieverBadge,TipogramArtistBadge,WellTippedBadge,TipogramVerfied} from '../BadgesIssuer/BadgesContent'
function FeaturedArtists({ tipogramUsers}) {



  return (
    <div className="featuredArtistsContainer">
      <Typography className='featuredArtistsHeader' variant='h5'>Featured Artists</Typography>
     

      <div className='featuredArtistsCardParentBox'>
        {tipogramUsers&&tipogramUsers.map((x, index) => (

          <div key={index} component={Card} className="featuredArtistsCardParent">
            <CardActionArea component="span" className='featuredArtistsCard'>
              <CardContent>
               <div className="featuredArtistsImgBox">
                <img src={x.profileImage} alt="featuredArtistsProfileImg" className='featuredArtistsProfileImg' />
                <Tooltip title="Total likes" placement='top'>
                <Button size='small' className="featuredArtistsLikeBtn"><FavoriteIcon color="error" className='featuredArtistsLikeIcon'/>{x.likeCount}</Button>
                </Tooltip>
               </div>
               <div className="featuredArtistsNameBox">
               <Typography variant='h6' className='featuredArtistsCreatorName'>{x.userName}</Typography>
               <Tooltip title="Crypto images posted" placement='top'>
                <Button size='small' className="featuredArtistsLikeBtn"><ColorLensIcon color="error" className='featuredArtistsPaintIcon'/>{x.imagesPosted.length}</Button>
                </Tooltip>
               </div>
               <div className="featuredArtistsBadgesBox">
               <Tooltip title="Tipogram verified" placement='top'><span><TipogramVerfied/></span></Tooltip>
               <Tooltip title="Popular" placement='top'><span>{x.badges.includes(1)&&<PopularBadge/>}</span></Tooltip>
               <Tooltip title="Well Tipped" placement='top'><span>{x.badges.includes(2)&&<WellTippedBadge/>}</span></Tooltip>
               <Tooltip title="Tipogram Artist" placement='top'><span>{x.badges.includes(3)&&<TipogramArtistBadge/>}</span></Tooltip>
               <Tooltip title="Tipogram Achiever" placement='top'><span>{x.badges.includes(4)&&<TipogramAchieverBadge/>}</span></Tooltip>
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

export default FeaturedArtists