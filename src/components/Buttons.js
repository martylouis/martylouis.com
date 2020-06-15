import React from 'react';
import { Link } from 'gatsby';

const sizes = {
  default: `px-8 py-2`,
  sm: `px-4 py-1`,
  lg: `px-10 py-4`,
};

export const ButtonLink = ({ children, to, size, className = `` }) => (
  <Link
    className={`${
      sizes[size] || sizes.default
    } font-semibold inline-block text-white rounded ${className}`}
    to={to}
  >
    {children}
  </Link>
);

export const ButtonSubmit = ({ text }) => <button type="submit">{text}</button>;
