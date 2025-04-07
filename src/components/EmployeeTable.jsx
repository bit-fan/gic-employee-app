import EmployeeTableRow from './EmployeeTableRow';

export default function EmployeeTable({ employees = [] }) {
  return (
    <>
      <table>
        <thead>
          <EmployeeTableRow header={true} />
        </thead>
        <tbody>
          {employees?.map((emp, idx) => (
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
