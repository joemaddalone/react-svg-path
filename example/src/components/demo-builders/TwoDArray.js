import React, { useState, useEffect } from 'react';
import { translate as t } from '../../i18n/i18n';

export const TwoDArray = ({ label, value, pointLength, onChange }) => {
  const [points, setPoints] = useState(value || [[0, 0]]);
  useEffect(() => {
    onChange(label, points);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points]);

  return (
    <div
      className='flex flex-wrap items-center'
      style={{
        flexBasis: '100%',
        width: '100%'
      }}
    >
      {points.map((p, index) => {
        return (
          <React.Fragment key={index}>
            <div className='ui labeled input' style={{ width: '92%' }}>
              <label htmlFor='amount' className='ui label'>
                {`row ${index}`}
              </label>

              <input
                aria-label={p}
                key={index}
                type='text'
                value={p.join(',')}
                onChange={(e) =>
                  setPoints((current) => {
                    current[index] = e.target.value.split(',').map(Number);
                    return [...current];
                  })
                }
              />
            </div>
            <button
              key={`remove-${index}`}
              disabled={points.length === 1}
              onClick={() => {
                if (points.length > 0) {
                  setPoints((current) => {
                    current.splice(index, 1);
                    return [...current];
                  });
                }
              }}
              className='mini ui button negative'
            >
              X
            </button>
          </React.Fragment>
        );
      })}
      <div
        style={{ width: '100%', padding: 10 }}
        className='flex justify-center'
      >
        <button
          onClick={() => {
            setPoints((current) => {
              current.push(Array.from({ length: pointLength }).fill(0));
              return [...current];
            });
          }}
          className='small ui button positive'
        >
          Add Row
        </button>
      </div>
    </div>
  );
};
