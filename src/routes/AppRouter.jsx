import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EmployeeListPage from '../pages/EmployeeListPage';
import AddEmployeePage from '../pages/AddEmployeePage';
import EditEmployeePage from '../pages/EditEmployeePage';

const AppRouter = () => (
  <Routes>
    <Route path='/' element={<EmployeeListPage />} />
    <Route path='/employee/add' element={<AddEmployeePage />} />
    <Route path='/employee/edit/:id' element={<EditEmployeePage />} />
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);

export default AppRouter;
