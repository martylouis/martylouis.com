import { IconProps } from '.';

export const LogoLinkedin = (props: IconProps) => {
  const size = props.size || '100%';
  const title = props.title || 'logo linkedin';

  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="false"
      focusable="false"
      {...props}
    >
      <title>{title}</title>
      <g fill="currentColor">
        <path
          d="M29,1H3A2,2,0,0,0,1,3V29a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V3A2,2,0,0,0,29,1ZM9.887,26.594H5.374V12.25H9.887ZM7.63,10.281a2.625,2.625,0,1,1,2.633-2.625A2.624,2.624,0,0,1,7.63,10.281ZM26.621,26.594H22.2V19.656c0-1.687,0-3.75-2.35-3.75s-2.633,1.782-2.633,3.656v7.126H12.8V12.25h4.136v1.969h.094a4.7,4.7,0,0,1,4.231-2.344c4.513,0,5.359,3,5.359,6.844Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
