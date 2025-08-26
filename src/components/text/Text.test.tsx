import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Text } from './Text';

describe('<Text />', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <svg>
        <Text>
          <tspan data-testid='child' />
        </Text>
      </svg>
    );
    expect(getByTestId('child')).toBeDefined();
  });
});
