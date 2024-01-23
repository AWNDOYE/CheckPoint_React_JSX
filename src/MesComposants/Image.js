import React from 'react';
import monProduit from '../product.js';
const Image = ({image, altText}) => {
    return  <img src={monProduit.image} alt={altText} />
};
export default Image;