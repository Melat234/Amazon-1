import React from 'react'

import Product from '../../Components/Product/Product'
import LayOut from '../../Components/LayOut/LayOut'
import  Carousel  from '../../Components/Carousel/Carousel';
import Category from '../../Components/Category/Category'
function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing
