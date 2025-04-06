import { Link } from 'react-router-dom';
import { deleteEmployee, getEmployees } from '../utils/localStorageUtils';
import { useEffect, useState } from 'react';
import EmployeeTableRow from './EmployeeTableRow';

export default function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(id);
      setEmployees(getEmployees());
    }
  };

  return (
    <>
      <Link to='/employee/add'>
        <button>Add Employee</button>
      </Link>
      <table>
        <thead>
          <EmployeeTableRow header={true} />
        </thead>
        <tbody>
          {employees.map((emp) => (
            <EmployeeTableRow key={emp.id} data={emp} />
            // <tr key={emp.id}>
            //   <td>{emp.firstName}</td>
            //   <td>{emp.lastName}</td>
            //   <td>{emp.email}</td>
            //   <td>{emp.phone}</td>
            //   <td>{emp.gender}</td>
            //   <td>{emp.dob}</td>
            //   <td>{emp.joinedDate}</td>
            //   <td>
            //     <Link to={`/employee/edit/${emp.id}`}>Edit</Link> |
            //     <button onClick={() => handleDelete(emp.id)}>Delete</button>
            //   </td>
            // </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
