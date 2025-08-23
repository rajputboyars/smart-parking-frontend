const AdminParkingLotAllotment = () => {
  const data = [
    {
      carPlate: "MH 27 CA 2305",
      inTime: "05/12/2023 - 04:42PM",
      status: "Active",
      charge: "₹1199",
      action: "View Details",
    },
    {
      carPlate: "MH 41 WD 7689",
      inTime: "05/12/2023 - 02:22AM",
      status: "Active",
      charge: "₹00",
      action: "View Details",
    },
    {
      carPlate: "MH 02 DA 4675",
      inTime: "05/12/2023 - 04:16PM",
      status: "Active",
      charge: "₹00",
      action: "View Details",
    },
    {
      carPlate: "MH 12 WD 1457",
      inTime: "05/12/2023 - 12:26PM",
      status: "Active",
      charge: "₹200",
      action: "View Details",
    },
    {
      carPlate: "MH 27 CA 0567",
      inTime: "05/12/2023 - 05:56PM",
      status: "Left at 06:00PM",
      charge: "₹300",
      action: "View Details",
    },
    {
      carPlate: "RJ 27 EA EFEF",
      inTime: "05/12/2023 - 03:26PM",
      status: "Left at 04:00PM",
      charge: "₹1350",
      action: "View Details",
    },
    {
      carPlate: "MH 27 CA 2305",
      inTime: "05/12/2023 - 08:58AM",
      status: "Left at 10:00AM",
      charge: "₹00",
      action: "View Details",
    },
    {
      carPlate: "MH 41 MP 2024",
      inTime: "05/12/2023 - 04:12AM",
      status: "Active",
      charge: "₹00",
      action: "View Details",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Current Parking Lot Allotment</h2>
        <div className="flex space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-300 transition-colors">
            Filter
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Car Number Plate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                In Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Charge
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.carPlate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.inTime}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.charge}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition-colors">
                    {item.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <div>
          <select className="px-2 py-1 border rounded-lg">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span className="ml-2">Items per page</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>1 of 1 pages</span>
          <button className="p-1 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="p-1 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminParkingLotAllotment;
