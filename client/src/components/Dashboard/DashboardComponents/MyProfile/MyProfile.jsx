import { Button, Grid, Tooltip, Typography } from '@mui/material'
import React from 'react'
import '../../../../styles/DashboardStyles/MyProfile.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import {FaEthereum} from 'react-icons/fa'
import HashLoader from 'react-spinners/HashLoader';
import { PopularBadge, TipogramAchieverBadge, TipogramArtistBadge, TipogramVerfied, WellTippedBadge } from '../BadgesIssuer/BadgesContent';
function MyProfile({userData}) {
  return (
    <div className='myProfileContainer'>
      <div className="myProfileContainerBox">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} className="myProfileUserImgBox">
          {userData&&userData.profileImg===undefined?
          <img  className='myProfileUserImg' alt='userImg' loading='eager' src={userData&&userData.profileImage}/>:<HashLoader color="#ffffff" loading={true}  size={120} />
}
          <Typography variant='h6' className='myProfileUserName'>{userData&&userData.userName}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} textAlign="center" className='myProfileStatsBox'>
        <Typography variant='h6' className='myProfileStatsTitle'>Stats</Typography>
        <div className="myProfileStatsDataBox">
        <Tooltip title="Likes earned" placement='top'>
          <Button className='myProfileStatsDetail'><FavoriteIcon color="error" className='myProfileStatsLikeIcon'/>{userData&&userData.likeCount}</Button>
        </Tooltip>
        <Tooltip title="Total posts" placement='top'>
          <Button className='myProfileStatsDetail'><ColorLensIcon  className='myProfileStatsPaintIcon'/>{userData&&userData.imagesPosted.length}</Button>
        </Tooltip>
        <Tooltip title="Tips received" placement='top'>
          <Button className='myProfileStatsDetail'><FaEthereum  className='myProfileStatsTipsIcon'/>{userData&&userData.tipsReceived}</Button>
          </Tooltip>
        </div>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} textAlign="center"></Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} textAlign="center" className='myProfileBadgesBox'>
        <Typography variant='h6' className='myProfileBadgesTitle'>Badges</Typography>
        <div className="myProfileBadgesDataBox">
               <Tooltip title="Tipogram verified" placement='top'>
                <Button><TipogramVerfied/></Button>
                </Tooltip>
               <Tooltip title="Popular" placement='top'>
                <div className={`${userData&&userData.badges.includes(1)?"":"myProfileBadgesIconDisabled"}`}><PopularBadge/></div>
                </Tooltip>
               <Tooltip title="Well Tipped" placement='top'>
                <div className={`${userData&&userData.badges.includes(2)?"":"myProfileBadgesIconDisabled"}`}><WellTippedBadge/></div>
                </Tooltip>
               <Tooltip title="Tipogram Artist" placement='top'>
                <div className={`${userData&&userData.badges.includes(3)?"":"myProfileBadgesIconDisabled"}`}><TipogramArtistBadge/></div>
                </Tooltip>
               <Tooltip title="Tipogram Achiever" placement='top'>
                <div className={`${userData&&userData.badges.includes(4)?"":"myProfileBadgesIconDisabled"}`}><TipogramAchieverBadge/></div>
                </Tooltip>
        </div>
        </Grid>
      </Grid>
      </div>
     
    </div>
  )
}

export default MyProfile