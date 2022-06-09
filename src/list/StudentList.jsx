import React, { useEffect, useState } from 'react';
import { Student } from './Student';

function StudentList() {
  const URL = 'https://reqres.in/api/users?page=1&per_page=20';
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log(students);
  }, [students]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setStudents(data.data));
  }, []);

  return (
    <div>
      <Student />
    </div>
  );
}
export { StudentList };
