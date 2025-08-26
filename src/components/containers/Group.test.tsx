import React from 'react';
import { render } from '@testing-library/react';
import { expect, describe, it } from "vitest";
import { Group } from './Group';

describe('<Group />', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <svg>
        <Group>
          <rect data-testid='child' />
        </Group>
      </svg>
    );
    expect(getByTestId('child')).toBeDefined();
  });
});
