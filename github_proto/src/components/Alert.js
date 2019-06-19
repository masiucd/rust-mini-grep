import React from 'react';

export default function Alert({ alert }) {
  return (
    <>
      {alert !== null && (
        <div
          className={`alert bg-warning alert-${alert.type} my-2 text-center`}
          style={{ width: '70%', margin: '0 auto' }}
        >
          <i className="fas fa-info-circle fa-2x" />
          <h4 className="text-dark" style={{ fontSize: '2rem' }}>
            {alert.msg}
          </h4>
        </div>
      )}
    </>
  );
}
