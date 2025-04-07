import { Link, useNavigate } from 'react-router-dom';
import { PageContainer, Title } from '../components/Fragments';
import EmployeeTable from '../components/EmployeeTable';

const EmployeeListPage = () => {
  const navigate = useNavigate();
  const dummyEmployees = []; // Replace with fetch data from API

  return (
    <PageContainer>
      <Title>Employee List</Title>
      <Link to='/employee/add'>
        <button>Add Employee</button>
      </Link>
      <EmployeeTable />
    </PageContainer>
  );
};

export default EmployeeListPage;
