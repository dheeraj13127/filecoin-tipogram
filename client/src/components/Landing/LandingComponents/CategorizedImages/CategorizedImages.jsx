import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import '../../../../styles/LandingStyles/CategorizedImages.scss'
import { categorizedImagesData } from './CategorizeImagesData'
function CategorizedImages() {
  return (
    <div className='categorizedImagesContainer'>
        <Grid container>
        <Grid item xs={12}>
                <Typography variant='h3' className='catergorizedImagesHeader'>Categorized Images</Typography>
            </Grid>
     
      {
        categorizedImagesData.map((imgs,index)=>(
          <Grid key={index} item xs={12} sm={12} md={4} lg={4} className="categorizedImagesBox">
            <Button className='categorizedImagesTypeBtn'>{imgs.type}</Button>
            <img loading='eager' src={imgs.url} alt="categorized-images" className='categorizedImagesImg'/>
          </Grid>
        ))
      }
     
        </Grid>
    </div>
  )
}

export default CategorizedImages