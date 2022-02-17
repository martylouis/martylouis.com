const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 448 196"
    {...props}
  >
    {props.title && <title>{props.title}</title>}
    <path
      fill="currentColor"
      d="M162.4 78.4 168 0H98L0 196h70l36.75-73.5L112 196h42l42-73.5V196h70V0h-70l-33.6 78.4ZM350 133.385V0h-70v196H416.693L448 133.385h-98Z"
    />
  </svg>
);

export default Logo;
