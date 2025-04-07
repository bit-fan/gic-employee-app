export const Row = ({ children }) => {
  return <div className='flex w-full flex-row m-2'>{children}</div>;
};

export const Col = ({ children, className }) => {
  return <div className={`flex w-full flex-col ${className}`}>{children}</div>;
};

export const FormLabel = ({ children }) => {
  return (
    <label className='block text-sm font-semibold text-gray-700'>
      {children}
    </label>
  );
};
export const FormInput = ({ children, className }) => {
  return (
    <input
      className={`rounded-md border-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none ${className}`}
      {...children}
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

export const FormError = ({ data, children }) => {
  if (!data) return null;
  return <p className='text-red-500 text-sm font-semibold'>{data.message}</p>;
};
export const Title = ({ children, className }) => {
  return <div className={`text-2xl font-bold ${className}`}>{children}</div>;
};

export const PageContainer = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 w-full p-4'>
      {children}
    </div>
  );
};
