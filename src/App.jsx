import React from 'react';
import { useDispatch } from 'react-redux';
import AppRouter from './routes/AppRouter';
import { useEffect } from 'react';
import { loadEmployees } from './features/employees/employeesSlice';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadEmployees());
  }, [dispatch]);

  return <AppRouter />;
}
