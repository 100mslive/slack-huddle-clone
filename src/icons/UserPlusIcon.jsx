import React from 'react';

function SvgComponent(props) {
  return (
    <svg
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      className=''
      shapeRendering='geometricPrecision'
      {...props}
    >
      <path d='M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
      <circle cx='8.5' cy='7' r='4' />
      <path d='M20 8v6' />
      <path d='M23 11h-6' />
    </svg>
  );
}

export default SvgComponent;
