const EMPLOYEE_KEY = 'employees';
export const getEmployees = async () => {
  const list = JSON.parse(localStorage.getItem(EMPLOYEE_KEY)) || [];
  return Promise.resolve(list);
};

export const saveEmployees = (data) => {
  localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(data));
};