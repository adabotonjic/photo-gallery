import React from 'react';

const ArrowRight = ({ width = 20, height = 20, fill = "var(--color-red)" }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
    <path fill={fill} d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z" />
  </svg>
);

export default ArrowRight;
