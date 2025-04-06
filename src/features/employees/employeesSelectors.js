export const selectAllEmployees = (state) => state.employees.data;

export const selectEmployeeById = (id) => (state) =>
  state.employees.data.find(emp => emp.id === id);
