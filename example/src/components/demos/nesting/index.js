import React from 'react';
import NestingDemo1 from './NestingDemo1';
import NestingDemo2 from './NestingDemo2';
import NestingDemo3 from './NestingDemo3';

export const Nesting = () => {
  return (
    <>
      <h2>Nesting Components</h2>
      <div className='complex'>
        <p>
          react-svg-path allows you to nest the paths created by components -
          this is normally not possible in svg. The rendered output will still
          be separate paths. However when nesting components the child component
          will inherit a starting point at the parent's ending point. And you
          can do this endlessly!
        </p>
        <NestingDemo1 />
        <NestingDemo2 />
        <NestingDemo3 />
      </div>
    </>
  );
};

