import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEmployee } from '../features/employees/employeesSlice';
import ConfirmModal from './modal/ConfirmModal';

export default function EmployeeTableAction({ data }) {
  const dispatch = useDispatch();
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);

  const onConfirmDelete = () => {
    dispatch(deleteEmployee(data.id));
  };
  return (
    <>
      <Link to={`/employee/edit/${data.id}`}>Edit</Link>|
      <a onClick={() => setShowConfirmModal(true)}>Delete</a>
      <ConfirmModal
        show={showConfirmModal}
        onConfirm={onConfirmDelete}
        onCancel={() => {
          setShowConfirmModal(false);
        }}
      >
        <h3 className='text-xl mb-4'>
          Are you sure you want to delete <br />
          <b>
            {data.firstName} {data.lastName}
          </b>
          ?
        </h3>
      </ConfirmModal>
    </>
  );
}
