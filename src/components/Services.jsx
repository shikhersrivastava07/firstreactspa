import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Services = () => {
  return (
    <div >
    
    <Carousel infiniteLoop={true} autoPlay={true}
    
    showStatus={false}  interval={2000} showIndicators={false}>

<div>
    <img src={require("../assets/3.jpg")} alt="Item1" />
    <p className='legend'>Web Development Using React</p>
</div>
<div>
    <img src={require("../assets/4.jpg")} alt="Item2" />
    <p className='legend'>React Responsive Carousel </p>
</div>

    </Carousel>
    
    
    </div>
  )
}

export default Services