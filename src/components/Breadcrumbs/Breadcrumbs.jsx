/* Step 1: Create Breadcrumbs.jsx */

import React from 'react';

const Breadcrumbs = ({ path, onNavigate, styles }) => {
  return (
    <div style={{ marginBottom: '16px', color: 'white' }}>
      {path.map((folder, index) => (
        <span key={folder.id}>
          <span
            onClick={() => onNavigate(index)}
            style={{
              cursor: 'pointer',
              textDecoration: index !== path.length - 1 ? 'underline' : 'none',
              marginRight: '8px',
              color: '#93c5fd'
            }}
          >
            {folder.name}
          </span>
          {index !== path.length - 1 && '>'} {' '}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
