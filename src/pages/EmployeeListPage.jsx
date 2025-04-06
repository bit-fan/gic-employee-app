import { useNavigate } from 'react-router-dom';

const EmployeeListPage = () => {
  const navigate = useNavigate();
  const dummyEmployees = []; // Replace with fetch data from API

  return (
    <div>
      <h1>Employee List</h1>
      <button onClick={() => navigate('/employee/add')}>Add Employee</button>
      {/* Table here */}
    </div>
  );
};

export default EmployeeListPage;
