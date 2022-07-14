import {USER_SIGIN_SUCCESS,USER_SIGNUP_SUCCESS,LOAD_TIPOGRAM_CONTRACT,FETCH_OWNER_ACCOUNT,GET_USER_PROFILE} from '../constants/constants'
const initState={
    signUpId:"",
    signInId:"",
    tipogramContract:null,
    ownerAccount:null,
    userData:null
}

export const rootReducer=(state=initState,action)=>{
    switch(action.type){
  
        case USER_SIGNUP_SUCCESS:{
            return Object.assign({},state,{
                signUpId:action.payload,
          
              })
        }
        case USER_SIGIN_SUCCESS:{
            return Object.assign({},state,{
                signInId:action.payload,
          
              })
        }
        case LOAD_TIPOGRAM_CONTRACT: {
            return Object.assign({}, state, {
              tipogramContract: action.payload
            })
          }
          case FETCH_OWNER_ACCOUNT: {
              return Object.assign({}, state, {
                ownerAccount: action.payload
              })
            }
          case GET_USER_PROFILE:{
              return Object.assign({},state,{
                  userData:action.payload,
            
                })
          }
        default:
            return state
    }
}