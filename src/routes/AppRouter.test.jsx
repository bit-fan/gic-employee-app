import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { store } from '../app/store'; // Import your Redux store

describe('AppRouter', () => {
  it('renders EmployeeListPage by default', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/employee list/i)).toBeInTheDocument();
  });
});
