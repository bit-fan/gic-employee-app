import EmployeeForm from '../components/EmployeeForm';
import { PageContainer, Title } from '../components/Fragments';
import { addEmployee } from '../utils/localStorageUtils';
import { v4 as uuidv4 } from 'uuid';

export default function AddEmployeePage() {
  const handleAdd = (data) => {
    console.log('data', data);

    addEmployee({ ...data, id: uuidv4() });
  };

  return (
    <PageContainer>
      <Title>Add Employee</Title>
      <EmployeeForm onSubmit={handleAdd} />
    </PageContainer>
  );
}
