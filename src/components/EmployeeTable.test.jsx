import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import EmployeeTable from './EmployeeTable';
import { store } from '../app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('EmployeeTable', () => {
  it('renders table headers', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EmployeeTable />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getAllByText(/first name/i)).toHaveLength(1);
    expect(screen.getAllByText(/last name/i)).toHaveLength(1);
  });

  it('renders employee rows', () => {
    const employees = [
      { id: 1, firstName: 'JohnJohn', lastName: 'DoeDoe' },
      { id: 2, firstName: 'Jane', lastName: 'Smith' },
    ];
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EmployeeTable employees={employees} />
        </BrowserRouter>
      </Provider>
    );
    screen.debug();
    expect(screen.getAllByText(/johnjohn/i)).toHaveLength(1);
    expect(screen.getAllByText(/jane/i)).toHaveLength(1);
  });
});
