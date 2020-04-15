import React, { Fragment } from 'react';
import { Toggles, ImageGrid, NavBar, FilterDropdown, ClearButton, PageSwitcher, MainContainer } from '../components';
import { useApiData } from '../hooks';

const App = () => {
  const {
    handleBlur,
    handleGrayscale,
    handlePageChange,
    handleParams,
    totalPages,
    heights,
    widths,
    images,
    handleClear,
    params,
    showPageSwitcher,
    showClearButton,
    heightFilterText,
    widthFilterText,
  } = useApiData();

  return (
    <Fragment>
      <NavBar>
        <ClearButton showClear={showClearButton} onClear={handleClear} />
        <FilterDropdown values={heights} id="height" text={heightFilterText} onClick={handleParams} />
        <FilterDropdown values={widths} id="width" text={widthFilterText} onClick={handleParams} />
        <Toggles
          grayscale={params.grayscale}
          blur={params.blur}
          handleBlur={handleBlur}
          handleGrayscale={handleGrayscale}
        />
      </NavBar>
      <MainContainer>
        <ImageGrid images={images} />
        <PageSwitcher
          show={showPageSwitcher}
          totalPages={totalPages}
          activePage={params.page}
          handlePageChange={handlePageChange}
        />
      </MainContainer>
    </Fragment>
  );
};

export default App;
