import {USER_SIGIN_SUCCESS,USER_SIGNUP_SUCCESS,LOAD_TIPOGRAM_CONTRACT,FETCH_OWNER_ACCOUNT,GET_USER_PROFILE,UPLOAD_IMAGE,FETCH_TIPOGRAM_IMAGES} from '../constants/constants'
const initState={
    signUpId:"",
    signInId:"",
    tipogramContract:null,
    ownerAccount:null,
    userData:null,
    uploadedImageData:null,
    tipogramImages:null
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
          case UPLOAD_IMAGE:{
              return Object.assign({},state,{
                  uploadedImageData:action.payload,
              })
          }
          case FETCH_TIPOGRAM_IMAGES:{
            return Object.assign({},state,{
                tipogramImages:action.payload,
            })
        }
        default:
            return state
    }
}