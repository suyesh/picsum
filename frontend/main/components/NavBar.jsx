import React from 'react';
import { Menu } from 'semantic-ui-react';
import withSizes from 'react-sizes';
import styled from 'styled-components';

const StyledMenu = styled(Menu)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

const NavBarBase = ({ children, showBrand }) => {
  return (
    <StyledMenu size="mini">
      {showBrand && <Menu.Item name="Picsum" />}
      <Menu.Menu position="right">{children}</Menu.Menu>
    </StyledMenu>
  );
};

const mapSizesToProps = ({ width }) => ({
  showBrand: width > 600,
});

const NavBar = withSizes(mapSizesToProps)(NavBarBase);

export { NavBar };
