import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

const ClearButton = ({ showClear, onClear }) => {
  if (showClear) {
    return (
      <Menu.Item>
        <Button icon="redo" circular onClick={onClear} />
      </Menu.Item>
    );
  }
  return null;
};

export { ClearButton };
