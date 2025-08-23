const AdminHeader = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-3xl font-bold">Live Overview</h1>
      <button className="bg-purple-600 text-white px-6 py-2 rounded-xl flex items-center shadow-lg hover:bg-purple-700 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414-1.414L9 9.586V4a1 1 0 112 0v5.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3z"
            clipRule="evenodd"
          />
        </svg>
        Export Data
      </button>
    </div>
  );
};

export default AdminHeader;
