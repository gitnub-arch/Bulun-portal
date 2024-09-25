import FlightsAside from "../../shared/global_aside/flights_aside/FlightsAside";
import RoadstatusAside from "../../shared/global_aside/roadStatus_asede/RoadStatusAside";
import WeatherAside from "../../shared/global_aside/weather_aside/WeatherAside";
import { SEARCH_ITEM } from "./const";

const SearchResults = () => {
  return (
    <div className="flex container m-auto">
      <div>
        <div className="flex mb-5">
          <h2 className="text-2xl font-normal">Результат поиска:</h2>
          <h1 className="font-semibold text-2xl"> Мероприятие</h1>
        </div>
        <div className="flex-wrap grid grid-cols-3 gap-5">
          {SEARCH_ITEM.map((item) => (
            <div className="rounded-[6px] bg-[#FFFFFF] max-w-[263px] min-h-[317px]">
              <img src={item.imageUrl} alt="" className="mb-4" />
              <span className="text-[#B3B3B3] font-medium text-[10px] mb-3 ml-[22px]">
                {item.data}
              </span>
              <p className="text-[#676767] font-medium text-[14px] mb-6 ml-[22px]">
                {item.title}
              </p>
              <span className="ml-[38px] font-medium text-[12px]">
                ПОДРОБНЕЕ
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <WeatherAside />
        <RoadstatusAside />
        <FlightsAside />
      </div>
    </div>
  );
};

export default SearchResults;
