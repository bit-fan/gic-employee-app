import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import EditEmployeePage from './EditEmployeePage';
import { store } from '../app/store';
import { addEmployee } from '../features/employees/employeesSlice';

describe('EditEmployeePage', () => {
  it('renders the Edit Employee page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EditEmployeePage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/edit employee/i)).toBeInTheDocument();
  });

  it('pre-fills the form with employee data', () => {
    const mockEmployee = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '98765432',
      dob: '1990-01-01',
      gender: 'F',
      joinedDate: '2020-01-01',
    };

    store.dispatch(addEmployee(mockEmployee));
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/employee/edit/1']}>
          <Routes>
            <Route path='/employee/edit/:id' element={<EditEmployeePage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('first-name')).toHaveValue('John');
    expect(screen.getByTestId('last-name')).toHaveValue('Doe');
    expect(screen.getByTestId('email')).toHaveValue('john.doe@example.com');
    expect(screen.getByTestId('phone')).toHaveValue('98765432');
    expect(screen.getByTestId('dob')).toHaveValue('1990-01-01');
    expect(screen.getByTestId('joined-date')).toHaveValue('2020-01-01');
  });

  it('dispatches updateEmployee action with updated data', async () => {
    const mockEmployee = {
      id: 2,
      firstName: 'John',
      lastName: 'DoeDoe',
      email: 'john.doe@example.com',
      phone: '98765432',
      dob: '1990-01-01',
      gender: 'F',
      joinedDate: '2020-01-01',
    };
    store.dispatch(addEmployee(mockEmployee));
    const mockDispatch = vi.fn();
    store.dispatch = mockDispatch;

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/employee/edit/2']}>
          <Routes>
            <Route path='/employee/edit/:id' element={<EditEmployeePage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    // Update the form
    fireEvent.change(screen.getByTestId('first-name'), {
      target: { value: 'Jane12' },
    });

    // Submit the form
    fireEvent.click(screen.getByTestId('submit-button'));

    // Wait for the update action to be dispatched
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    // Assert the dispatched action
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'employees/updateEmployee',
        payload: {
          id: '2',
          updatedData: {
            id: 2,
            firstName: 'Jane12',
            lastName: 'DoeDoe',
            email: 'john.doe@example.com',
            phone: '98765432',
            dob: '1990-01-01',
            joinedDate: '2020-01-01',
            gender: 'F', // Ensure gender is included if applicable
          },
        },
      })
    );
  });
});
