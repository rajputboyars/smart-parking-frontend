import BlueBus from "/public/images/blue-bus.svg";
import GrayBus from "/public/images/gray-bus.svg";

const AdminParkingOccupancy = () => {
  const renderRow = (rowNumber, occupiedSlots, totalSlots) => {
    const slots = [];
    for (let i = 0; i < totalSlots; i++) {
      const isOccupied = i < occupiedSlots;
      slots.push(
        <div key={i} className="h-8 w-8">
          <img src={isOccupied ? BlueBus.src : GrayBus.src} alt="blue bus" />
        </div>
      );
    }
    return (
      <div key={rowNumber} className="flex items-center space-x-2 mb-2">
        <div className="text-gray-500 text-sm w-12 flex-shrink-0">
          Row {rowNumber}
        </div>
        <div className="flex space-x-2 overflow-x-auto">{slots}</div>
      </div>
    );
  };
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 col-span-1">
      <h2 className="text-xl font-bold mb-4">Parking Occupancy</h2>
      {renderRow(1, 3, 5)}
      {renderRow(2, 2, 5)}
      {renderRow(3, 4, 5)}
      {renderRow(4, 1, 5)}
      {renderRow(5, 3, 5)}
    </div>
  );
};

export default AdminParkingOccupancy;
