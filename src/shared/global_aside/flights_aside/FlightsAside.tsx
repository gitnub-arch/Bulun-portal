import { Ellipsis, Plane } from "lucide-react";
const FlightsAside = () => {
  return (
    <div className="bg-[#fff] max-w-[266px] m-5 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.3)]">
      <div className="flex gap-14 items-center justify-around">
        <h4 className="py-7 text-sm font-bold">Статус дорог</h4>
        <Ellipsis className="cursor-pointer" />
      </div>
      <div className="h-[2px] bg-[#F7F7F7] w-full"></div>
      <div className="flex justify-between items-center p-7">
        <div>
          <span className="text-sm font-semibold">Якутск</span>
          <p className="text-[10px]">Сегодня, 11:20</p>
        </div>
        <Plane className="w-[20px] h-[18px] text-[#8bb56d]" />
        <div className="text-right">
          <span className="text-sm font-semibold">Тикси</span>
          <p className="text-[10px]">Сегодня, 13:20</p>
        </div>
      </div>
      <div className="h-[2px] bg-[#F7F7F7] w-full"></div>

      <div className="flex justify-between items-center p-7">
        <div>
          <span className="text-sm font-semibold">Якутск</span>
          <p className="text-[10px]">Сегодня, 11:20</p>
        </div>
        <Plane className="w-[20px] h-[18px]" />
        <div className="text-right">
          <span className="text-sm font-semibold">Тикси</span>
          <p className="text-[10px]">Сегодня, 13:20</p>
        </div>
      </div>
      <div className="h-[2px] bg-[#F7F7F7] w-full"></div>
      <p className="text-center py-5 font-semibold text-sm underline text-[#1875F0]">
        полное расписание
      </p>
    </div>
  );
};

export default FlightsAside;
