import { Link } from 'react-router-dom';
import { deleteEmployee, getEmployees } from '../utils/localStorageUtils';
import { useEffect, useState } from 'react';
import { TableRowProps } from '../config/const';

export default function EmployeeTableRow({ header = false, data }) {
  return (
    <>
      <tr>
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
            <Link to={`/employee/edit/${data.id}`}>Edit</Link>|
            <a onClick={() => handleDelete(data.id)}>Delete</a>
          </td>
        )}
      </tr>
    </>
  );
}
