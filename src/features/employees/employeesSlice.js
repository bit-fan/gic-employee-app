import { createSlice } from '@reduxjs/toolkit';
import {
  getEmployees,
  saveEmployees
} from '../../utils/localStorageUtils';

const initialState = {
  data: getEmployees(),
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.data.push(action.payload);
      saveEmployees(state.data);
    },
    updateEmployee: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.data.findIndex(emp => emp.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updatedData };
        saveEmployees(state.data);
      }
    },
    deleteEmployee: (state, action) => {
      state.data = state.data.filter(emp => emp.id !== action.payload);
      saveEmployees(state.data);
    },
    syncEmployeesFromStorage: (state) => {
      state.data = getEmployees();
    }
  }
});

export const {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  syncEmployeesFromStorage
} = employeesSlice.actions;

export default employeesSlice.reducer;
