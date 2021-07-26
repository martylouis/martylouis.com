import Container from './Container';

const SiteFooter = () => {
  return (
    <footer>
      <Container size="md">
        <div className="w-full transition-all border-t border-gray-200 dark:border-gray-700"></div>
        <p
          className="text-xs text-center dark:text-gray-400 text-gray-500 py-[6vh]"
          css={{ gridColumn: ' 1 / -1' }}
        >
          &copy; {new Date().getFullYear()} Marty Louis Co — Built with Next.js
          and ☕️
        </p>
      </Container>
    </footer>
  );
};

export default SiteFooter;
