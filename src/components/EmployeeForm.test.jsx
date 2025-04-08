import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EmployeeForm from './EmployeeForm';
import { BrowserRouter } from 'react-router-dom';

describe('EmployeeForm Component', () => {
  it('renders the form with all input fields', () => {
    render(
      <BrowserRouter>
        <EmployeeForm />
      </BrowserRouter>
    );
    expect(screen.getByTestId('first-name')).toBeInTheDocument();
    expect(screen.getByTestId('last-name')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('phone')).toBeInTheDocument();
    expect(screen.getByTestId('dob')).toBeInTheDocument();
    expect(screen.getByTestId('joined-date')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('displays validation errors for invalid inputs', async () => {
    render(
      <BrowserRouter>
        <EmployeeForm onSubmit={vi.fn()} />
      </BrowserRouter>
    );

    // Submit the form without filling any fields
    fireEvent.click(screen.getByTestId('submit-button'));

    // Wait for validation errors to appear
    await waitFor(() => {
      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/phone number is required/i)).toBeInTheDocument();
      expect(
        screen.getByText(/date of birth is required/i)
      ).toBeInTheDocument();
    });
  });

  it('calls onSubmit with the correct data when the form is submitted', async () => {
    const mockOnSubmit = vi.fn();

    render(
      <BrowserRouter>
        <EmployeeForm onSubmit={mockOnSubmit} />
      </BrowserRouter>
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

    // Wait for the onSubmit function to be called
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });

    // Assert the submitted data
    expect(mockOnSubmit).toHaveBeenCalledWith({
      firstName: 'JohnJohn',
      lastName: 'DoeDoe',
      email: 'john.doe@example.com',
      phone: '98765432',
      gender: 'F',
      dob: '1990-01-01',
      joinedDate: '2020-01-01',
    });
  });

  it('validates that joined date is after date of birth', async () => {
    render(
      <BrowserRouter>
        <EmployeeForm onSubmit={vi.fn()} />
      </BrowserRouter>
    );

    // Fill out the form with invalid joined date
    fireEvent.change(screen.getByTestId('dob'), {
      target: { value: '2020-01-01' },
    });
    fireEvent.change(screen.getByTestId('joined-date'), {
      target: { value: '2019-12-31' },
    });

    // Submit the form
    fireEvent.click(screen.getByTestId('submit-button'));

    // Wait for validation error
    await waitFor(() => {
      expect(
        screen.getByText(/joined date must be after date of birth/i)
      ).toBeInTheDocument();
    });
  });
});
