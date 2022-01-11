const Tabs = ({ ...rest }) => {
  const tabNav = ['All Updates'];
  return (
    <div id="tabNav" {...rest}>
      <div className="flex mb-10 space-x-8 text-sm border-b-4 border-gray-100">
        {tabNav.map((item, i) => (
          <button
            role="tab"
            aria-selected="true"
            key={i}
            className="px-2 pb-4 -mb-1 font-bold text-gray-900 border-b-4 border-gray-900"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
