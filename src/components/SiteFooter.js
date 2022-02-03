import Container from './Container';

const SiteFooter = () => {
  return (
    <Container as="footer">
      <div className="w-full transition-all border-t border-gray-200 dark:border-gray-700"></div>
      <p
        className="text-xs text-center text-gray-500 dark:text-gray-400 py-[6vh]"
        css={{ gridColumn: ' 1 / -1' }}
      >
        &copy; {new Date().getFullYear()} Marty Louis Co — Built with Next.js
        and ☕️
      </p>
    </Container>
  );
};

export default SiteFooter;
