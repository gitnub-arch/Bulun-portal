import React from "react";
import { Trash, PencilLine, ArrowDown, ArrowUp } from "lucide-react";
import { Separator } from "../../components/ui/separator";

const DevicesReduct = () => {
  return (
    <div className="container max-w-[1140px] mx-auto mt-7 rounded-lg shadow-sm">
      <div className="flex justify-between gap-7">
        {/* Блок устройства */}
        <div className="flex flex-col items-center bg-white px-12 py-5 rounded-md shadow-md">
          <div className="w-16 h-16 bg-[#F3F4F6] rounded-full mb-3"></div>
          <p className="text-lg font-semibold">Iphone 8</p>
        </div>

        {/* Информация об устройстве */}
        <div className="flex-1 bg-white p-4 rounded-md shadow-md py-5 px-8 ">
          <h3 className="text-xl font-semibold mb-3">
            Информация об устройстве
          </h3>
          <Separator />
          <div className="flex mt-5 gap-12">
            <div>
              <p className="text-sm text-[#999999]">Добавлен</p>
              <p className="">28.08.2020</p>
            </div>
            <div>
              <p className="text-sm text-[#999999]">IP адрес</p>
              <p className="">192.105.48.98</p>
            </div>
          </div>
        </div>

        {/* Расход трафика */}
        <div className="bg-white p-4 rounded-md shadow-md py-5 px-8 ">
          <h3 className="text-xl font-semibold mb-3">Расход трафика</h3>
          <Separator />
          <div>
            <div className="flex gap-24 mt-5 mb-1">
              <span className="text-sm text-[#a0a0a2]">Всего</span>
              <span className="text-sm text-[#a0a0a2]">Принято</span>
              <span className="text-sm text-[#a0a0a2]">Передано</span>
            </div>
            <div className="flex gap-16">
              <div className="flex items-center">
                <p className="flex text-xl font-medium">8.27 </p>
                <p className="text-[#a0a0a2] text-[12px] mt-1 ml-1">ГИГ</p>
              </div>
              <div className="flex items-center">
                <ArrowDown className="text-[#1875F0] mr-1" />
                <p className="flex text-xl font-medium">1.32</p>
                <span className="text-[#a0a0a2] text-[12px] mt-1 ml-1">
                  ГИГ
                </span>
              </div>
              <div className="flex items-center">
                <ArrowUp className="text-[#3CD0F0] mr-1" />
                <p className="flex text-xl font-medium">0.74</p>
                <span className="text-[#a0a0a2] text-[12px] mt-1 ml-1">
                  ГИГ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="mt-5" />

      <div className="flex justify-between mt-5">
        <button className="flex px-8 py-4 items-center text-[#7B7B80] bg-[#E4E4E4] text-sm font-semibold">
          <Trash className="mr-2 " />
          Удалить устройство
        </button>
        <button className="flex items-center text-[#1875F0] text-sm font-semibold border border-[#1875F0] rounded-md px-4 py-2">
          <PencilLine className="mr-2" />
          Редактировать данные
        </button>
      </div>
    </div>
  );
};

export default DevicesReduct;
