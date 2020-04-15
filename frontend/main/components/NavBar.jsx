import React from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

const NavBar = ({ children }) => {
  return (
    <StyledMenu size="mini">
      <Menu.Item name="Picsum" />
      <Menu.Menu position="right">{children}</Menu.Menu>
    </StyledMenu>
  );
};

export { NavBar };
