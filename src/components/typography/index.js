import classNames from 'classnames';

export const H1 = ({ className, children, ...restProps }) => (
  <h1
    className={classNames(
      'text-4xl font-black tracking-tighter text-gray-900 md:text-6xl',
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
      'text-3xl font-extrabold text-gray-900 sm:text-4xl',
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
      className={classNames('text-xl font-bold text-gray-900', className)}
      {...restProps}
    >
      {children}
    </h3>
  );
};
