import React from 'react';
import styled from 'styled-components';
import { Images } from './Images';

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12.5em, 1fr));
  grid-gap: 0.031em 0.625em;
  grid-auto-rows: 10px;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
`;

const ImageGrid = ({ images }) => {
  const show = images && images.data.length > 0;

  if (show) {
    return (
      <Grid>
        <Images images={images} />
      </Grid>
    );
  }
  return null;
};

export { ImageGrid };
