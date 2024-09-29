import { useState } from "react";

const AddDevices = ({ onClose, onAddDevice }) => {
  const [deviceName, setDeviceName] = useState("");
  const [deviceIP, setDeviceIP] = useState("");
  const [deviceType, setDeviceType] = useState("Мобильный телефон");

  const handleAddDevice = () => {
    const newDevice = {
      name: deviceName,
      ipAddress: deviceIP,
      type: deviceType,
      dataUsage: "0.0", // Новое устройство еще не использовало трафик
      add: new Date().toLocaleDateString(),
      imgURL: "default-img-url", // Можете добавить логику для картинок
    };
    onAddDevice(newDevice); // Добавляем новое устройство через пропс
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Добавление устройства</h2>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={onClose} // Закрываем модальное окно
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Название устройства"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="IP-адрес устройства"
            value={deviceIP}
            onChange={(e) => setDeviceIP(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Мобильный телефон</option>
            <option>Ноутбук</option>
            <option>Планшет</option>
            <option>Смарт ТВ</option>
          </select>
        </div>

        <button
          onClick={handleAddDevice}
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default AddDevices;
