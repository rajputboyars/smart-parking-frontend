const AdminStatCard = ({ title, value, color }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
      <div className={`text-5xl font-bold ${color}`}>{value}</div>
      <div className="mt-2 text-sm text-gray-500">{title}</div>
    </div>
  );
};

export default AdminStatCard;
