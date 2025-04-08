import React from 'react';
export const FormLabel = ({ children }) => {
  return (
    <label className='block text-sm font-semibold text-gray-700'>
      {children}
    </label>
  );
};
export const FormInput = ({ className, error, ...rest }) => {
  return (
    <input
      className={`rounded-md border-2 ${
        error ? 'border-red-500' : 'border-gray-300'
      } p-2 focus:border-blue-500 focus:outline-none ${className}`}
      {...rest}
    />
  );
};

export const FormButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`rounded-md bg-blue-500 px-4 py-2 text-black hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const FormError = ({ data }) => {
  if (!data) return null;
  return <p className='text-red-500 text-sm font-semibold'>{data.message}</p>;
};
