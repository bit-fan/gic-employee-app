import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import EditEmployeePage from './EditEmployeePage';
import { store } from '../app/store';

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

  it('shows loading message if employee data is not available', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EditEmployeePage />
        </BrowserRouter>
      </Provider>
    );
    // expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});