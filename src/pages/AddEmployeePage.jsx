import { useDispatch } from 'react-redux';
import EmployeeForm from '../components/EmployeeForm';
import { PageContainer, Title } from '../components/Fragments';
import { v4 as uuidv4 } from 'uuid';
import { addEmployee } from '../features/employees/employeesSlice';

export default function AddEmployeePage() {
  const dispatch = useDispatch();
  const handleAdd = (data) => {
    console.log('data', data);

    dispatch(addEmployee({ ...data, id: uuidv4() }));
  };

  return (
    <PageContainer>
      <Title>Add Employee</Title>
      <EmployeeForm onSubmit={handleAdd} />
    </PageContainer>
  );
}
