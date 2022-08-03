import React, { useEffect } from 'react'

import {useDispatch} from  'react-redux'
import {badgesData} from './Badgesdata'
import { updateUserBadges } from '../../../../redux/action/auth';
function BadgesIssuer({userData,tipogramUserId}) {
  let dispatch = useDispatch()
 

    useEffect(() => {
            if(userData&&userData.likeCount>100){
            dispatch(updateUserBadges(tipogramUserId, badgesData[0].id))
            }
            if(userData&&userData.tipsReceived>15){
            dispatch(updateUserBadges(tipogramUserId, badgesData[1].id))
            }
            if(userData&&userData.tipsReceived>75&&userData.likeCount>500){
              dispatch(updateUserBadges(tipogramUserId, badgesData[2].id))
              }
            let x=new Date(userData&&userData.createdAt)
            if(x.getMonth()===6&&x.getDate()===16&&x.getFullYear()===2023){
              dispatch(updateUserBadges(tipogramUserId, badgesData[3].id))
            }
       
        
    },[])// eslint-disable-line react-hooks/exhaustive-deps  

  return (
    <></>
  )
}

export default BadgesIssuer