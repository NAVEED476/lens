import React, { useState, useEffect } from 'react';
import "./slider.css"
import { SLIDER_IMG1, SLIDER_IMG2, SLIDER_IMG3, SLIDER_IMG4 } from '../constants/constants';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='slider'>
        <h1>We Work With Amazing Clients</h1>
        <div className='slider-slide slider-slide-animation'>
            <div>
                <img className='slider-img' src={SLIDER_IMG1} alt="Client 1" />
            </div>
            <div>
                <img className='slider-img' src={SLIDER_IMG2} alt="Client 2" />
            </div>
            <div>
                <img className='slider-img' src={SLIDER_IMG3} alt="Client 3" />
            </div>
            <div>
                <img className='slider-img' src={SLIDER_IMG4} alt="Client 4" />
            </div>
        </div>
    </div>
  );
};

export default Slider;