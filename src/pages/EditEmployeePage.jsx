import { useParams } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { PageContainer, Title } from '../components/Fragments';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../features/employees/employeesSlice';

export default function EditEmployeePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const employeeData = useSelector((state) =>
    state.employees.list.find((emp) => emp.id === id)
  );
  // if (!data) navigate('/');

  const handleUpdate = (data) => {
    dispatch(updateEmployee({ id, updatedData: data }));
  };

  if (id && !employeeData) {
    return <div>Loading...</div>;
  }
  return (
    <PageContainer>
      <Title>Edit Employee</Title>
      {employeeData && (
        <EmployeeForm defaultValues={employeeData} onSubmit={handleUpdate} />
      )}
    </PageContainer>
  );
}
