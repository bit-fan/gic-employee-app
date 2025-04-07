import EmployeeTableRow from './EmployeeTableRow';
import { useSelector } from 'react-redux';

export default function EmployeeTable({ employees }) {
  return (
    <>
      <table>
        <thead>
          <EmployeeTableRow header={true} />
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <EmployeeTableRow key={emp.id} data={emp} index={idx} />
          ))}
        </tbody>
        <tfoot>
          <EmployeeTableRow header={true} />
        </tfoot>
      </table>
    </>
  );
}
