import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const FilterDropdown = ({ values, text, onClick, id }) => {
  if (values && values.length > 0) {
    return (
      <Dropdown item text={text}>
        <Dropdown.Menu>
          {values.map((value) => (
            <Dropdown.Item onClick={onClick} data-param={id} data-value={value} key={value}>
              {value}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  return null;
};

export { FilterDropdown };
