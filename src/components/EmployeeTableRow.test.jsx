import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import EmployeeTableRow from './EmployeeTableRow';
import { BrowserRouter } from 'react-router-dom';

describe('EmployeeTableRow', () => {
  it('renders table headers when header prop is true', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EmployeeTableRow header={true} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/first name/i)).toBeInTheDocument();
    expect(screen.getByText(/last name/i)).toBeInTheDocument();
  });

  it('renders employee data when header prop is false', () => {
    const mockData = { firstName: 'JohnJohn', lastName: 'DoeDoe' };
    render(
      <Provider store={store}>
        <BrowserRouter>
          <EmployeeTableRow header={false} data={mockData} index={0} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/johnjohn/i)).toBeInTheDocument();
    expect(screen.getByText(/doedoe/i)).toBeInTheDocument();
  });
});
