import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getEmployees, saveEmployees } from '../../utils/employees';

const initialState = {
  list: [],
  status: '',
  showError: false
};

export const loadEmployees = createAsyncThunk(
  'employee/loadEmployees',
  async () => {
    return await getEmployees();
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload);
      saveEmployees(state.list);
    },
    updateEmployee: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.list.findIndex(emp => emp.id === id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...updatedData };
        saveEmployees(state.list);
      }
    },
    deleteEmployee: (state, action) => {
      state.list = state.list.filter(emp => emp.id !== action.payload);
      saveEmployees(state.list);
    },
    setShowError: (state, action) => {
      state.showError = action.payload;
    },
    syncEmployeesFromStorage: (state) => {
      state.list = getEmployees();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
        state.showError = false;
        state.error = null
      })
      .addCase(loadEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.showError = true;
      });
  },
});

export const {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  setShowError,
  syncEmployeesFromStorage
} = employeesSlice.actions;

export default employeesSlice.reducer;
