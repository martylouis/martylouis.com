import classNames from 'classnames';

export const H1 = ({ className, children, ...restProps }) => (
  <h1
    className={classNames(
      'text-4xl font-extrabold tracking-tighter md:text-5xl',
      className
    )}
    {...restProps}
  >
    {children}
  </h1>
);

export const H2 = ({ className, children, ...restProps }) => (
  <h2
    className={classNames(
      'text-3xl font-extrabold text-gray-800 sm:text-4xl',
      className
    )}
    {...restProps}
  >
    {children}
  </h2>
);

export const H3 = ({ className, children, ...restProps }) => {
  return (
    <h3
      className={classNames('text-2xl font-bold text-gray-800', className)}
      {...restProps}
    >
      {children}
    </h3>
  );
};
