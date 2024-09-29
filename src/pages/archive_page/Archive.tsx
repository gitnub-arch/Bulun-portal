import FlightsAside from "@/shared/global_aside/flights_aside/FlightsAside";
import RoadstatusAside from "@/shared/global_aside/roadStatus_asede/RoadStatusAside";
import WeatherAside from "@/shared/global_aside/weather_aside/WeatherAside";

import { ARCHIVE_ITEM } from "./const";

import mayak from "@/assets/images/mayak.jpg";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Archive = () => {
  return (
    <div className="max-w-[1250px] mx-auto mt-5">
      <h2 className="text-2xl font-medium mb-5 ml-7">Архив</h2>
      <div className="">
        <div className="flex flex-wrap relative mb-40">
          {ARCHIVE_ITEM.map((item) => (
            <div
              key={item.id}
              className="bg-[#fff] p-1 w-full max-h-[255px] max-w-[410px] mb-8 mx-5"
            >
              <img src={item.imgURL} alt={item.title} />
              <p className="text-center p-1 text-lg font-semibold">
                {item.text}
              </p>
            </div>
          ))}

          <Link
            to="/add-file"
            className="px-14 py-7 absolute left-[28%] top-[100%] md:top-[56%]"
          >
            <Button>ДОБАВИТЬ</Button>
          </Link>

          <div className="-mt-96 block hidden xl:block">
            <WeatherAside />
            <RoadstatusAside />
            <FlightsAside />
          </div>

          <div className="-mb-[120%] mt-24 mx-14 xl:-mt-[310px] xl:mx-5 relative">
            <img
              src={mayak}
              alt=""
              className="w-[328px] h-[295px] object-cover sm:w-auto sm:h-auto"
            />

            <p className="absolute top-6 left-14 text-lg font-[500]">
              Архив газеты
            </p>
            <p className="absolute top-12 left-14 text-6xl font-black">МАЯК</p>
            <div className="h-[2px] w-[185px] bg-gradient-to-r from-sky-500 to-blue-500 absolute top-28 left-[60px] z-10"></div>
            <p className="absolute top-28 left-14 text-4xl font-extrabold">
              АРКТИКИ
            </p>
            <p className="absolute top-40 left-14 text-[8px]">
              Информационная, <br /> общественно-политическая газета
            </p>
            <a
              href="/weather"
              className="absolute top-52 left-14 px-10 py-3 mb-7 border-[#1875F0] text-xs font-semibold text-[#1875F0] border"
            >
              ПРОГНОЗ ПОГОДЫ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
