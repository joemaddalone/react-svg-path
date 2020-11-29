import React, { useState, useEffect } from 'react';
import { translate as t } from '../../i18n/i18n';

export const PointArray = ({ label, value, pointLength, onChange }) => {
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
        const pointValues =
          pointLength === 2 ? ['x', 'y'] : ['x2', 'y2', 'x', 'y'];
        return (
          <React.Fragment key={index}>
            <div className='ui labeled input' style={{ width: '92%' }}>
              <label htmlFor='amount' className='ui label'>
                {label}-{index} {pointValues.join(', ')}
              </label>
              {Array.from({ length: pointLength }).map((_, i) => {
                return (
                  <input
                    aria-label={pointValues[i]}
                    key={`${index}-${i}`}
                    style={{ width: `${60 / pointLength}%` }}
                    type='number'
                    value={p[i]}
                    onChange={(e) =>
                      setPoints((current) => {
                        current[index][i] = +e.target.value;
                        return [...current];
                      })
                    }
                  />
                );
              })}
            </div>
            <button
              key={`remove-${index}`}
              disabled={points.length === 1}
              onClick={() => {
                if (points.length > 1) {
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
          {t('common.addPoint')}
        </button>
      </div>
    </div>
  );
};
