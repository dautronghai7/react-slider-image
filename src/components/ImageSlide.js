import React, {useState} from 'react'


import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
function ImageSlide({slides}) {
    const [current, setCurrent] = useState(0)
    const length = slides.length;
    const nextSlide = ()=>{
        setCurrent(current === slides.length -1 ? 0 : current + 1)        
    }
    const prevSlide = ()=>{
        setCurrent(current === 0 ? length - 1 : current - 1)        
    }
    console.log(current);
    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }
    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='arrow-left' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='arrow-right' onClick={nextSlide}/>
          {slides.map((slide, index)=>{
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index} >
                    {index === current && <img className='image' src={slide.image} alt='travel now' />}                    
                </div>
            )
          })}
          
        </section>
    )
}

export default ImageSlide
