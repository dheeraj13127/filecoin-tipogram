import React from 'react'
import {Grid,Typography,Card,CardActionArea,CardContent} from '@mui/material'
import cartoon from '../../../../assets/dashboard/digitalart.jpg'
import '../../../../styles/DashboardStyles/LatestImages.scss'
function LatestImages() {
  return (
    <div>
      <Grid container spacing={6}>
      <Grid component={Card} className="latestImagesCardParent"  item xs={12} md={4} lg={3} style={{ display: 'grid' }}>
                    <CardActionArea className='latestImagesCard'>
                      <CardContent className="featuresSectionCardContent">
                        <div className="latestImagesImgBox">
                        <img src={cartoon} alt="cartoon" className="latestImagesImg" />
                        </div>
                      
                       
                        <Typography
                          className='featuresSectionCardTitle'
                          gutterBottom
                          variant='h5'
                        >
                          hello
                        </Typography>
                        <Typography className='featuresSectionCardInfo' variant='body2'>
                          ok man
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Grid>
                  <Grid component={Card} className="latestImagesCardParent"  item xs={12} md={4} lg={3} style={{ display: 'grid' }}>
                    <CardActionArea className='latestImagesCard'>
                      <CardContent className="featuresSectionCardContent">
                        <div className="latestImagesImgBox">
                        <img src={cartoon} alt="cartoon" className="latestImagesImg" />
                        </div>
                      
                       
                        <Typography
                          className='featuresSectionCardTitle'
                          gutterBottom
                          variant='h5'
                        >
                          hello
                        </Typography>
                        <Typography className='featuresSectionCardInfo' variant='body2'>
                          ok man
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Grid>
                  <Grid component={Card} className="latestImagesCardParent"  item xs={12} md={4} lg={3} style={{ display: 'grid' }}>
                    <CardActionArea className='latestImagesCard'>
                      <CardContent className="featuresSectionCardContent">
                        <div className="latestImagesImgBox">
                        <img src={cartoon} alt="cartoon" className="latestImagesImg" />
                        </div>
                      
                       
                        <Typography
                          className='featuresSectionCardTitle'
                          gutterBottom
                          variant='h5'
                        >
                          hello
                        </Typography>
                        <Typography className='featuresSectionCardInfo' variant='body2'>
                          ok man
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Grid>
                  <Grid component={Card} className="latestImagesCardParent"  item xs={12} md={4} lg={3} style={{ display: 'grid' }}>
                    <CardActionArea className='latestImagesCard'>
                      <CardContent className="featuresSectionCardContent">
                        <div className="latestImagesImgBox">
                        <img src={cartoon} alt="cartoon" className="latestImagesImg" />
                        </div>
                      
                       
                        <Typography
                          className='featuresSectionCardTitle'
                          gutterBottom
                          variant='h5'
                        >
                          hello
                        </Typography>
                        <Typography className='featuresSectionCardInfo' variant='body2'>
                          ok man
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Grid>
      </Grid>
    </div>
  )
}

export default LatestImages