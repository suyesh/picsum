import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import _ from 'lodash';
import { Pagination, Container, Button, Dropdown, Menu, Icon } from 'semantic-ui-react';
import { Toggles, DisplayImage } from '../components';

const Main = styled(Container)`
  padding-top: 4.688em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const ImageGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12.5em, 1fr));
  grid-gap: 0.031em 0.625em;
  grid-auto-rows: 10px;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.875em;
  margin-bottom: 1.875em;
`;

const StyledMenu = styled(Menu)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

const INITIAL_PARAM = {
  page: 1,
  height: null,
  width: null,
  grayscale: null,
  blur: null,
};

const App = () => {
  const [images, setImages] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [heights, setHeights] = useState(null);
  const [widths, setWidths] = useState(null);

  const [params, setParams] = useState(INITIAL_PARAM);

  const handleGrayscale = () => {
    if (params.grayscale == null) {
      setParams({ ...params, grayscale: 2 });
    } else {
      setParams({ ...params, grayscale: null });
    }
  };

  const handleBlur = () => {
    if (params.blur == null) {
      setParams({ ...params, blur: 2 });
    } else {
      setParams({ ...params, blur: null });
    }
  };

  const handlePageChange = (e, data) => {
    setParams({ ...params, page: data.activePage });
  };

  const buildSizes = (imageData) => {
    const allHeights = _.uniq(
      imageData.reduce((accum, image) => {
        return [...accum, image.height];
      }, []),
    );
    const allWidths = _.uniq(
      imageData.reduce((accum, image) => {
        return [...accum, image.width];
      }, []),
    );
    setHeights(allHeights);
    setWidths(allWidths);
  };

  useEffect(() => {
    axios.get('/api/pics', { params }).then((response) => {
      setImages(response.data);
      setTotalPages(response.data.total_pages);
      if (!heights && !widths) {
        buildSizes(response.data.data);
      }
    });
  }, [params]);

  const handleParams = ({ target: { dataset } }) => {
    const paramName = dataset.param;
    const paramValue = parseInt(dataset.value);
    setParams({ ...params, [paramName]: paramValue });
  };

  return (
    <>
      <StyledMenu size="mini">
        <Menu.Item name="Picsum" />

        <Menu.Menu position="right">
          {!_.isEqual(params, INITIAL_PARAM) && (
            <Menu.Item>
              <Button icon="redo" circular onClick={() => setParams({ ...INITIAL_PARAM })} />
            </Menu.Item>
          )}

          {heights && heights.length > 0 && (
            <Dropdown item text={params.height ? `Height ${params.height}px` : 'Height'}>
              <Dropdown.Menu>
                {heights.map((height) => (
                  <Dropdown.Item onClick={handleParams} data-param="height" data-value={height} key={height}>
                    {height}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}

          {widths && widths.length > 0 && (
            <Dropdown item text={params.width ? `Width ${params.width}px` : 'Width'}>
              <Dropdown.Menu>
                {widths.map((width) => (
                  <Dropdown.Item onClick={handleParams} data-param="width" data-value={width} key={width}>
                    {width}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
          <Menu.Item>
            <Toggles
              grayscale={!!params.grayscale}
              blur={!!params.blur}
              handleBlur={handleBlur}
              handleGrayscale={handleGrayscale}
            />
          </Menu.Item>
          <Menu.Item>
            <Button primary>Sign up</Button>
          </Menu.Item>
          <Menu.Item>
            <Button>Sign in</Button>
          </Menu.Item>
        </Menu.Menu>
      </StyledMenu>
      <Main>
        <ImageGrid>
          {images &&
            images.data.length > 0 &&
            images.data.map((image) => <DisplayImage image={image} key={image.id} />)}
        </ImageGrid>
        {images && images.total_pages && (
          <PaginationContainer>
            <Pagination
              activePage={params.page}
              boundaryRange={0}
              defaultActivePage={1}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </PaginationContainer>
        )}
      </Main>
    </>
  );
};

export default App;
