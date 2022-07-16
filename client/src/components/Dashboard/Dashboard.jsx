import React,{useEffect,useState} from 'react'
import { Toaster } from "react-hot-toast";
import {useDispatch,useSelector} from 'react-redux'
import { Routes, Route,useNavigate } from "react-router-dom";
import '../../styles/DashboardStyles/Dashboard.scss'
import {DashboardDisplay,MyProfile,PostImage,DashboardNavbar} from './index'
import {getUserProfile} from '../../redux/action/auth'
import { connectWallet } from '../../redux/action/blockchain';
import {ethers} from 'ethers'
function Dashboard() {
  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let tipogramUserId = sessionStorage.getItem("tipogramUserId");
  let userProfile = {
      userId: tipogramUserId,
    };
    useEffect(()=>{
      dispatch(connectWallet(setErrorMessage,setDefaultAccount,setUserBalance,ethers))
},[])// eslint-disable-line react-hooks/exhaustive-deps  
    useEffect(() => {
      if (
        tipogramUserId === "" ||
        tipogramUserId === null ||
        tipogramUserId === undefined 
      ) {
        navigate("/signin");
      }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps 
    useEffect(() => {
      dispatch(getUserProfile(userProfile));
    }, [])// eslint-disable-line react-hooks/exhaustive-deps 
    let userData = useSelector(
      (state) => state.userData
    );
    
  return (
    <div className='dashboardContainer'>
      <DashboardNavbar userData={userData} ethBalance={userBalance} metamaskAccount={defaultAccount}/>
    <Routes>
     <Route path='/' 
     element={<DashboardDisplay errorMessage={errorMessage} metamaskAccount={defaultAccount} ethBalance={userBalance} userData={userData}/>}/>   
    <Route path='/myProfile' element={<MyProfile/>}/>
    <Route path='/postImage' element={<PostImage/>}/>
    </Routes>     
  
<Toaster position="top-center" reverseOrder={false} />
</div>
  )
}

export default Dashboard