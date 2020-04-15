import React from 'react';
import { DisplayImage } from './DisplayImage';

const Images = ({ images }) => images.data.map((image) => <DisplayImage image={image} key={image.id} />);

export { Images };
