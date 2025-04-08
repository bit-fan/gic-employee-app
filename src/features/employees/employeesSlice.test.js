import { describe, it, expect } from 'vitest';
import reducer, { addEmployee, deleteEmployee } from './employeesSlice';

describe('employeesSlice', () => {
  it('adds an employee', () => {
    const initialState = { list: [] };
    const newState = reducer(initialState, addEmployee({ id: 1, name: 'JohnJohn' }));
    expect(newState.list).toHaveLength(1);
    expect(newState.list[0].name).toBe('JohnJohn');
  });

  it('deletes an employee', () => {
    const initialState = { list: [{ id: 1, name: 'JohnJohn' }] };
    const newState = reducer(initialState, deleteEmployee(1));
    expect(newState.list).toHaveLength(0);
  });
});