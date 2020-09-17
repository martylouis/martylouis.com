import { social, feather } from '../data/icons';

export const SvgIcon = (props) => {
  const { title, size, className, path, ...rest } = props;
  return (
    <span className={`inline-block w-${size} h-${size} ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="block max-w-full max-h-full"
        {...rest}
      >
        <title>{title}</title>
        <path d={path} />
      </svg>
    </span>
  );
};

export const FeatherIcon = (props) => {
  const { name, title, size, className } = props;
  return (
    <SvgIcon
      size={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      title={title}
      path={feather[name]}
    />
  );
};

FeatherIcon.defaultProps = {
  size: '4',
};

export const SocialIcon = (props) => {
  const { name, title, size, className } = props;
  return (
    <SvgIcon
      size={size}
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      title={title}
      path={social[name]}
    />
  );
};

// const SvgIcon = (title, paths, size, className, ...props) => (
//   <span className={`inline-block w-${size} h-${size} ${className}`}>
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="block max-w-full max-h-full"
//       {...props}
//     >
//       <title>{title}</title>
//       {paths}
//     </svg>
//   </span>
// );

// const SocialIcon = '';

// const FeatherIcon = (name, title, size, className) => (
//   <SvgIcon
//     size={size}
//     className={className}
//     stroke="currentColor"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth="2"
//     viewBox="0 0 24 24"
//     title={title}
//     paths={`d=${feather[name]}`}
//   />
// );

// const Icon = (name, title, size, className) => {
//   return (
//     <span className={`inline-block w-${size} h-${size} ${className}`}>
//       <svg
//         className="block max-w-full max-h-full"
//         fill="none"
//         stroke="currentColor"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <title>{title}</title>
//         <path d={feather[name]} />
//       </svg>
//     </span>
//   );
// };

// Icon.defaultProps = {
//   size: '4',
// };

// FeatherIcon.defaultProps = {
//   size: '4',
// };

// export { SvgIcon };
