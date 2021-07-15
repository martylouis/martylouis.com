import Container from './Container';

const SiteFooter = () => {
  return (
    <footer className="py-[8vh] border-t border-gray-200">
      <Container>
        <p
          className="text-sm text-center text-gray-400"
          css={{ gridColumn: ' 1 / -1' }}
        >
          &copy; {new Date().getFullYear()} Marty Louis Co
        </p>
      </Container>
    </footer>
  );
};

export default SiteFooter;
