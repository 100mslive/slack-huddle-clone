import React from 'react';

function SvgComponent(props) {
  return (
    <svg
      viewBox='0 0 24 24'
      width='18'
      height='18'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      stroke='#144472'
      shapeRendering='geometricPrecision'
      {...props}
    >
      <path d='M3 18v-6a9 9 0 0118 0v6' />
      <path d='M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z' />
    </svg>
  );
}

export default SvgComponent;
