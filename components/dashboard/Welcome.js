import React from 'react';

const Welcome = ({ greeting, userName }) => {
  return (
    <h1>
      {greeting} {userName}
    </h1>
  );
};

export default Welcome;
