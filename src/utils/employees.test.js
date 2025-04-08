import { describe, it, expect } from 'vitest';
import { getEmployees, saveEmployees } from './employees';

describe('employees.js', () => {
  it('saves employees to localStorage', () => {
    const mockData = [{ id: 1, name: 'JohnJohn DoeDoe' }];
    saveEmployees(mockData);
    expect(JSON.parse(localStorage.getItem('employees'))).toEqual(mockData);
  });

  it('retrieves employees from localStorage', async () => {
    const mockData = [{ id: 1, name: 'JohnJohn DoeDoe' }];
    localStorage.setItem('employees', JSON.stringify(mockData));
    const employees = await getEmployees();
    expect(employees).toEqual(mockData);
  });
});