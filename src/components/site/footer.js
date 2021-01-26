const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="py-24 text-gray-200 bg-gray-900">
        <p className="max-w-4xl mx-auto text-sm">
          &copy; {year} Marty Louis Co.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
