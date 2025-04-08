import { useParams } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { PageContainer, Title } from '../components/Fragments';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../features/employees/employeesSlice';
import ErrorBoundary from '../components/common/ErrorBoundary';
import EmployeeErrorModal from '../components/modal/EmployeeErrorModal';

export default function EditEmployeePage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const employeeData = useSelector((state) =>
    state.employees.list.find((emp) => emp.id == id)
  );
  const status = useSelector((state) => state.employees.status);

  // if (!data) navigate('/');

  const handleUpdate = (data) => {
    dispatch(updateEmployee({ id, updatedData: data }));
  };

  if (id && status === 'loading') {
    return <div>Loading...</div>;
  }
  return (
    <PageContainer>
      <Title>Edit Employee</Title>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        {employeeData && (
          <EmployeeForm defaultValues={employeeData} onSubmit={handleUpdate} />
        )}
      </ErrorBoundary>
      <EmployeeErrorModal />
    </PageContainer>
  );
}
