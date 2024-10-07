import { useState } from "react";
import { ArrowDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { NEWSPAPER_ITEM } from "./const";

import FlightsAside from "@/shared/global_aside/flights_aside/FlightsAside";
import RoadstatusAside from "@/shared/global_aside/roadStatus_asede/RoadStatusAside";
import WeatherAside from "@/shared/global_aside/weather_aside/WeatherAside";

// Функция для преобразования даты
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day);
};

const News = () => {
  const [sortOption, setSortOption] = useState("new");

 
  const handleSortChange = (value) => {
    setSortOption(value);
  };

  
  const sortedNewspapers = [...NEWSPAPER_ITEM].sort((a, b) => {
    if (sortOption === "new") {
      return parseDate(b.data) - parseDate(a.data); 
    }
    if (sortOption === "old") {
      return parseDate(a.data) - parseDate(b.data); 
    }
    if (sortOption === "alphabetical") {
      return a.title.localeCompare(b.title); 
    }
    if (sortOption === "numberical") {
      return b.numbering - a.numbering; 
    }
    return 0;
  });

  return (
    <div className="bg-[#F4F4F4] max-w-[1250px] mx-auto mt-5 flex px-4 lg:px-6">
      <div className="container m-auto w-full lg:w-[877px]">
        <div className="justify-between md:flex">
          <h2 className="font-normal text-xl lg:text-2xl pt-1">
            Газета «Маяк Арктики»
          </h2>
          <div className="flex mt-4 lg:mt-0">
            <h4 className="mt-[7px] mr-2">Фильтр: </h4>
            <Select onValueChange={handleSortChange}>
              <SelectTrigger className="w-[140px] lg:w-[160px]">
                <SelectValue placeholder="Сначала новые" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">Сначала новые</SelectItem>
                <SelectItem value="old">Сначала старые</SelectItem>
                <SelectItem value="alphabetical">По алфавиту</SelectItem>
                <SelectItem value="numberical">По номеру</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between gap-5 lg:gap-7 mb-6 mt-[20px]">
          {sortedNewspapers.map((newspaper) => (
            <div
              key={newspaper.id}
              className="flex p-2 rounded-[6px] bg-[#ffffff] min-w-[280px] lg:min-w-[410px]"
            >
              <div className="bg-[#E7E7E7] w-[60px] h-[52px] lg:w-[70px] lg:h-[62px] rounded-md mr-4" />
              <div className="mt-1 lg:mt-2">
                <h5 className="font-medium text-[#333333] text-sm lg:text-base">
                  {newspaper.title} №{newspaper.numbering}
                </h5>
                <span className="mr-6 font-normal text-xs lg:text-sm text-[#A2A2A2]">
                  {newspaper.data}
                </span>
                <span className="font-base text-xs">Теги:</span>
                <span className="font-normal text-xs text-[#A2A2A2]">
                  {newspaper.tegs}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center cursor-pointer">
          <h3 className="mb-16 text-[#A2A2A2] font-normal text-xs lg:text-sm hover:text-[#1875F0]">
            ПОКАЗАТЬ ЕЩЕ
          </h3>
          <ArrowDown className="text-[#A2A2A2] w-4 h-4 ml-1 hover:text-[#1875F0]" />
        </div>
      </div>
      <div className="hidden xl:block -mt-20">
        <WeatherAside />
        <RoadstatusAside />
        <FlightsAside />
      </div>
    </div>
  );
};

export default News;