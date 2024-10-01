import { Ellipsis, CloudRain } from "lucide-react";
import { Link } from "react-router-dom";

const WeatherAside = () => {
  return (
    <div className="bg-[#fff] max-w-[266px] text-center m-5 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.3)]">
      <div className="flex gap-14 items-center justify-around ">
        <h4 className="py-7 text-sm font-bold">Погода</h4>
        <Ellipsis className="cursor-pointer" />
      </div>
      <div className="h-[2px] bg-[#F7F7F7] w-full"></div>
      <div className="text-center p-8">
        <div className="flex items-center justify-center">
          <CloudRain className="text-[#1875F0] w-[43px] h-[37px]" />
          <h3 className="text-xl font-semibold">+8°c</h3>
        </div>
        <span className="text-sm font-semibold">Небольшой дождь</span>
        <p className="text-xs font-regular">
          Ветер северо-западный <b>2 м/с,</b> с порывами <b>до 10 м/c</b>
        </p>
      </div>
      <Link to="/weather">
        <button className="px-10 py-3 mb-7 border-[#1875F0] text-sm font-semibold text-[#1875F0]">
          ПРОГНОЗ ПОГОДЫ
        </button>
      </Link>
      <div className="h-[2px] bg-[#F7F7F7] w-full"></div>
      <div className="text-center py-5">
        <p className="text-[#D86E28] text-sm font-semibold">отмена занятий</p>
        <p className="text-sm font-semibold">1-4 классы</p>
      </div>
    </div>
  );
};

export default WeatherAside;
