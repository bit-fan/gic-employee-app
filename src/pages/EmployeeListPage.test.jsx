import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import EmployeeListPage from './EmployeeListPage';
import { store } from '../app/store';

describe('EmployeeListPage', () => {
  it('renders the Employee List page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EmployeeListPage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/employee list/i)).toBeInTheDocument();
  });

  it('renders the Add Employee button', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EmployeeListPage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/add employee/i)).toBeInTheDocument();
  });
});