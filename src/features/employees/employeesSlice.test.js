import { describe, it, expect } from 'vitest';
import reducer, {
  addEmployee,
  deleteEmployee,
  updateEmployee,
  setShowError,
} from './employeesSlice';

describe('employeesSlice', () => {
  it('adds an employee', () => {
    const initialState = { list: [] };
    const newState = reducer(
      initialState,
      addEmployee({ id: 1, firstName: 'John', lastName: 'Doe' })
    );
    expect(newState.list).toHaveLength(1);
    expect(newState.list[0].firstName).toBe('John');
    expect(newState.list[0].lastName).toBe('Doe');
  });

  it('updates an employee', () => {
    const initialState = {
      list: [{ id: 1, firstName: 'John', lastName: 'Doe' }],
    };
    const newState = reducer(
      initialState,
      updateEmployee({ id: 1, updatedData: { firstName: 'Jane' } })
    );
    expect(newState.list[0].firstName).toBe('Jane');
  });

  it('deletes an employee', () => {
    const initialState = { list: [{ id: 1, firstName: 'John' }] };
    const newState = reducer(initialState, deleteEmployee(1));
    expect(newState.list).toHaveLength(0);
  });

  it('sets showError to true', () => {
    const initialState = { showError: false };
    const newState = reducer(initialState, setShowError(true));
    expect(newState.showError).toBe(true);
  });
});