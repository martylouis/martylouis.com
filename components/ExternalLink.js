export default function CustomLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" {...props}>
      {children}
    </a>
  );
}
