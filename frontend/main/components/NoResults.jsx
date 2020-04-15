import React from 'react';
import { Image, Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import SpaceMan from '../images/spaceman.gif';

const NoResultsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NoResultsFound = () => (
  <NoResultsContainer>
    <Image src={SpaceMan} size="large" />
    <Header as="h1">No results found. Only emptiness...</Header>
    <Header as="h6" color="grey">
      Galactic Hint: Click on the refresh icon in the toolbar to restart search.
    </Header>
  </NoResultsContainer>
);

export { NoResultsFound };
