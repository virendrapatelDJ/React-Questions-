import { useEffect, useState } from 'react';
import faker from '@faker-js/faker';

const useEmployees = () => {
  const [data, setData] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    setData({
      ...data,
      loading: true,
      data: [],
    });
    console.log('calling api..');
    fetch('./employees.json')
      .then((response) => response.json())
      .then((data) => {
        return data.objects;
      })
      .then((data = []) => {
        setData({
          error: null,
          data: data.map((emp) => ({
            ...emp,
            isApproved: faker.datatype.boolean(),
          })),
          loading: false,
        });
      })
      .catch((error) => {
        setData({
          data: null,
          loading: false,
          error: error.message,
        });
      });
  }, []);

  console.log(faker);

  return data;
};

export { useEmployees };
