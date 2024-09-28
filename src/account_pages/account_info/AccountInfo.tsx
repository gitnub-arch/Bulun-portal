import React from "react";
import { Separator } from "../../components/ui/separator";
import { PencilLine } from "lucide-react";

const AccountInfo = () => {
  return (
    <div className="container max-w-[1140px] mx-auto">
      <div className="bg-[#fff] py-5 px-9 mt-5 rounded-lg">
        <div className="flex mb-5 items-center justify-between">
          <h2 className="text-2xl font-semibold ">Мои данные</h2>
          <button className="px-10 py-3 border-[#1875F0] text-sm font-semibold text-[#1875F0] flex items-center gap-2">
            <PencilLine />
            Редактировать данные
          </button>
        </div>
        <Separator className="mb-6" />

        <div className="">
          <p className="font-medium text-lg mb-3">Учётная информация</p>

          <div className="flex gap-5 mb-5">
            <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 w-full whitespace-nowrap">
              <span className="text-gray-400 text-sm mr-3">ФИО</span>
              <Separator orientation="vertical" className="h-10 w-[2px]" />
              <span className="text-black font-medium text-lg ml-4">
                Смирнов Тимур Серафимович
              </span>
            </div>
            <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 w-full whitespace-nowrap">
              <span className="text-gray-400 text-sm mr-3">НОМЕР ТЕЛЕФОНА</span>
              <Separator orientation="vertical" className="h-10 w-[2px]" />
              <span className="text-black font-medium text-lg ml-4">
                8 909 478-96-58
              </span>
            </div>
            <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 w-full whitespace-nowrap">
              <span className="text-gray-400 text-sm mr-3">ДАТА РОЖДЕНИЯ</span>
              <Separator orientation="vertical" className="h-10 w-[2px]" />
              <span className="text-black font-medium text-lg ml-4">
                15.03.1990
              </span>
            </div>
          </div>

          <p className="font-medium text-lg mb-3 mt-10">Адрес абонента</p>

          <div className="flex gap-7 mb-7">
            <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 w-full whitespace-nowrap">
              <span className="text-gray-400 text-sm mr-3">
                НАСЕЛЕННЫЙ ПУНКТ
              </span>
              <Separator orientation="vertical" className="h-10 w-[2px]" />
              <span className="text-black font-medium text-lg ml-4">
                Владивосток
              </span>
            </div>
            <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 min-w-[215px] whitespace-nowrap">
              <span className="text-gray-400 text-sm mr-3">УЛИЦА</span>
              <Separator orientation="vertical" className="h-10 w-[2px]" />
              <span className="text-black font-medium text-lg ml-4">
                Ленина
              </span>
            </div>
            <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 min-w-[215px] whitespace-nowrap">
              <span className="text-gray-400 text-sm mr-3">ДОМ</span>
              <Separator orientation="vertical" className="h-10 w-[2px]" />
              <span className="text-black font-medium text-lg ml-4">15</span>
            </div>
            <div className="flex items-center bg-[#F7F7F7] rounded-lg px-5 py-1 min-w-[215px] whitespace-nowrap">
              <span className="text-gray-400 text-sm mr-3">КВАРТИРА</span>
              <Separator orientation="vertical" className="h-10 w-[2px]" />
              <span className="text-black font-medium text-lg ml-4">36</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
  