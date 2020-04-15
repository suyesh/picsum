import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Loading = ({ showLoading }) => {
  return (
    <Dimmer active={showLoading} inverted>
      <Loader />
    </Dimmer>
  );
};

export { Loading };
