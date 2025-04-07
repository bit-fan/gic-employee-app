import { useParams, useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { getEmployeeById, updateEmployee } from '../utils/localStorageUtils';
import { useEffect, useState } from 'react';
import { Page, PageContainer, Title } from '../components/Fragments';

export default function EditEmployeePage() {
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
    <PageContainer>
      <Title>Edit Employee</Title>
      {employee && (
        <EmployeeForm defaultValues={employee} onSubmit={handleUpdate} />
      )}
    </PageContainer>
  );
}
