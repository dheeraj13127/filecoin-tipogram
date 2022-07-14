import React, { useState } from 'react'
import '../../../../styles/LandingStyles/LandingNavbar.scss'
import {Grid,AppBar,Button,Toolbar,Menu,MenuItem} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {useLocation} from 'react-router-dom'
import logo from '../../../../assets/landing/tipogram-logo-3.png'
function LandingNavbar() {
  const location=useLocation()
    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div className="">
    <Grid container>
 
      <Grid item xs={12}>
        <AppBar position="static" className="landingNavbar">
          <Toolbar>
            <div className="landingNavbarLogoBox">
              <img src={logo} alt="logo" className="landingNavbarLogo"/>
            </div>
            <div className="landingNavbarLarge">
              {
                location.pathname==='/' ?(
                  <>
                   
            
              <a className='navigatingLink' href='/signUp'><Button size="large" className="landingNavbarItems">
               SignUp
              </Button></a>
              <a className='navigatingLink' href='/signIn'><Button size="large" className="landingNavbarItems">
                SignIn
              </Button></a>
                  </>
                ):(
                  <>
                  <a className='navigatingLink' href='/'><Button size="large" className="landingNavbarItems">
                Home
              </Button></a>
                  </>
                )
              }
             
              

            </div>

            <div className="landingNavbarSmall">
             
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon className="landingNavbarMenuIcon" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                className="smallLandingNavbar"
              >
                
               
                <a className='navigatingLink' href='/signUp'><MenuItem className="landingSmallNavbarItems" onClick={handleClose}>Sign Up</MenuItem></a>
                 <a className='navigatingLink' href='/signIn'><MenuItem className="landingSmallNavbarItems" onClick={handleClose}>Sign In</MenuItem></a>

              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  </div>
  )
}

export default LandingNavbar