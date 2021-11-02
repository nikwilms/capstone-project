import React from 'react';
import styled from 'styled-components';

const List = ({ optionValue }) => {
  return (
    <select name='floor-list' id='standard-select'>
      {optionValue.map((floors) => (
        <option key={floors} value={floors}>
          {floors}
        </option>
      ))}
    </select>
  );
};

export default List;
