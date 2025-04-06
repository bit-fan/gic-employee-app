import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/employee/add' element={<AddEmployee />} />
      <Route path='/employee/edit/:id' element={<EditEmployee />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
