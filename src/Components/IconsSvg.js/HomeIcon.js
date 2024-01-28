// HomeIcon.js
import React from 'react';

const HomeIcon = ({ width = 20, height = 20, fill = "var(--color-red)" }) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 32">
    <path fill={fill} d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
  </svg>
);

export default HomeIcon;
