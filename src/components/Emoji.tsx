const Emoji = ({ label, children, ...props }) => (
  <span role="img" aria-label={`${label} emoji`} {...props}>
    {children}
  </span>
);

export default Emoji;
