import React, { useEffect, useState } from 'react';

function UseEffectSequence() {
  const URL = 'https://reqres.in/api/users?page=1&per_page=2';
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log('Javascript');

    fetch(URL)
      .then((response) => response.json())
      .then((response) => response.data)
      .then(setStudents);
  }, []);

  useEffect(() => {
    console.log('Typescript');
  }, []);

  useEffect(() => {
    console.log('React');
  }, [students]);

  return (
    <div>
      <h1>Hooks</h1>
      <p>Sequence of hook calls?</p>
    </div>
  );
}

export { UseEffectSequence };
