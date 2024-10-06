import { Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";

const TaxiScheduleAside = () => {
  return (
    <div className="bg-[#fff] text-center max-w-[266px] m-5 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-around">
        <h4 className="py-7 text-sm font-bold">Расписание такси</h4>
        <Ellipsis className="cursor-pointer" />
      </div>
      <div className="h-[2px] bg-[#F7F7F7] w-full"></div>
      <div className="text-center p-7 ">
        <div className="bg-[#C4C4C4]">
          <p className="text-sm pt-3">Текущая остановка:</p>
          <h3 className="text-xl font-semibold pt-[-10px]">АЭРОПОРТ</h3>
          <p className="text-xl font-semibold text-[#1875F0] pb-3">12:00</p>
        </div>
      </div>
      <Link to="/transport">
        <button className="px-10 py-3 mb-7 border-[#1875F0] text-sm font-semibold text-[#1875F0]">
          ПОДРОБНЕЕ
        </button>
      </Link>
    </div>
  );
};

export default TaxiScheduleAside;
