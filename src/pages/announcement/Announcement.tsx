import FlightsAside from "../../shared/global_aside/flights_aside/FlightsAside";
import RoadstatusAside from "../../shared/global_aside/roadStatus_asede/RoadStatusAside";
import WeatherAside from "../../shared/global_aside/weather_aside/WeatherAside";
import { ANNOUNCEMENT_ITEMS } from "./const";
import PlayIcon from "@/assets/announcement/play.svg";

const Announcement = () => {
  return (
    <div className="bg-[#F4F4F4] max-w-[1250px] mx-auto mt-5 flex">
     <div>
      <h1 className="font-normal text-2xl pl-3 pb-4">Видео</h1>
      <div className="grid grid-cols-3">
        {ANNOUNCEMENT_ITEMS.map((items) => (
          <div key={items.id} className="relative pb-10">
            <div>
              <img src={items.imgURL} alt={items.title} />
              <div className="absolute text-white top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
                <img className="pb-10" src={PlayIcon} alt="playIcon" />
              </div>
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
