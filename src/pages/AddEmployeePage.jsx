import React from 'react';
import { useDispatch } from 'react-redux';
import EmployeeForm from '../components/employee/EmployeeForm';
import { PageContainer, Title } from '../components/Fragments';
import { v4 as uuidv4 } from 'uuid';
import { addEmployee } from '../features/employees/employeesSlice';
import ErrorBoundary from '../components/common/ErrorBoundary';
import EmployeeErrorModal from '../components/modal/EmployeeErrorModal';
import { useNavigate } from 'react-router-dom';

export default function AddEmployeePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdd = (data) => {
    console.log('data', data);
    dispatch(addEmployee({ ...data, id: uuidv4() }));
    navigate('/');
  };

  return (
    <PageContainer>
      <Title>Add Employee</Title>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <EmployeeForm onSubmit={handleAdd} />
      </ErrorBoundary>
      <EmployeeErrorModal />
    </PageContainer>
  );
}
