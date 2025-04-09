import React from 'react';
import { TableRowProps } from '../../config/const';
import EmployeeTableAction from './EmployeeTableAction';

export default function EmployeeTableRow({ header = false, data, index }) {
  return (
    <>
      <tr>
        {header ? <th>#</th> : <td>{index + 1}</td>}
        {TableRowProps.map((prop) => {
          return header ? (
            <th key={prop.field}>{prop.title}</th>
          ) : (
            <td key={prop.field}>{data[prop.field]}</td>
          );
        })}

        {header ? (
          <th>Action</th>
        ) : (
          <td>
            <EmployeeTableAction data={data} />
          </td>
        )}
      </tr>
    </>
  );
}
