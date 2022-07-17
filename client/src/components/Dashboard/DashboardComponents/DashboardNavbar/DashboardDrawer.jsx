import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Chip,
  Avatar,
 

} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu'
import '../../../../styles/DashboardStyles/DashboardDrawer.scss'
import logo from '../../../../assets/landing/tipogram-logo-3.png'
import profileDefault from '../../../../assets/landing/tipogram-logo-2.png'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {userSignOut} from '../../../../redux/action/auth'
import metamask from '../../../../assets/dashboard/metamask.png'
import {useLocation} from 'react-router-dom'
const drawerWidth=240
function DrawerComponent({userData,ethBalance,metamaskAccount}) {
  const location = useLocation();  
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleUserSignOut=()=>{
      dispatch(userSignOut(navigate));
  }
  return (
    <>
     <AppBar position="static" className="dashboardNavbar">
          <Toolbar>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className="dashboardNavbarMenuIcon" />
      </IconButton>
          
          </Toolbar>
      </AppBar>    
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          
      >
        <List className="dashboardDrawerList">
        <ListItem onClick={() => setOpenDrawer(false)}>
        <div className="dashboardNavbarLogoBox">
              <img src={logo} alt="logo" className="dashboardNavbarLogo"/>
            </div>
          </ListItem>
         <ListItem onClick={() => setOpenDrawer(false)} >
            <a href="/myProfile" className="navigatingLink dashboardDrawerListProfile">
            <img src={userData?userData.profileImage:profileDefault} alt="profile-img" className="dashboardDrawerUserImg"/>
            <Typography variant="body1" className="dashboardDrawerUserName">{userData&&userData.userName}</Typography>
            </a>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} className="dashboardDrawerListItemBox">
          <Chip
                 avatar={<Avatar alt="Metamask" src={metamask} />}
                 label={metamaskAccount?`${parseFloat(ethBalance).toFixed(3)} ETH`:"disconnected"}
                variant="outlined"
                className="dashboardDrawerChip"
                 />
          </ListItem>
          {
                location.pathname!=='/dashboard'&&(
            <ListItem onClick={() => setOpenDrawer(false)} className="dashboardDrawerListItemBox">
             <a href='/dashboard'  className='navigatingLink dashboardDrawerListItem'>Dashboard</a>
          </ListItem>
                )
            }
             <ListItem onClick={() => setOpenDrawer(false)} className="dashboardDrawerListItemBox">
             <a href='/dashboard/postImage'  className='navigatingLink dashboardDrawerListItem'>Post</a>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)} className="dashboardDrawerListItemBox">
            <ListItemText>
              <Link to="/signin" className="navigatingLink dashboardDrawerListItem"  onClick={()=>handleUserSignOut()}>Sign Out</Link>
            </ListItemText>
          </ListItem>
      
        </List>
      </Drawer>
      
    </>
  );
}
export default DrawerComponent;