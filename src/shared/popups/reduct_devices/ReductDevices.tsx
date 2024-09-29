import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Trash, PencilLine } from "lucide-react";
import { Separator } from "../../components/ui/separator";

const ReductDevices = () => {
  const location = useLocation();
  const device = location.state?.device;

  // Состояние для управления видимостью попапа
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Проверяем, есть ли данные устройства
  if (!device) {
    return <p>Устройство не найдено.</p>;
  }

  // Функция для открытия попапа
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Функция для закрытия попапа
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container max-w-[900px] mx-auto mt-5 bg-[#F9F9F9] p-6 rounded-lg shadow-sm">
      <div className="flex justify-between gap-5">
        {/* Блок устройства */}
        <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-md">
          <div className="w-16 h-16 bg-[#F3F4F6] rounded-full mb-3"></div>
          <p className="text-lg font-semibold">{device.name}</p>
        </div>

        {/* Информация об устройстве */}
        <div className="flex-1 bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-3">
            Информация об устройстве
          </h3>
          <Separator />
          <div className="flex mt-5">
            <div>
              <p className="text-sm text-[#999999]">Добавлен</p>
              <p>{device.add}</p>
            </div>
            <div>
              <p className="text-sm text-[#999999]">IP адрес</p>
              <p>{device.ipAddress}</p>
            </div>
          </div>
        </div>

        {/* Расход трафика */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-3">Расход трафика</h3>
          <Separator />
          <div>
            <div className="flex gap-[70px] mt-5 mb-1">
              <span className="text-sm text-[#a0a0a2]">Всего</span>
              <span className="text-sm text-[#a0a0a2]">Принято</span>
              <span className="text-sm text-[#a0a0a2]">Передано</span>
            </div>
            <div className="flex gap-10">
              <div className="flex items-center">
                <p className="flex text-xl font-medium">{device.dataUsage} </p>
                <p className="text-[#a0a0a2] text-[12px] mt-1 ml-1">ГИГ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-5" />

      {/* Нижние кнопки */}
      <div className="flex justify-between mt-5">
        <button className="flex items-center text-[#7B7B80] bg-[#E4E4E4] text-sm font-semibold py-4 px-8">
          <Trash className="mr-2" />
          Удалить устройство
        </button>
        <button
          className="flex items-center text-[#1875F0] text-sm font-semibold border border-[#1875F0] rounded-md px-4 py-2"
          onClick={openModal} // Открываем модал при клике
        >
          <PencilLine className="mr-2" />
          Редактировать данные
        </button>
      </div>

      {/* Попап для редактирования */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-md shadow-md max-w-[400px] w-full">
            <h3 className="text-xl font-semibold mb-3">
              Редактировать устройство
            </h3>
            {/* Здесь можно добавить поля для редактирования устройства */}
            <form>
              <div className="mb-3">
                <label className="block text-sm mb-1">Имя устройства</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  defaultValue={device.name}
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm mb-1">IP адрес</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  defaultValue={device.ipAddress}
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="text-sm text-red-500"
                  onClick={closeModal} // Закрываем модал
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-1 rounded-md"
                  onClick={closeModal} // Здесь можно добавить логику сохранения
                >
                  Сохранить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReductDevices;
