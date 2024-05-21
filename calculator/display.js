import React from 'react';

function Display({ expression, result }) {
  return (
    <div className="display">
      {result !== null ? result : expression}
    </div>
  );
}

export default Display;
