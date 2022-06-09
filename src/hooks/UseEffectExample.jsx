import React, { useEffect } from 'react';

// Difference btw first two use effect and what they are doing.

function UseEffectExample() {
  useEffect(() => console.clear(), []);

  useEffect(() => () => console.clear(), []);

  useEffect(() => {
    console.log('Use Effect 1');
  }, []);

  useEffect(() => {
    console.log('Use Effect 2');
  }, []);

  useEffect(() => {
    console.log('Use Effect 3');
  }, []);

  return (
    <div>
      <h1>Use Effect Demo</h1>
    </div>
  );
}

export { UseEffectExample };
