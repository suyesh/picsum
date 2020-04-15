import React, { Fragment } from 'react';
import {
  Toggles,
  ImageGrid,
  NavBar,
  FilterDropdown,
  AuthButtons,
  ClearButton,
  PageSwitcher,
  Loading,
  MainContainer,
} from '../components';
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
    dataLoading,
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
        <AuthButtons />
      </NavBar>
      <MainContainer>
        <ImageGrid images={images} />
        <PageSwitcher
          show={showPageSwitcher}
          totalPages={totalPages}
          activePage={params.page}
          handlePageChange={handlePageChange}
        />
        <Loading showLoading={dataLoading} />
      </MainContainer>
    </Fragment>
  );
};

export default App;
