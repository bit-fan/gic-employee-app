const EMPLOYEE_KEY = 'employees';

export const getEmployees = () => {
  return JSON.parse(localStorage.getItem(EMPLOYEE_KEY)) || [];
};

export const saveEmployees = (data) => {
  localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(data));
};

export const getEmployeeById = (id) => {
  const employees = getEmployees();
  return employees.find(emp => emp.id === id);
};

export const addEmployee = (employee) => {
  console.log('employee', employee);

  const employees = getEmployees();
  employees.push(employee);
  saveEmployees(employees);
};

export const updateEmployee = (id, updatedData) => {
  const employees = getEmployees();
  const index = employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...updatedData };
    saveEmployees(employees);
  }
};

export const deleteEmployee = (id) => {
  const employees = getEmployees().filter(emp => emp.id !== id);
  saveEmployees(employees);
};
