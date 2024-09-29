import { useState } from "react";

import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AFISHA_ITEM, AFISHA_LIST, AFISHA_TIME } from "./const";

import WeatherAside from "@/shared/global_aside/weather_aside/WeatherAside";
import RoadstatusAside from "@/shared/global_aside/roadStatus_asede/RoadStatusAside";
import FlightsAside from "@/shared/global_aside/flights_aside/FlightsAside";

const Afisha = () => {
  const [activeTabs, setActiveTabs] = useState(
    AFISHA_ITEM.map((_, index) => ({
      day: AFISHA_LIST[0].day,
      time: AFISHA_TIME[0].time,
      index,
    }))
  );

  const handleTabChange = (
    value: string,
    type: "day" | "time",
    index: number
  ) => {
    setActiveTabs((prevActiveTabs) => {
      const newActiveTabs = [...prevActiveTabs];
      newActiveTabs[index] = { ...newActiveTabs[index], [type]: value };
      return newActiveTabs;
    });
  };

  return (
    <div className="container max-w-[1250px] mx-auto mt-5 overflow-hidden">
      <h2 className="font-normal text-2xl text-[#333333]">Киноафиша</h2>
      <div className="flex-wrap md:flex">
        <div className="max-w-[870px] min-h-[380px] rounded-[6px] mt-[60px]">
          {AFISHA_ITEM.map((afisha, index) => (
            <div className="pb-[120px]">
              <div className="md:flex pr-7 bg-[#fff] rounded-xl">
                <img
                  src={afisha.imgUrl}
                  alt=""
                  className="z-10 -mt-10 ml-6 rounded-[10px] w-[155px] h-[220px]"
                />
                <div className="ml-7 mt-4">
                  <h2 className="font-semibold text-xl">{afisha.title}</h2>
                  <p className="font-normal text-sm text-[#333333] opacity-50 mb-3">
                    {afisha.enName}
                  </p>
                  <span>{afisha.description}</span>
                  <span className="ml-1 text-[#1875F0] underline">
                    Показать полностью
                  </span>
                  <div className="flex mt-3 pb-4">
                    <p className="mr-10 text-[#333333] opacity-50 font-normal text-sm">
                      {afisha.duration}
                    </p>
                    <p className="text-[#333333] opacity-50 font-normal text-sm">
                      Жанр:{afisha.janr}
                    </p>
                  </div>
                </div>
              </div>
              <Separator className="bg-[#FFFFFF] mt-[26px] w-full" />
              <div
                className="flex w-[820px] h-[50px] justify-between ml-7 rounded-[3px] mt-4"
                style={{
                  backgroundColor:
                    activeTabs[index].day === afisha.day
                      ? "#1875F0"
                      : "#F2F2F2",
                }}
              >
                <Tabs value={activeTabs[index].day} key={index}>
                  <TabsList>
                    {AFISHA_LIST.map((list) => (
                      <TabsTrigger
                        key={list.index}
                        className={`
          ${
            list.day === activeTabs[index].day
              ? "!text-[#FFFFFF] bg-[#1875F0]"
              : ""
          }`}
                        value={list.day}
                        onClick={() => handleTabChange(list.day, "day", index)}
                      >
                        <div
                          className={`${
                            list.day === activeTabs[index].day
                              ? "bg-[#1875F0]"
                              : ""
                          } px-5 py-1 rounded-md`}
                        >
                          <div className="font-normal text-[10px]">
                            {list.day}
                          </div>
                          <div className="relative flex flex-col items-center">
                            {list.data}
                          </div>
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
              <Separator className="bg-[#FFFFFF] mt-4 w-full" />
              <div className="flex justify-between ml-7 mt-6 mx-1">
                <Tabs value={activeTabs[index].time}>
                  <TabsList className="gap-3">
                    {AFISHA_TIME.map((item) => (
                      <TabsTrigger
                        key={item.index}
                        className={`${
                          item.time === activeTabs[index].time
                            ? "!text-[#1875F0] border-[#1875F0] border-[3px] h-11"
                            : "border-[#F2F2F2]"
                        }`}
                        value={item.time}
                        onClick={() =>
                          handleTabChange(item.time, "time", index)
                        }
                      >
                        <div className="p-3 rounded-md w-16">
                          <div className="relative flex flex-col items-center">
                            {item.time}
                          </div>
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden xl:block -mt-28">
          <WeatherAside />
          <RoadstatusAside />
          <FlightsAside />
        </div>
      </div>
    </div>
  );
};

export default Afisha;
