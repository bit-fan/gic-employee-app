import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer, Title } from '../components/Fragments';
import EmployeeTable from '../components/employee/EmployeeTable';
import { useSelector } from 'react-redux';
import { FormButton } from '../components/FormFragment';
import EmployeeErrorModal from '../components/modal/EmployeeErrorModal';

const EmployeeListPage = () => {
  const employees = useSelector((state) => state.employees.list);

  return (
    <PageContainer>
      <Title>Employee List</Title>
      <EmployeeTable employees={employees} />
      <Link to='/employee/add'>
        <FormButton>Add Employee</FormButton>
      </Link>
      <EmployeeErrorModal />
    </PageContainer>
  );
};

export default EmployeeListPage;
