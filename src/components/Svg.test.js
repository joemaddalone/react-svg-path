import React from 'react';
import { render } from '@testing-library/react';
import { Svg } from './Svg';

describe('<Svg />', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Svg>
        <rect data-testid='child' />
      </Svg>
    );
    expect(getByTestId('child')).toBeDefined();
  });
});
