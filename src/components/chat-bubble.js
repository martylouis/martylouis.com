const ChatBubble = ({ children }) => (
  <div className="relative flex-shrink-0 px-3 py-1 text-white bg-blue-600 rounded-full">
    {children}
    <div className="absolute bottom-0 left-0 text-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
        viewBox="0 0 10 6"
        width="10"
        height="6"
        fill="currentColor"
      >
        <path d="M10 0c0 3.31-3.98 6-8.89 6C.74 6 .37 5.98 0 5.95 2.08 4.37 3.34 2.28 3.34 0H10z" />
      </svg>
    </div>
  </div>
);

export default ChatBubble;
