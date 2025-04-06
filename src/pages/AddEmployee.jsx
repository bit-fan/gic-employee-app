import EmployeeForm from '../components/EmployeeForm';
import { addEmployee } from '../utils/localStorageUtils';
import { v4 as uuidv4 } from 'uuid';

export default function AddEmployee() {
  const handleAdd = (data) => {
    console.log('data', data);

    addEmployee({ ...data, id: uuidv4() });
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <EmployeeForm onSubmit={handleAdd} />
    </div>
  );
}
