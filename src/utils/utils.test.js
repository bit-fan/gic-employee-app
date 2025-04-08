import { describe, it, expect } from 'vitest';
import { formatDate } from './utils';

describe('formatDate Utility', () => {
  it('formats a date correctly', () => {
    const result = formatDate('2025-04-08');
    expect(result).toBe('April 8, 2025');
  });

  it('handles invalid dates gracefully', () => {
    const result = formatDate('invalid-date');
    expect(result).toBe('Invalid Date');
  });
});