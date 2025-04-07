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
      <table>
        <thead>
          <EmployeeTableRow header={true} />
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <EmployeeTableRow key={emp.id} data={emp} index={idx} />
          ))}
        </tbody>
        <tfoot>
          <EmployeeTableRow header={true} />
        </tfoot>
      </table>
    </>
  );
}
