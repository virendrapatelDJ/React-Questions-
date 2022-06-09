import React, { useEffect, useState } from 'react';
// How many times line number 7 will
// execute on first rende of MemoDemo Componnet

const Student = React.memo(({ name }) => {
  useEffect(() => {
    console.log('I am rendring again 🥲');
  });
  return <li>{name}</li>;
});

const MemoExample = () => {
  const students = ['Virendra', 'Virendra', 'Virendra'];

  return (
    <div>
      <h1>Memo Effect</h1>
      <p className="border rounded p-1">
        How many times Student Component useEffect will be called.?
      </p>
      <hr />
      {students.map((student) => (
        <Student name={student} />
      ))}
    </div>
  );
};

export { MemoExample };
