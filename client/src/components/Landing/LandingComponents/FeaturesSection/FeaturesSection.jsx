import { CardActionArea, CardContent, Grid,Typography,Card } from '@mui/material'
import React from 'react'
import '../../../../styles/LandingStyles/FeaturesSection.scss'
import Lottie from 'react-lottie-player'
import { featuresSectionData } from './FeaturesSectionData'
function FeaturesSection() {
  return (
    <div className='featuresSectionContainer'>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant='h3' className='featuresSectionHeader'>Create & Sell Your Images</Typography>
            </Grid>
            {
                featuresSectionData.map((fs,index)=>(
                    <Grid component={Card} className="featuresSectionCardParent" key={index} item xs={12} md={6} lg={4} style={{ display: 'grid' }}>
                    <CardActionArea className='featuresSectionCard'>
                      <CardContent className="featuresSectionCardContent">
                        <div className="featuresSectionLottieBox">
                        <Lottie
                          loop
                          animationData={fs.lottie}
                          play
                          style={{ width: 200, height: 200 }}
                          className='featuresSectionLottie'
                        />
                        </div>
                      
                       
                        <Typography
                          className='featuresSectionCardTitle'
                          gutterBottom
                          variant='h5'
                        >
                          {fs.title}
                        </Typography>
                        <Typography className='featuresSectionCardInfo' variant='body2'>
                          {fs.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Grid>
                ))
            }
        </Grid>
    </div>
  )
}

export default FeaturesSection