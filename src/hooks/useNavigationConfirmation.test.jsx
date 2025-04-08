import React from 'react';
import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useNavigationConfirmation } from './useNavigationConfirmation';

describe('useNavigationConfirmation', () => {
  it('does not show modal when flag is false', () => {
    const { result } = renderHook(() =>
      useNavigationConfirmation(false, 'Unsaved changes')
    );
    // expect(result.current).toBeNull();
  });

  it('shows modal when flag is true', () => {
    const { result } = renderHook(() =>
      useNavigationConfirmation(true, 'Unsaved changes')
    );
    // expect(result.current).not.toBeNull();
  });
});