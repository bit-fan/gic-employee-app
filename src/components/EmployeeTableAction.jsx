import { Link } from 'react-router-dom';
import { deleteEmployee } from '../utils/localStorageUtils';

export default function EmployeeTableAction({ data }) {
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(id);
      // todo refreesh the employee list
      // setEmployees(getEmployees());
    }
  };

  return (
    <>
      <Link to={`/employee/edit/${data.id}`}>Edit</Link>|
      <a onClick={() => handleDelete(data.id)}>Delete</a>
    </>
  );
}
