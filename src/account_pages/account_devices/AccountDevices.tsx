import React, { useState } from "react";
import { ChevronDown, PencilLine } from "lucide-react";
import network from "@/assets/network.svg";
import { Separator } from "../../components/ui/separator";
import { DEVICE_ITEM } from "./const";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "../../components/ui/pagination"; // Импортируй пагинацию из компонента
import { Link } from "react-router-dom";
import AddDevices from "@/shared/popups/add_devices/AddDevices"; // Импортируем компонент модального окна

const AccountDevices = () => {
  // Параметры пагинации
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // состояние для модального окна
  const [devices, setDevices] = useState(DEVICE_ITEM); // состояние для устройств
  const devicesPerPage = 10;

  // Рассчитываем индексы для текущей страницы
  const indexOfLastDevice = currentPage * devicesPerPage;
  const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
  const currentDevices = devices.slice(indexOfFirstDevice, indexOfLastDevice);

  // Обработчик для смены страницы
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Обработчик для открытия модального окна
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Обработчик для закрытия модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Обработчик для добавления нового устройства
  const handleAddDevice = (newDevice) => {
    setDevices([...devices, newDevice]); // Добавляем новое устройство в конец списка
    setIsModalOpen(false); // Закрываем модальное окно
  };

  return (
    <div className="container max-w-[1140px] mx-auto">
      <div className="w-full bg-[#fff] py-[50px] px-[35px] mt-5">
        <div className="flex items-center justify-between -mt-8">
          <p className="text-xl font-semibold">Подключенные устройства</p>
          <button
            className="px-4 py-2 md:px-10 md:py-3 border-[#1875F0] text-sm font-semibold text-[#1875F0]"
            onClick={handleOpenModal} // Открываем модальное окно
          >
            Добавить устройство
          </button>
        </div>
        <Separator className="my-5" />

        {/* Заголовки колонок */}
        <div className="hidden md:grid grid-cols-5 mt-11 gap-20 justify-between">
          <div className="flex items-center">
            <span>УСТРОЙСТВО</span>
            <ChevronDown />
          </div>
          <div className="flex items-center min-w-[170px] ml-4">
            <p>РАСХОД ТРАФИКА</p>
            <ChevronDown />
          </div>
          <div className="flex items-center ml-4">
            <p>ДОБАВЛЕН</p>
            <ChevronDown />
          </div>
          <div className="flex items-center ml-8">
            <span>IP АДРЕС</span>
            <ChevronDown />
          </div>
        </div>

        {/* Список устройств */}
        {currentDevices.map((device, index) => (
          <div
            className="flex flex-col md:grid md:grid-cols-5 items-start md:items-center mt-11"
            key={index}
          >
            <div className="flex items-center">
              <img
                src={device.imgURL}
                alt=""
                className="mr-3 bg-[#F6F6FA] w-10 h-10 rounded-full pt-2"
              />
              <p>{device.name}</p>
              <span className="ml-2 text-sm text-gray-500 block md:hidden">Устройство</span>
            </div>
            <div className="flex items-center ml-0 mt-4 md:ml-8 md:mt-0">
              <img src={network} alt="" />
              <p className="ml-2">{device.dataUsage}</p>
              <p className="ml-1">ГИГ</p>
              <span className="ml-2 text-sm text-gray-500 block md:hidden">Расход трафика</span>
            </div>
            <div className="ml-0 mt-4 md:ml-12 md:mt-0">
              <p>{device.add}</p>
              <span className="ml-2 text-sm text-gray-500 block md:hidden">Добавлен</span>
            </div>
            <div className="ml-0 mt-4 md:ml-20 md:mt-0">
              <p>{device.ipAddress}</p>
              <span className="ml-2 text-sm text-gray-500 block md:hidden">IP Адрес</span>
            </div>
            <Link to="/devices-reduct">
              <PencilLine className="mt-3 ml-auto md:ml-40 p-3 w-11 h-11 bg-[#1876f029] text-[#1875F0] cursor-pointer" />
            </Link>
          </div>
        ))}

        {/* Пагинация */}
      </div>
      <div className="md:ml-[875px]">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-[#fff] mt-5 ml-2"
              />
            </PaginationItem>
            {[...Array(Math.ceil(devices.length / devicesPerPage)).keys()].map(
              (pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(pageNumber + 1)}
                    active={currentPage === pageNumber + 1}
                    className="bg-[#fff] mt-5 ml-2"
                  >
                    {pageNumber + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={
                  currentPage === Math.ceil(devices.length / devicesPerPage)
                }
                className="bg-[#fff] mt-5 ml-2"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <AddDevices onClose={handleCloseModal} onAddDevice={handleAddDevice} />
      )}
    </div>
  );
};

export default AccountDevices;
