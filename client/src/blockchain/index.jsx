import React, { useEffect } from "react";
import Web3 from "web3";
import { useDispatch } from "react-redux";
import {loadTipogramContract, loadOwnerAccount} from '../redux/action/blockchain'
import { TIPOGRAM_CONTRACT } from './contractProvider/ContractProvider';
function BlockchainProvider() {
  
    const dispatch = useDispatch();
 

     useEffect(()=>{
        const web3 = new Web3(Web3.givenProvider);
        try {
            account(web3);
            const TipogramContract = new web3.eth.Contract(
             TIPOGRAM_CONTRACT.abi,TIPOGRAM_CONTRACT.address
            );
            dispatch(loadTipogramContract(TipogramContract))
           
          
          } catch (err) {
            console.log(err);
          }
      
     },[]) // eslint-disable-line react-hooks/exhaustive-deps  
     async function account(web3) {
        const accounts = await web3.eth.getAccounts();
        dispatch(loadOwnerAccount(accounts[0]));
    
      }
    
    return (
        <div>
           
        </div>
    )
}

export default BlockchainProvider;