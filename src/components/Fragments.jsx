import React from 'react';
export const Row = ({ children }) => {
  return <div className='flex w-full flex-row m-2'>{children}</div>;
};

export const Col = ({ children, className }) => {
  return (
    <div className={`flex mx-2 w-full flex-col ${className}`}>{children}</div>
  );
};

export const Title = ({ children, className }) => {
  return <div className={`text-2xl font-bold ${className}`}>{children}</div>;
};

export const PageContainer = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 w-full p-4 gap-2'>
      {children}
    </div>
  );
};
