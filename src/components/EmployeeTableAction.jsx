import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../features/employees/employeesSlice';

export default function EmployeeTableAction({ data }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this employee?')) {
      dispatch(deleteEmployee(id));
    }
  };

  return (
    <>
      <Link to={`/employee/edit/${data.id}`}>Edit</Link>|
      <a onClick={() => handleDelete(data.id)}>Delete</a>
    </>
  );
}
