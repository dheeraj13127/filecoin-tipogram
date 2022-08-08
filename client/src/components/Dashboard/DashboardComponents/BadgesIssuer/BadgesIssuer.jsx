import React from 'react'
import '../../../../styles/DashboardStyles/BadgesIssuer.scss'
import { useDispatch } from 'react-redux'
import { updateUserBadges } from '../../../../redux/action/auth';
import { Button, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import toast from 'react-hot-toast'
function BadgesIssuer({ userData}) {
  let dispatch = useDispatch()
  let x=new Date(userData&&userData.createdAt)
  let y=new Date(userData&&userData.createdAt)
  const onBadgeClaim=(id)=>{
    if(userData&&userData.likeCount>100&&id===1){
      dispatch(updateUserBadges(userData&&userData._id,id))
      }
  else if(userData&&userData.tipsReceived>15&&id===2){
      dispatch(updateUserBadges(userData&&userData._id,id))
      }
  else if(userData&&userData.tipsReceived>75&&userData.likeCount>500&&id===3){
        dispatch(updateUserBadges(userData&&userData._id,id))
        }
     
   else if(x.getMonth()===y.getMonth()&&x.getDate()===y.getDate()&&x.getFullYear()===2023&&id===4){
        dispatch(updateUserBadges(userData&&userData._id,id))
      }
   else{
        toast("Not eligible to claim",{
          icon: "⚠️",
        })
      }
   
  }

 



  return (
    <div className="badgesIssuerContainer">
      <Grid container spacing={4}>
        <Grid component={Card} className="badgesIssuerParent" item xs={12} sm={6} md={6} lg={3} style={{ display: 'grid' }}>
          <CardActionArea className='badgesIssuerCard'>
            <CardContent className="badgesIssuerContent">
              <Typography
                className='badgesIssuerTitle'
                gutterBottom
                variant='h6'
              >
                Popular
              </Typography>
              <div className="badgesIssuerIconBox">
              <VolunteerActivismIcon className='featuredArtistsBadgeIcon badgesIssuerIcon featuredArtistsBadgeVolunteer '/>
              </div>
            </CardContent>
          </CardActionArea>
          <Button onClick={()=>onBadgeClaim(1)} className='badgesIssuerClaimBtn' disabled={userData&&userData.badges.includes(1)}>
            {userData&&userData.badges.includes(1)?"Claimed":"Claim"}
            </Button>
        </Grid>
        <Grid component={Card} className="badgesIssuerParent" item xs={12} sm={6} md={6} lg={3} style={{ display: 'grid' }}>
          <CardActionArea className='badgesIssuerCard'>
            <CardContent className="badgesIssuerContent">
              <Typography
                className='badgesIssuerTitle'
                gutterBottom
                variant='h6'
              >
                Well Tipped
              </Typography>
              <div className="badgesIssuerIconBox">
              <WorkspacePremiumIcon className='featuredArtistsBadgeIcon badgesIssuerIcon featuredArtistsBadgeWorkspace'/>
              </div>
            </CardContent>
          </CardActionArea>
          <Button  onClick={()=>onBadgeClaim(2)} className='badgesIssuerClaimBtn'  disabled={userData&&userData.badges.includes(2)}>
            {userData&&userData.badges.includes(2)?"Claimed":"Claim"}
            </Button>
        </Grid>
        <Grid component={Card} className="badgesIssuerParent" item xs={12} sm={6} md={6} lg={3} style={{ display: 'grid' }}>
          <CardActionArea className='badgesIssuerCard'>
            <CardContent className="badgesIssuerContent">
              <Typography
                className='badgesIssuerTitle'
                gutterBottom
                variant='h6'
              >
                Tipogram Artist
              </Typography>
              <div className="badgesIssuerIconBox">
              <MilitaryTechIcon className='featuredArtistsBadgeIcon badgesIssuerIcon featuredArtistsBadgeMilitary'/>
              </div>
            </CardContent>
          </CardActionArea>
          <Button onClick={()=>onBadgeClaim(3)} className='badgesIssuerClaimBtn'  disabled={userData&&userData.badges.includes(3)}>
            {userData&&userData.badges.includes(3)?"Claimed":"Claim"}
            </Button>
        </Grid>
        <Grid component={Card} className="badgesIssuerParent" item xs={12} sm={6} md={6} lg={3} style={{ display: 'grid' }}>
          <CardActionArea className='badgesIssuerCard'>
            <CardContent className="badgesIssuerContent">
              <Typography
                className='badgesIssuerTitle'
                gutterBottom
                variant='h6'
              >
                Tipogram Achiever
              </Typography>
              <div className="badgesIssuerIconBox">
              <EmojiEventsIcon className='featuredArtistsBadgeIcon badgesIssuerIcon featuredArtistsBadgeEmoji'/>
              </div>
            </CardContent>
          </CardActionArea>
          <Button onClick={()=>onBadgeClaim(4)} className='badgesIssuerClaimBtn'  disabled={userData&&userData.badges.includes(4)}>
            {userData&&userData.badges.includes(4)?"Claimed":"Claim"}
            </Button>
        </Grid>

      </Grid>


    </div>
  )
}

export default BadgesIssuer