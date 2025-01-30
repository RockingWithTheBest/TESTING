import React from 'react';
import { render } from '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest'; // Import from Vitest
import Counter from './counter';

describe('Counter Component', () => {
    it('counter displays correct initial count', () => {
        const { getByTestId, asFragment } = render(<Counter initialCount={0} />);
        
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);

        // Snapshot
        expect(asFragment()).toMatchSnapshot();
    });
}); 