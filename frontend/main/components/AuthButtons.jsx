import React, { Fragment } from 'react';
import { Button, Menu } from 'semantic-ui-react';

const AuthButtons = () => {
  return (
    <Fragment>
      <Menu.Item>
        <Button primary>Sign up</Button>
      </Menu.Item>
      <Menu.Item>
        <Button>Sign in</Button>
      </Menu.Item>
    </Fragment>
  );
};

export { AuthButtons };
