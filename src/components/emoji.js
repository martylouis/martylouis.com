const Emoji = ({ type, ariaLabel, ...restProps }) => (
  <span role="img" aria-label={ariaLabel} data-emoji={type} {...restProps}>
    {type}
  </span>
);

export default Emoji;
