import React from 'react';
import styled from 'styled-components';
import { Images } from './Images';
import { NoResultsFound } from './NoResults';

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
  const showImages = images && images.data.length > 0;
  const showNoResults = images && images.data.length < 1;

  if (showImages) {
    return (
      <Grid>
        <Images images={images} />
      </Grid>
    );
  }
  if (showNoResults) {
    return <NoResultsFound />;
  }
  return null;
};

export { ImageGrid };
