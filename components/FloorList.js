import React from 'react';

const FloorList = ({ optionValues }) => {
  return (
    <select name='floor-list'>
      {optionValues.map((floors) => (
        <option key={floors} value={floors}>
          {floors}
        </option>
      ))}
    </select>
  );
};

export default FloorList;
