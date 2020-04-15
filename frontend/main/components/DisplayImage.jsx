import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const DynamicSpan = styled.div`
  grid-row-end: span ${(props) => props.span};
`;

const Image = styled.img`
  width: 12.5em;
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
    <DynamicSpan span={heightSpan}>
      <Image src={image.url} alt={image.url} ref={imageRef} width={image.width} />
    </DynamicSpan>
  );
};

export { DisplayImage };
