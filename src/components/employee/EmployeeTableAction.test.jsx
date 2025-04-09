import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import EmployeeTableAction from './EmployeeTableAction';
import { store } from '../../app/store';

describe('EmployeeTableAction', () => {
  it('renders Edit and Delete actions', () => {
    const mockData = { id: 1 };
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EmployeeTableAction data={mockData} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/edit/i)).toBeInTheDocument();
    expect(screen.getByText(/delete/i)).toBeInTheDocument();
  });

  it('calls delete action on confirmation', async () => {
    const mockData = { id: 1 };
    const mockDispatch = vi.fn();
    store.dispatch = mockDispatch;

    render(
      <Provider store={store}>
        <BrowserRouter>
          <EmployeeTableAction data={mockData} />
        </BrowserRouter>
      </Provider>
    );

    vi.spyOn(window, 'confirm').mockReturnValueOnce(true);
    fireEvent.click(screen.getByText(/delete/i));
    await waitFor(() => {
      expect(screen.getByTestId('confirm-button')).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId('confirm-button'));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
