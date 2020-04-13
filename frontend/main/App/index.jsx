import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Toggle from 'react-toggle';
import axios from 'axios';
import { Pagination } from 'semantic-ui-react';

const Container = styled.main`
  padding: 90px 10px 0 10px;
  height: 100%;
  width: 100%;
`;

const NavBar = styled.div`
  height: 75px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 45px;
  padding-left: 45px;
`;

const ImageGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 0.5px 10px;
  grid-auto-rows: 10px;
`;

const Image = styled.img`
  width: 200px;
`;

const Brand = styled.div`
  font-size: 24px;
  font-weight: var(--600);
  color: #1f2041;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const ToggleText = styled.span`
  margin-left: 10px;
`;

const TogglesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  width: 200px;

  @media (min-width: 600px) {
    width: 300px;
  }
`;

const DesktopToggles = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: block;
  }
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const DisplayImage = ({ image }) => {
  const [heightSpan, setHeightSpan] = useState(0);
  const imageRef = useRef(null);

  const setSpansValue = () => {
    setHeightSpan(Math.ceil(imageRef.current.clientHeight / 10));
  };

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpansValue);
  }, []);

  return (
    <div
      style={{
        gridRowEnd: `span ${heightSpan}`,
      }}
    >
      <Image src={image.url} alt={image.url} ref={imageRef} width={image.width} />
    </div>
  );
};

const Toggles = ({ blur, grayscale, handleBlur, handleGrayscale }) => {
  return (
    <TogglesContainer>
      <Label>
        <Toggle defaultChecked={grayscale} onChange={handleGrayscale} />
        <ToggleText>Grayscale</ToggleText>
      </Label>
      <Label>
        <Toggle defaultChecked={blur} onChange={handleBlur} />
        <ToggleText>Blur</ToggleText>
      </Label>
    </TogglesContainer>
  );
};

const App = () => {
  const [images, setImages] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const [params, setParams] = useState({
    page: 1,
    height: null,
    width: null,
    grayscale: null,
    blur: null,
  });

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

  useEffect(() => {
    axios.get('/api/pics', { params }).then((response) => {
      setImages(response.data);
      setTotalPages(response.data.total_pages);
    });
  }, [params]);

  return (
    <Container>
      <NavBar>
        <Brand>Picsum</Brand>
        <DesktopToggles>
          <Toggles
            grayscale={!!params.grayscale}
            blur={!!params.blur}
            handleBlur={handleBlur}
            handleGrayscale={handleGrayscale}
          />
        </DesktopToggles>
      </NavBar>
      <ImageGrid>{images && images.data.map((image) => <DisplayImage image={image} key={image.id} />)}</ImageGrid>
      {images && images.total_pages && (
        <PaginationContainer>
          <Pagination boundaryRange={0} defaultActivePage={1} totalPages={totalPages} onPageChange={handlePageChange} />
        </PaginationContainer>
      )}
    </Container>
  );
};

export default App;
