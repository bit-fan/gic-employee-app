import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EmployeeForm from './EmployeeForm';

describe('EmployeeForm Component', () => {
  it('renders the form with a submit button', () => {
    render(<EmployeeForm />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('renders input fields for employee details', () => {
    render(<EmployeeForm />);
    const nameInput = screen.getByTestId('first-name');
    const emailInput = screen.getByTestId('email');
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it('renders all input fields', () => {
    render(<EmployeeForm />);
    expect(screen.getByTestId('first-name')).toBeInTheDocument();
    expect(screen.getByTestId('last-name')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('phone')).toBeInTheDocument();
    expect(screen.getByTestId('dob')).toBeInTheDocument();
    expect(screen.getByTestId('joined-date')).toBeInTheDocument();
  });

  it('calls onSubmit with the correct data when the form is submitted', async () => {
    const mockOnSubmit = vi.fn((data) =>
      console.log('onSubmit called with:', data)
    );

    render(<EmployeeForm onSubmit={mockOnSubmit} />);

    // Fill out the form using getByTestId
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

    // Select gender
    fireEvent.click(screen.getByTestId('gender-female'));

    // Debugging: Check the DOM state before submission
    screen.debug();

    // Submit the form
    fireEvent.click(screen.getByTestId('submit-button'));

    // Wait for the onSubmit function to be called
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });

    // Assert that onSubmit was called with the correct data
    expect(mockOnSubmit).toHaveBeenCalledWith({
      firstName: 'JohnJohn',
      lastName: 'DoeDoe',
      email: 'john.doe@example.com',
      phone: '98765432',
      gender: 'F', // Gender is now selected
      dob: '1990-01-01',
      joinedDate: '2020-01-01',
    });
  });
});
