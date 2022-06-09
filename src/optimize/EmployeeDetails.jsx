import React from 'react';

function EmployeeDetails({ employee }) {
  return (
    <div>
      <h4>Details Of Employee</h4>

      <table className="table">
        <tbody>
          {Object.keys(employee || {}).map(
            (key) =>
              key !== 'deleted' && (
                <tr>
                  <td>{key}</td>
                  <td>{employee[key]}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <hr />
    </div>
  );
}

export { EmployeeDetails };
