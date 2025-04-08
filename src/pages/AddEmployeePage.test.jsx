import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AddEmployeePage from './AddEmployeePage';
import { store } from '../app/store';

describe('AddEmployeePage', () => {
  it('renders the Add Employee page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddEmployeePage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/add employee/i)).toBeInTheDocument();
  });

  it('dispatches addEmployee action with correct data', async () => {
    const mockDispatch = vi.fn();
    store.dispatch = mockDispatch;

    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddEmployeePage />
        </BrowserRouter>
      </Provider>
    );

    // Fill out the form
    fireEvent.change(screen.getByTestId('first-name'), {
      target: { value: 'JohnJohn' },
    });
    fireEvent.change(screen.getByTestId('last-name'), {
      target: { value: 'DoeDoe' },
    });
    fireEvent.change(screen.getByTestId('email'), {
      target: { value: 'john.doe@example.com' },
    });
    fireEvent.change(screen.getByTestId('phone'), {
      target: { value: '98765432' },
    });
    fireEvent.change(screen.getByTestId('dob'), {
      target: { value: '1990-01-01' },
    });
    fireEvent.change(screen.getByTestId('joined-date'), {
      target: { value: '2020-01-01' },
    });
    fireEvent.click(screen.getByTestId('gender-female'));

    // Submit the form
    fireEvent.click(screen.getByTestId('submit-button'));

    // Wait for the dispatch to be called
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    // Assert the dispatched action
    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: expect.any(String),
        payload: expect.objectContaining({
          firstName: 'JohnJohn',
          lastName: 'DoeDoe',
          email: 'john.doe@example.com',
          phone: '98765432',
          dob: '1990-01-01',
          joinedDate: '2020-01-01',
        }),
      })
    );
  });
});
