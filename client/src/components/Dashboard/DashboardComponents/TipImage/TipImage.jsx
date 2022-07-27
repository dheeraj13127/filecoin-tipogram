import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import '../../../../styles/DashboardStyles/TipImage.scss'
import toast from 'react-hot-toast'
import {useDispatch} from 'react-redux'
import { tipImages } from '../../../../redux/action/blockchain'
function TipImage({tipogramContract,metamaskAccount}) {
    const {id,authorId} = useParams()
   
    const [tipAmt,setTipAmt]=useState("")
    const dispatch=useDispatch()
      const handleImageTip=()=>{
   
    if(tipAmt===""||tipAmt==="0"||tipAmt==null){
      toast("Please enter a valid tip amount",{
        icon:"❗️"
      })
    }
    
 
    else{
      dispatch(tipImages(id,tipogramContract,metamaskAccount,tipAmt,authorId))
    }
     
  } 

  return (
    <>
    <div className="tipImageContainer">
        <Grid container>
        <Grid item xs={12} sm={2} md={2} lg={4}></Grid>
        <Grid item xs={12} sm={8} md={8} lg={4} className="tipImageBox">
           
            <Stack className="tipImageFormBox" spacing={2}>
                  <Typography
                    variant="h6"
                    className="tipImageTitle"
                    align="center"
                  >
                  Your tip boosts up the artist confidence to build more digital arts.
                  </Typography>
                  <TextField value={tipAmt} onChange={(e)=>setTipAmt(e.target.value)} type="number" variant='outlined' label="Enter tip amount in ETH"/>
                  <Button className='tipImageTipBtn' onClick={handleImageTip}>Tip</Button>
                  </Stack>
           
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={4}></Grid>
        </Grid>
    </div>
    </>
  
  )
}

export default TipImage