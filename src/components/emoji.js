const Emoji = ({ emoji, ariaLabel, ...rest }) => (
  <span role="img" aria-label={ariaLabel} {...rest}>
    {emoji}
  </span>
);

export default Emoji;
