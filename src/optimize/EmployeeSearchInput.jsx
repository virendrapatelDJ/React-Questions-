import React, { useState } from 'react';

function EmployeeSearchInput({ onChange }) {
  const [id, setId] = useState();

  const handleOnChange = ({ target: { value } }) => {
    setId(value);
    onChange(value);
  };
  return (
    <div>
      <h3>Search By Id</h3>
      <hr />
      <div class="mb-3">
        <label for="" class="form-label">
          Employee Id
        </label>
        <input
          type="number"
          class="form-control"
          onChange={handleOnChange}
          value={id}
        />
      </div>
    </div>
  );
}

export { EmployeeSearchInput };
