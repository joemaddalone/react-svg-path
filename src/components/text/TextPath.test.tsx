import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Path from '../path/Path';
import { TextPath } from './TextPath';
import { Circle } from '../shapes/basic';

describe('<Text />', () => {
  it('should render correctly with attributes applied to the correct element', () => {
    const { container, getByTestId } = render(
      <svg>
        <TextPath
          textLength={500}
          data-testid='id-on-text'
          id='my-path'
          fontSize='2rem'
          path='M0 100 h500'
        >
          this is the text
        </TextPath>
      </svg>
    );
    const pathElement = container.querySelector('#my-path');
    const textPathElement = container.querySelector('textPath');
    const textElement = getByTestId('id-on-text');
    expect(textPathElement?.getAttribute('textLength')).toBe('500');
    expect(textPathElement?.getAttribute('href')).toBe('#my-path');
    expect(textElement.getAttribute('font-size')).toBe('2rem');
    expect(pathElement?.getAttribute('d')).toBe('M0 100 h500');
  });

  it('should render correct path when using a component', () => {
    const { container } = render(
      <svg>
        <TextPath path={<Circle cx={50} cy={75} size={100} />}>
          this is the text
        </TextPath>
      </svg>
    );
    const pathElement = container.querySelector('path');
    expect(pathElement?.getAttribute('d')).toBe(
      new Path().circle(100, 50, 75).toString()
    );
  });
});
