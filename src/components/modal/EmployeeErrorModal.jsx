import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShowError } from '../../features/employees/employeesSlice';

export default function EmployeeErrorModal() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.employees.error);
  const showError = useSelector((state) => state.employees.showError);
  const onOK = () => {
    dispatch(setShowError(false));
  };
  console.log('error', error, showError);

  return (
    showError &&
    createPortal(
      <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
        <div className='bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md'>
          <h2 className='text-lg font-bold mb-4'>
            {error || 'There are some errors in employee data'}
          </h2>
          <div className='flex justify-center gap-3'>
            <button
              onClick={onOK}
              className='px-4 py-2 bg-red-500 text-red-500 rounded'
            >
              OK
            </button>
          </div>
        </div>
      </div>,
      document.body
    )
  );
}
