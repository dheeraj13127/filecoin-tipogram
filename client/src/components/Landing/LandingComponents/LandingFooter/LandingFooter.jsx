import React from 'react'
import '../../../../styles/LandingStyles/LandingFooter.scss'
import logo from '../../../../assets/landing/tipogram-logo-3.png'
import { Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
function LandingFooter() {
  return (
    <div className='landingFooterContainer'>
        <Grid container>
            <Grid item xs={4} sm={4} md={4} lg={4}>
                <img src={logo} alt="tipogram-logo" className='landingFooterImage' />
                <Typography variant="body1" className='landingFooterInfo'>Tipogram is the worlds first site for various artists to show case their digital skills.Create,Post and Tip Images</Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} textAlign='center'>
               <Typography variant='h6' className='landingFooterCompany'>Company</Typography>
                <a href="/" className="navigatingLink"><Typography variant='body1' className='landingFooterAboutUs'>About Us</Typography></a>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} textAlign='center'>
          <Typography variant='h6' className='landingFooterCompany'>
            Connect to us on
          </Typography>
          <div className='landingFooterIconsBox'>
          <a href="https://github.com/dheeraj13127" target="_blank" rel="noreferrer" className='footerLink'><GithubIcon className='landingFooterIcon'/></a>
            <a href="https://www.instagram.com/dheeraj_msdian/" rel="noreferrer" target="_blank" className='footerLink'><InstagramIcon className='landingFooterIcon'/></a>
            <a  href="https://www.linkedin.com/in/dheerajs7/" target="_blank" rel="noreferrer"  className='footerLink'><LinkedInIcon className='landingFooterIcon'/></a>
           
          </div>
        </Grid>
        <Grid item xs={12} textAlign="center">
            <Typography variant='body1' className='landingFootercopyright'>© Tipogram 2022</Typography>
        </Grid>
        </Grid>
    </div>
  )
}

export default LandingFooter