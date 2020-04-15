import React from 'react';
import styled from 'styled-components';
import { Pagination } from 'semantic-ui-react';

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.875em;
  margin-bottom: 1.875em;
`;

const PageSwitcher = ({ show, activePage, totalPages, handlePageChange }) => {
  if (show && totalPages) {
    return (
      <PaginationContainer>
        <Pagination
          activePage={activePage}
          boundaryRange={0}
          defaultActivePage={1}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </PaginationContainer>
    );
  }
  return null;
};

export { PageSwitcher };
