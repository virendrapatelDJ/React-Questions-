import React, { Fragment, useState } from 'react';
import { Loader } from '../utils/Loader';
import { EmployeeDetails } from './EmployeeDetails';
import { EmployeeSearchInput } from './EmployeeSearchInput';
import { useEmployees } from './UseEmployee';

function SearchingEmployee() {
  const { data: employees = [], error, loading } = useEmployees();
  const [selectedEmployee, setSelectedEmployee] = useState({});

  console.log({ employees });

  const handleDelete = (id) => {
    console.log({ id });
  };
  const handleClick = (id) => {
    setSelectedEmployee(getEmployeeById(id));
  };

  const getEmployeeById = (id) => {
    const now = performance.now();
    const employee = employees.find((emp) => {
      // console.log("calling predicate...")
      return emp.id === id;
    });
    const later = performance.now();
    console.log('Time taken to search Employee  : ', later - now, ' MS');
    return employee;
  };

  const onInputChange = (id) => {
    const employee = getEmployeeById(id);
    setSelectedEmployee(employee);
  };

  const renderActions = (employee) => {
    return (
      <Fragment>
        <button
          type="button"
          class="btn btn-success m-1"
          disabled={employee.deleted}
          onClick={() => handleClick(employee?.id)}
        >
          Show More
        </button>
        <button
          type="button"
          class="btn btn-danger m-1"
          disabled={!employee.deleted}
          onClick={() => handleDelete(employee?.id)}
        >
          Delete
        </button>
      </Fragment>
    );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <table className="table table-bordered">
            <TableHeader />
            <tbody>
              {employees
                ?.filter((emp) => emp.isApproved)
                .map((employee, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{employee?.id}</td>
                    <td>{employee?.name}</td>
                    <td>{employee?.email}</td>
                    <td>
                      {employee?.deleted ? (
                        <span className="badge bg-danger">Deleted</span>
                      ) : (
                        'Available'
                      )}
                    </td>
                    <td>{renderActions(employee)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="col-3">
          <div>
            <EmployeeSearchInput onChange={onInputChange} />
            <hr />
            {/* Details */}
            <EmployeeDetails employee={selectedEmployee} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Sno.</th>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Deleted</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
}

export { SearchingEmployee };
