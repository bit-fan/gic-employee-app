import { useEffect, useState } from 'react';

export const useNavigationConfirmation = (flag, message) => {
  const [showModal, setShowModal] = useState(false);
  const [pendingNavigation, setPendingNavigation] = useState(null);
  console.log('isDirty', flag);

  const confirmNavigation = () => {
    setShowModal(false); // Hide the modal
    if (pendingNavigation) {
      navigate('/'); // Navigate to the intended page
    }
  };

  const cancelNavigation = () => {
    setShowModal(false); // Close the modal without navigating
  };

  useEffect(() => {
    if (flag) {
      const handleNavigateAway = (e) => {
        e.preventDefault();
        setPendingNavigation(true); // Set that the user is trying to navigate
        setShowModal(true); // Show the confirmation modal
      };

      window.addEventListener('beforeunload', handleNavigateAway);

      return () => {
        window.removeEventListener('beforeunload', handleNavigateAway);
      };
    }
  }, [flag, message]);

  // const modal = () => {
  //   return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  //     <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
  //       <h3 className="text-lg font-medium text-gray-900 mb-4">
  //         Unsaved Changes
  //       </h3>
  //       <p className="text-sm text-gray-600 mb-6">
  //         Form has been modified. You will lose your unsaved changes. Are you sure you want to close this form?
  //       </p>
  //       <div className="flex justify-end space-x-3">
  //         <button
  //           type="button"
  //           onClick={handleCancelNavigation}
  //           className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  //         >
  //           Cancel
  //         </button>
  //         <button
  //           type="button"
  //           onClick={handleConfirmNavigation}
  //           className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
  //         >
  //           Leave Page
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // }
  return showModal ? (
    <ConfirmModal onConfirm={confirmNavigation} onCancel={cancelNavigation} />
  ) : null;
};

const ConfirmModal = ({ onConfirm, onCancel }) => {
  return ReactDOM.createPortal(
    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center'>
      <div className='bg-white p-6 rounded-lg w-1/3'>
        <h2 className='text-lg font-bold mb-4'>Unsaved Changes</h2>
        <p className='mb-4'>
          You have unsaved changes. Are you sure you want to leave without
          saving?
        </p>
        <div className='flex justify-end gap-4'>
          <button
            className='px-4 py-2 bg-red-500 text-white rounded-md'
            onClick={onConfirm}
          >
            Leave
          </button>
          <button
            className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md'
            onClick={onCancel}
          >
            Stay
          </button>
        </div>
      </div>
    </div>,
    document.body // Inject the modal into the body
  );
};
