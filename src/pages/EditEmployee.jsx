import { useParams, useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { getEmployeeById, updateEmployee } from '../utils/localStorageUtils';
import { useEffect, useState } from 'react';

export default function EditEmployee() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = getEmployeeById(id);
    if (!data) navigate('/');
    else setEmployee(data);
  }, [id]);

  const handleUpdate = (data) => {
    updateEmployee(id, data);
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      {employee && <EmployeeForm defaultValues={employee} onSubmit={handleUpdate} />}
    </div>
  );
}
