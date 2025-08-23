const AdminLoyaltyCardCustomers = () => {
  const customers = [
    { card: "MH 27 CA 2305", name: "Pawan Kumar Jain", status: "Active" },
    { card: "MH 41 WD 7689", name: "Nikunj Kelkar", status: "Active" },
    { card: "MH 02 DA 4675", name: "Yashwant Kumar", status: "Active" },
    { card: "MH 02 DA 4175", name: "Praveen Rathore", status: "Active" },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 lg:col-span-2">
      <h2 className="text-xl font-bold mb-4">Loyalty Card Customers</h2>
      <div className="space-y-4">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm border-b pb-2 last:border-b-0 last:pb-0"
          >
            <div>
              <div className="font-semibold text-gray-700">{customer.card}</div>
              <div className="text-gray-500">{customer.name}</div>
            </div>
            <div
              className={`font-medium ${
                customer.status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {customer.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminLoyaltyCardCustomers;
