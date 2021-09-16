import React from 'react';

function SvgComponent(props) {
  return (
    <svg
      viewBox='0 0 24 24'
      width='22'
      height='22'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}
    >
      <path d='M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1' />
      <path d='M12 15l5 6H7l5-6z' />
    </svg>
  );
}

export default SvgComponent;
