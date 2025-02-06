'use client'; // Indique que ce composant doit être rendu côté client

import React, { ComponentPropsWithoutRef } from 'react';

const GithubIcon = ({
  size = 24,
  ...props
}: ComponentPropsWithoutRef<'svg'> & { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M4.0744 2.9938C4.13263 1.96371 ...' fill='currentColor' />
      <path d='M3.33203 15.9454C3.02568 15.4859 ...' fill='currentColor' />
    </svg>
  );
};

export default GithubIcon;
