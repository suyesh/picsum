import React from 'react';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';
import Toggle from 'react-toggle';

const ToggleText = styled.span`
  margin-left: 0.625em;
`;

const TogglesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-right: 0.625em;
`;

const Toggles = ({ blur, grayscale, handleBlur, handleGrayscale }) => {
  return (
    <Menu.Item>
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
    </Menu.Item>
  );
};

export { Toggles };
