import React, { useEffect, useState, useRef } from 'react';

const ChildNumber = () => {
  const count = useRef(0);
  useEffect(() => {
    count.current++;
    console.log('Child Re Rendering.');
  });
  return (
    <div className="border border-success m-4 p-4">
      <h1>I Am Child Component 👶</h1>
      <h4>
        I Rerendered {count.current} Times {!count.current ? '🥳' : '😞'}
      </h4>
    </div>
  );
};

function ReduceRenders() {
  const [parentNumber, setParentNumber] = useState(0);
  useEffect(() => {
    console.log('Parent Re Rendering.');
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setParentNumber(Math.round(Math.random() * 1000));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="border border-info p-2 m-1">
      <h1>Number in Parent : {parentNumber}</h1>
      <ChildNumber />
    </div>
  );
}

export { ReduceRenders };
