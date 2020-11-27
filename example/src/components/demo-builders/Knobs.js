import React from 'react';

export const Knobs = ({ label, type, value, onChange }) => {
  if (type === 'number') {
    return (
      <div className='ui labeled input' style={{ display: 'block' }}>
        <label htmlFor='amount' className='ui label' style={{ width: 100 }}>
          {label}
        </label>
        <input
          type='number'
          value={value}
          onChange={(e) => onChange(label, +e.target.value)}
        />
      </div>
    );
  }
  return null;
};
