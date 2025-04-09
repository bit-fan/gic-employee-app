import { createPortal } from 'react-dom';

export default function LeaveWarningModal({ show, onConfirm, onCancel }) {
  if (!show) return null;

  return createPortal(
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md'>
        <h2 className='text-xl font-bold mb-4'>
          Are you sure you want to leave?
        </h2>
        <p className='mb-6'>You have unsaved changes.</p>
        <div className='flex justify-end gap-3'>
          <button onClick={onCancel} className='px-4 py-2 bg-gray-300 rounded'>
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='px-4 py-2 bg-red-500 text-white rounded'
          >
            Leave
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
