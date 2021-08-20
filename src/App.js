import React from 'react';
import ImageSlide from './components/ImageSlide';
import {sliderData} from './components/SliderData'
import './App.css'
function App() {
  return <ImageSlide slides={sliderData} />;
}

export default App;
