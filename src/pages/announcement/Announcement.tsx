import FlightsAside from "@/shared/global_aside/flights_aside/FlightsAside";
import RoadstatusAside from "@/shared/global_aside/roadStatus_asede/RoadStatusAside";
import WeatherAside from "@/shared/global_aside/weather_aside/WeatherAside";

import { ANNOUNCEMENT_ITEMS } from "./const";

import PlayIcon from "@/assets/announcement/play.svg";

const Announcement = () => {
  return (
    <div className="bg-[#F4F4F4] max-w-[1250px] mx-auto mt-5 flex">
     <div>
      <h1 className="font-normal text-2xl pl-6">Видео</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5">
        {ANNOUNCEMENT_ITEMS.map((items) => (
          <div key={items.id} className="relative">
              <img src={items.imgURL} alt={items.title} className="rounded-lg" />
              <div className="absolute top-5 right-7 text-white text-sm font-normal rounded py-1 px-4 bg-[#0000004D]">
                <span>{items.duration}</span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl rounded-full p-2">
                <img className="max-w-12 max-h-16 rounded-full transform transition-transform duration-200 hover:scale-110 cursor-pointer" src={PlayIcon} alt="playIcon"/>
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-9 text-white text-xs font-medium text-center">{items.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="hidden xl:block -mt-20 ml-10">
        <WeatherAside />
        <RoadstatusAside />
        <FlightsAside />
      </div>
    </div>
  );
};

export default Announcement;
