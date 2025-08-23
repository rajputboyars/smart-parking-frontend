const AdminEVStationsOccupancy = () => {
  const renderEVRow = (rowNumber, occupiedCount) => {
    const stations = [];
    for (let i = 0; i < 5; i++) {
      const isOccupied = i < occupiedCount;
      stations.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-8 w-8 transition-colors ${
            isOccupied ? "text-green-500" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zm1 2h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V7a1 1 0 011-1zm0 5h8a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2a1 1 0 011-1z" />
        </svg>
      );
    }
    return (
      <div key={rowNumber} className="flex items-center space-x-2 mb-2">
        <div className="text-gray-500 text-sm w-12 flex-shrink-0">
          Row {rowNumber}
        </div>
        <div className="flex space-x-2 overflow-x-auto">{stations}</div>
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 col-span-1">
      <h2 className="text-xl font-bold mb-4">EV Stations Occupancy</h2>
      {renderEVRow(1, 3)}
    </div>
  );
};

export default AdminEVStationsOccupancy;
