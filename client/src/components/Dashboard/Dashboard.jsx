import React,{useEffect,useState} from 'react'
import { Toaster } from "react-hot-toast";
import {useDispatch,useSelector} from 'react-redux'
import { Routes, Route,useNavigate } from "react-router-dom";
import '../../styles/DashboardStyles/Dashboard.scss'
import {DashboardDisplay,MyProfile,PostImage,DashboardNavbar,TipImage} from './index'
import {getAllUsers, getUserProfile} from '../../redux/action/auth'
import { connectWallet } from '../../redux/action/blockchain';
import {ethers} from 'ethers'
import {LandingFooter} from '../Landing'
function Dashboard() {
  let tipogramContract=useSelector(state=>state.tipogramContract)

  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
  const [images,setImages]=useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let tipogramUserId = sessionStorage.getItem("tipogramUserId");
  let userProfile = {
      userId: tipogramUserId,
    };


    useEffect(() => {
      fetchTipogramImagesFromContract();
    },[tipogramContract])// eslint-disable-line react-hooks/exhaustive-deps 


    const fetchTipogramImagesFromContract=async()=>{
      const imageCount=await tipogramContract.methods.imageCount().call()
      for(var i=1;i<=imageCount;i++){
        const image=await tipogramContract.methods.images(i).call()
        
        setImages(prevState=>[...prevState,image])
      }
     }
    
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
    useEffect(()=>{
      dispatch(getAllUsers())
    },[])// eslint-disable-line react-hooks/exhaustive-deps 
    let tipogramUsers = useSelector(
      (state) => state.tipogramUsers
    );
  
  return (
    <>
    <div className='dashboardContainer'>
     
      <DashboardNavbar tipogramContract={tipogramContract} userData={userData} ethBalance={userBalance} metamaskAccount={defaultAccount}/>
    <Routes>
     <Route path='/' 
     element={<DashboardDisplay tipogramUserId={tipogramUserId} tipogramUsers={tipogramUsers} tipogramImages={images}  tipogramContract={tipogramContract} errorMessage={errorMessage} metamaskAccount={defaultAccount} ethBalance={userBalance} userData={userData}/>}/>   
    <Route path='/myProfile' element={<MyProfile/>}/>
    <Route path='/postImage' element={<PostImage userData={userData} tipogramContract={tipogramContract} metamaskAccount={defaultAccount}/>}/>
    <Route path='/tipImage/:id/:authorId' element={<TipImage userData={userData} tipogramContract={tipogramContract} metamaskAccount={defaultAccount}/>} />
    </Routes>     
    
    <Toaster position="top-center" reverseOrder={false} />
    </div>
    <div className="landingContainerFooter">
        <LandingFooter/>
      </div>
</>
  )
}

export default Dashboard