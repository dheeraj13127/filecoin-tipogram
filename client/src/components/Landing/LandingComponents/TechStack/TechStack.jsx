import { Grid } from '@mui/material'
import React from 'react'
import {techStackImages} from './TeckStackData'
function TechStack() {
  return (
    <div className='techStackContainer'> 
    <Grid container>
        {
            techStackImages.map((img,index)=>(
               
                <Grid key={index} item xs={6} sm={3} md={3} lg={3} className="techStackImgBox">
                    <img src={img.url} alt="tech-stack" className='techStackImg'/>
                </Grid>
                
            ))
        }
        
    </Grid>
    </div>
  )
}

export default TechStack