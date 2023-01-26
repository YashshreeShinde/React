import React from 'react'
import Carousel from '../../../../Common Components/Carousel/Carousel';
import {images} from "../../../../Helphers/CarouselData"
const PostsLayout = () => {
  return (
    <Carousel data={images}/>
  )
}

export default PostsLayout