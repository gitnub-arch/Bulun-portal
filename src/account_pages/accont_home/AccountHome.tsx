import { useState } from "react";
import {
  RussianRuble,
  Globe,
  ArrowUp,
  ArrowDown,
  ChevronDown,
} from "lucide-react";
import network from "@/assets/network.svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DEVICE_ITEM } from "./const";
import { Link } from "react-router-dom";

const AccountHome = () => {
  const [activePeriod, setActivePeriod] = useState("day");
  const [trafficData, setTrafficData] = useState({
    day: {
      received: [36, 49, 48, 80, 18, 8, 125],
      sent: [49, 65, 90, 25, 99, 112, 25],
    },
    week: {
      received: [20, 30, 25, 40, 35, 50, 60],
      sent: [5, 10, 15, 20, 25, 30, 35],
    },
    month: {
      received: [50, 70, 60, 80, 90, 100, 110],
      sent: [15, 25, 35, 45, 55, 65, 75],
    },
  });

  const handlePeriodClick = (period) => {
    setActivePeriod(period);
  };

  return (
    <div className="container max-w-[1140px] mx-auto mt-5 flex flex-wrap gap-8 md:flex-nowrap">
      <aside className="py-[50px] px-[35px] max-w-[360px] bg-[#fff] ml-4 lg:ml-0">
        <div>
          <h2 className="text-[22px] font-semibold mb-5">Баланс аккаунта</h2>
          <div className="flex items-center mb-5">
            <RussianRuble className="bg-[rgba(196,196,196,0.33)] mr-4 text-[#76767A] rounded-full p-4 w-[50px] h-[50px]" />
            <div>
              <p className="text-sm text-[#A0A0A2]">Доступные средства:</p>
              <p className="text-[#222222] text-[26px]">24 852 ₽</p>
            </div>
          </div>
          <Button className="w-full">Пополнить счёт</Button>
          <Separator className="bg-[#DADADA] mt-7 mb-5 w-fulls" />
          <div className="flex items-center">
            <p className="text-[22px] font-semibold mr-12">Баланс аккаунта</p>
            <span className="text-xs mr-3 text-[#76767A] cursor-pointer">
              ГИГ
            </span>
            <span className="text-xs text-[#76767A] cursor-pointer">МБ</span>
          </div>
          <div className="relative w-[200px] h-[200px] mt-6 mx-auto">
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#F6F6FA]">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <div className="absolute w-[166px] h-[166px] rounded-full border-8 border-blue-500"></div>
                <div className="relative text-center bg-[#fff] rounded-full w-[125px] h-[125px]">
                  <div className="absolute w-[109px] h-[109px] rounded-full border-2 border-dashed top-[8px] left-[8px] py-5 px-3">
                    <span className="text-3xl font-semibold">8.27</span>
                    <br />
                    <span className="text-gray-400 text-sm">из 12 ГИГ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/account-addTarif"
            className="w-full block text-center py-3 mt-5 border-[#1875F0] text-sm font-medium text-[#1875F0] border"
          >
            Добавить трафик
          </Link>
          <Separator className="bg-[#DADADA] mt-7 mb-5 w-fulls" />
          <div>
            <p className="text-[22px] font-semibold mr-12">Тарифный план</p>
            <div className="bg-[#F6F6FA] flex items-center">
              <div className="w-[52px] h-[52px] bg-[#fff] m-3">
                <Globe className="mx-auto my-[15px] text-[#1875F0]" />
              </div>
              <div>
                <p className="">Тариф «Начало» 12 гиг</p>
                <p className="text-xs text-[#A0A0A2]">Описание тарифа</p>
              </div>
            </div>
          </div>
          <Link
            to="/account-tarifs"
            className="w-full block text-center py-3 mt-5 border-[#1875F0] text-sm font-medium text-[#1875F0] border"
          >
            Добавить трафик
          </Link>
        </div>
      </aside>

      <div>
        <div className=" bg-[#fff] py-[50px] px-[35px] ml-4 w-[350px] lg:w-full lg:ml-0">
          <p className="text-5 font-semibold">Статистика расхода трафика</p>
          <Separator className="my-5 max-w-[690px]" />
          <div className="flex gap-14 mb-5">
            <div className="">
              <div className="flex gap-[50px] lg:gap-[70px] mb-1 ">
                <span className="text-sm text-[#a0a0a2]">Всего</span>
                <span className="text-sm text-[#a0a0a2]">Принято</span>
                <span className="text-sm text-[#a0a0a2]">Передано</span>
              </div>
              <div className="flex gap-4 lg:gap-10">
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
            <div>
              <button
                className={`${
                  activePeriod === "day"
                    ? "shadow-[0px_3px_10px_rgba(0,0,0,0.3)] bg-[#fff] text-[#D86E28]"
                    : ""
                } text-sm py-2 px-6 mr-3 `}
                onClick={() => handlePeriodClick("day")}
              >
                День
              </button>
              <button
                className={`${
                  activePeriod === "week"
                    ? "shadow-[0px_3px_10px_rgba(0,0,0,0.3)] bg-[#fff] text-[#D86E28]"
                    : ""
                } text-sm py-2 px-6 mr-3`}
                onClick={() => handlePeriodClick("week")}
              >
                Неделя
              </button>
              <button
                className={`${
                  activePeriod === "month"
                    ? "shadow-[0px_3px_10px_rgba(0,0,0,0.3)] bg-[#fff] text-[#D86E28]"
                    : ""
                } text-sm py-2 px-6`}
                onClick={() => handlePeriodClick("month")}
              >
                Месяц
              </button>
            </div>
          </div>
          <div className="flex">
            <div>
              {["20", "15", "10", "5", "0"].map((value, index) => (
                <div className="flex items-center mb-7" key={index}>
                  <p className="text-[#a0a0a2]">{value}гиг</p>
                  <div className="w-full max-w-[637px] ml-16 mt-1 absolute border-[1px] border-dashed text-[#a0a0a2]"></div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 lg:gap-[60px] items-end w-full h-[250px] z-10">
              {trafficData[activePeriod].received.map((height, index) => (
                <div
                  className="flex flex-col items-center ml-3 lg:ml-6"
                  key={index}
                >
                  <div
                    className="bg-[#3CD0F0] w-[10px] rounded-full mb-1"
                    style={{ height: `${height}px` }}
                  ></div>
                  <div
                    className="bg-[#1875F0] w-[10px] rounded-full"
                    style={{
                      height: `${trafficData[activePeriod].sent[index]}px`,
                    }}
                  ></div>
                  <span className="text-gray-400 text-sm mt-2">
                    {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full bg-[#fff] py-[50px] px-[35px] mt-5">
          <div className="flex items-center justify-between -mt-8">
            <p className="text-[16px] lg:text-xl font-semibold">Подключенные устройства</p>
            <Link to="/account-devices">
              <button className="px-2 lg:px-10 py-3 border-[#1875F0] text-[12px] lg:text-sm font-semibold text-[#1875F0]">
              Показать все устройства
              </button>
            </Link>
          </div>
          <Separator className="my-5" />
          {/* Заголовки колонок */}
          <div className="grid grid-cols-4 mt-11 lg:justify-between">
            <div className="flex items-center text-[12px] lg:text-base">
              <span>УСТРОЙСТВО</span>
              <ChevronDown />
            </div>
            <div className="flex items-center ml-8 lg:ml-5 text-[12px] lg:text-base">
              <p>РАСХОДТРАФИКА</p>
              <ChevronDown />
            </div>
            <div className="flex items-center ml-24 lg:ml-8 text-[12px] lg:text-base text-nowrap">
              <span>IP АДРЕС</span>
              <ChevronDown />
            </div>
            <div className="flex items-center ml-7 hidden lg:flex">
              <span>СТАТУС</span>
              <ChevronDown />
            </div>
          </div>

          {/* Список устройств */}
          {DEVICE_ITEM.map((device, index) => (
            <div className="grid grid-cols-4 mt-11" key={index}>
              <div className="flex items-center">
                <img
                  src={device.imgURL}
                  alt=""
                  className="mr-3 bg-[#F6F6FA] w-10 h-10 rounded-full p-2"
                />
                <p className="text-[12px] lg:text-base text-nowrap">{device.name}</p>
              </div>
              <div className="flex items-center ml-10 lg:ml-4">
                <img src={network} alt="" />
                <p className="ml-2">{device.dataUsage}</p>
                <p className="ml-1">ГИГ</p>
              </div>
              <p className="mt-2 ml-20 lg:ml-8">{device.ipAddress}</p>
              <p className="text-[#32BC78] bg-[#E7F9F0] py-3 rounded-full text-center hidden lg:block">
                {device.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountHome;
