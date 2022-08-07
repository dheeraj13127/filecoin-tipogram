import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import '../../../styles/DashboardStyles/DashboardDisplay.scss'

import {LatestImages,ImageCategory,FeaturedArtists} from '../.'

function DashboardDisplay({userData,ethBalance,metamaskAccount,tipogramContract,tipogramImages,tipogramUsers,tipogramUserId}) {
 



  return (
    <div className='dashboardDisplayContainer'>
      {
        tipogramImages.length===0?(
        <div className='dashboardDisplayLoader'> 
         <HashLoader color="#ffffff" loading={true}  size={100} />
        </div>)
        :
        (<>
         
        <LatestImages tipogramImages={tipogramImages} metamaskAccount={metamaskAccount} tipogramContract={tipogramContract} userData={userData}/>
        <FeaturedArtists userData={userData} tipogramUserId={tipogramUserId}  tipogramUsers={tipogramUsers}/>
        <ImageCategory tipogramImages={tipogramImages} metamaskAccount={metamaskAccount} tipogramContract={tipogramContract} userData={userData}/>
        
        </>)
      }
      
    </div>
  )
}

export default DashboardDisplay