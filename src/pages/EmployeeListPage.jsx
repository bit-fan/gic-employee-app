import { Link } from 'react-router-dom';
import { PageContainer, Title } from '../components/Fragments';
import EmployeeTable from '../components/EmployeeTable';
import { useSelector } from 'react-redux';
import { FormButton } from '../components/FormFragment';

const EmployeeListPage = () => {
  const employees = useSelector((state) => state.employees.list);

  return (
    <PageContainer>
      <Title>Employee List</Title>
      <EmployeeTable employees={employees} />
      <Link to='/employee/add'>
        <FormButton>Add Employee</FormButton>
      </Link>
    </PageContainer>
  );
};

export default EmployeeListPage;
