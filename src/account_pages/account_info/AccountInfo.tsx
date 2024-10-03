import { useState, useEffect } from "react";
import { Separator } from "../../components/ui/separator";
import { PencilLine } from "lucide-react";

const AccountInfo = () => {
  // Функция для загрузки данных из localStorage
  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : {
      lastName: "Введите",
      firstName: "Свое",
      patronymic: "ФИО",
      phoneNumber: "0 000 000-00-00",
      birthDate: "00.00.0000",
      city: "Город",
      street: "Улица",
      house: "№",
      apartment: "№",
    };
  };

  // Инициализируем состояние с данными из localStorage
  const [formData, setFormData] = useState(loadFromLocalStorage);
  const [isEditing, setIsEditing] = useState(false);

  // Функция для сохранения данных в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="container max-w-[1140px] mx-auto">
      <div className="bg-[#fff] py-5 px-9 mt-5 rounded-lg">
        <div className="flex mb-5 items-center justify-between">
          <h2 className="text-xl lg:text-2xl font-semibold">Мои данные</h2>
          <button
            onClick={handleEditClick}
            className="px-5 lg:px-10 py-3 border-[#1875F0] text-sm font-semibold text-[#1875F0] flex items-center gap-2"
          >
            <PencilLine />
            {isEditing ? "Отменить" : "Редактировать данные"}
          </button>
        </div>
        <Separator className="mb-6" />

        <div>
          <p className="font-medium text-lg mb-3">Учётная информация</p>

          <div className="flex gap-7 mb-5 flex-wrap md:flex-nowrap text-sm">
            {isEditing ? (
              <>
                <div className="relative">
                  <p className="absolute text-gray-400 left-5 top-1">Фамилия</p>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="flex-grow border min-w-[340px] bg-[#F3F3F4] rounded-md px-5 pt-6 pb-2"
                  />
                </div>

                <div className="relative">
                  <p className="absolute text-gray-400 left-5 top-1">Имя</p>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="flex-grow border min-w-[340px] bg-[#F3F3F4] rounded-md px-5 pt-6 pb-2"
                  />
                </div>

                <div className="relative">
                  <p className="absolute text-gray-400 left-5 top-1">
                    Отчество
                  </p>
                  <input
                    name="patronymic"
                    value={formData.patronymic}
                    onChange={handleChange}
                    className="flex-grow border min-w-[340px] bg-[#F3F3F4] rounded-md px-5 pt-6 pb-2"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 w-full whitespace-nowrap">
                  <span className="text-gray-400 text-sm mr-3">ФИО</span>
                  <Separator orientation="vertical" className="h-10 w-[2px]" />
                  <span className="text-black font-medium text-sm lg:text-lg ml-4">
                    {`${formData.lastName} ${formData.firstName} ${formData.patronymic}`}
                  </span>
                </div>
                <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 w-full whitespace-nowrap">
                  <span className="text-gray-400 text-sm mr-3">
                    НОМЕР ТЕЛЕФОНА
                  </span>
                  <Separator orientation="vertical" className="h-10 w-[2px]" />
                  <span className="text-black font-medium text-sm lg:text-lg ml-4">
                    {formData.phoneNumber}
                  </span>
                </div>
                <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 w-full whitespace-nowrap">
                  <span className="text-gray-400 text-sm mr-3">
                    ДАТА РОЖДЕНИЯ
                  </span>
                  <Separator orientation="vertical" className="h-10 w-[2px]" />
                  <span className="text-black font-medium text-sm lg:text-lg ml-4">
                    {formData.birthDate}
                  </span>
                </div>
              </>
            )}
          </div>

          <p className="font-medium text-lg mb-3 mt-10">Адрес абонента</p>

          <div className="flex gap-7 mb-7 flex-wrap md:flex-nowrap">
            {isEditing ? (
              <>
                <div className="relative">
                  <p className="absolute text-gray-400 left-5 top-1">
                    Населенный пункт
                  </p>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Населенный пункт"
                    className="flex-grow border bg-[#F3F3F4] rounded-md px-5 pt-6 pb-2"
                  />
                </div>

                <div className="relative">
                  <p className="absolute text-gray-400 left-5 top-1">Улица</p>
                  <input
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Улица"
                    className="flex-grow border bg-[#F3F3F4] rounded-md px-5 pt-6 pb-2"
                  />
                </div>

                <div className="relative">
                  <p className="absolute text-gray-400 left-5 top-1">Дом</p>
                  <input
                    name="house"
                    value={formData.house}
                    onChange={handleChange}
                    placeholder="Дом"
                    className="flex-grow border max-w-[225px] bg-[#F3F3F4] rounded-md px-5 pt-6 pb-2"
                  />
                </div>

                <div className="relative">
                  <p className="absolute text-gray-400 left-5 top-1">
                    Квартира
                  </p>
                  <input
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    placeholder="Квартира"
                    className="flex-grow border bg-[#F3F3F4] rounded-md px-5 pt-6 pb-2"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 w-full whitespace-nowrap">
                  <span className="text-gray-400 text-sm mr-3">
                    Населенный пункт
                  </span>
                  <Separator orientation="vertical" className="h-10 w-[2px]" />
                  <span className="text-black font-medium text-sm lg:text-lg ml-4">
                    {formData.city}
                  </span>
                </div>
                <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 min-w-[215px] whitespace-nowrap">
                  <span className="text-gray-400 text-sm mr-3">Улица</span>
                  <Separator orientation="vertical" className="h-10 w-[2px]" />
                  <span className="text-black font-medium text-sm lg:text-lg ml-4">
                    {formData.street}
                  </span>
                </div>
                <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 min-w-[215px] whitespace-nowrap">
                  <span className="text-gray-400 text-sm mr-3">Дом</span>
                  <Separator orientation="vertical" className="h-10 w-[2px]" />
                  <span className="text-black font-medium text-sm lg:text-lg ml-4">
                    {formData.house}
                  </span>
                </div>
                <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 min-w-[215px] whitespace-nowrap">
                  <span className="text-gray-400 text-sm mr-3">Квартира</span>
                  <Separator orientation="vertical" className="h-10 w-[2px]" />
                  <span className="text-black font-medium text-sm lg:text-lg ml-4">
                    {formData.apartment}
                  </span>
                </div>
              </>
            )}
          </div>

          {isEditing && (
            <div className="flex justify-end mt-14">
              <button
                onClick={handleSave}
                className="bg-[#1875F0] text-white py-2 px-4 rounded mb-4"
              >
                Подтвердить изменения
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
