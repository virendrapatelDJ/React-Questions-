import React, { useReducer, useState } from 'react';

const ADD_STUDENT = 'ADD';
const DELETE_ALL = 'DELETE_ALL';

const reducer = (state, action) => {
  // action.payload , action.type
  if (action.type === ADD_STUDENT) {
    //   code here
  }
  return state;
};

const ReducerExample = () => {
  const initialState = ['Virendra', 'Harsh', 'Dheeraj'];
  const [data, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');

  const onClick = () => {
    dispatch({ type: ADD_STUDENT, payload: name });
    setName('');
  };
  const onRemove = () => {};

  const onChange = ({ target: { name, value } }) => {
    setName(value);
  };

  return (
    <div>
      <div className="border rounded p-4">
        <h1>Enter Name</h1>
        <div>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={onChange}
          />
          <div className="mt-3">
            <button className="btn btn-success mx-2" onClick={onClick}>
              Save Student
            </button>
            <button className="btn btn-danger mx-2" onClick={onRemove}>
              Remove All
            </button>
          </div>
        </div>
      </div>

      <hr />
      <div className="mt-3">
        <table className="table table-bordered">
          <tbody>
            {data.map((name, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { ReducerExample };
