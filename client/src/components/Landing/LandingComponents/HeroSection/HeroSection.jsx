import { Grid, Typography,Button } from '@mui/material'
import React from 'react'
import '../../../../styles/LandingStyles/HeroSection.scss'
import heroSectionMain from '../../../../assets/landing/herosection-main.png'
function HeroSection() {
    return (
        <div className='heroSectionContainer'>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={6} className="heroSectionImgBoxSmall">
                    <div className="">
                    <img src={heroSectionMain} alt="heroSectionMainImgSmall" className='heroSectionMainImgSmall'/>
                    </div>
                 
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Typography variant='h2' className='heroSectionTitle'>Discover a New Era of Crypto Images</Typography>
                    <Typography variant='body1' className='heroSectionSubtitle'>Tipogram is a marketplace where you can explore various images.
                       <br /> You can tip the image if you are awestruck by it.
                    </Typography>
                    <div className='heroSectionButtonBox'>
                    <Button className="heroSectionButton">Get Started</Button>
                    </div>
                   
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <div className="heroSectionImgBox">
                    <img src={heroSectionMain} alt="heroSectionMainImg"/>
                    </div>
                 
                </Grid>
            </Grid>
        </div>
    )
}

export default HeroSection