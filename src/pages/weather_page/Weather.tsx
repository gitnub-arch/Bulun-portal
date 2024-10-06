import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FlightsAside from "@/shared/global_aside/flights_aside/FlightsAside";
import RoadstatusAside from "@/shared/global_aside/roadStatus_asede/RoadStatusAside";
import {
  WEATHER_ITEM_FIRST,
  WEATHER_ITEM_SECOND,
  WEATHER_ITEM_THIRD,
  WEATHER_ITEM_FOURTH,
  WEATHER_ITEM_FIFTH,
} from "./const";

const Weather = () => {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <>
      <div className="max-w-[1250px] mx-auto mt-5 hidden md:flex">
        <div>
          <h2 className="text-2xl my-5 ">Прогноз погоды</h2>
          <Tabs
            defaultValue="first"
            className="w-[930px]"
            onValueChange={setActiveTab}
          >
            <TabsList className="h-16 bg-none border-none">
              {["first", "second", "third", "fourth", "fifth"].map(
                (value, index) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className={`items-center px-11 -mb-4 border-none ${
                      activeTab === value
                        ? "bg-[#fff] text-[#1875F0] shadow-[0px_3px_10px_rgba(0,0,0,0.1)]"
                        : "bg-[#F4F4F4] text-gray-500"
                    }`}
                  >
                    <span
                      className={`text-5xl font-mediium pr-2 ${
                        activeTab === value
                          ? "text-[#1875F0]"
                          : "text-[#A2A2A2]"
                      }`}
                    >
                      {index + 2}
                    </span>
                    <div className="text-left mt-1">
                      <p
                        className={`text-sm font-semibold ${
                          activeTab === value
                            ? "text-[#1e1e1e]"
                            : "text-gray-500"
                        }`}
                      >
                        Июль
                      </p>
                      <p
                        className={`text-sm ${
                          activeTab === value
                            ? "text-[#a1a1a1]"
                            : "text-gray-500"
                        }`}
                      >
                        четверг
                      </p>
                    </div>
                  </TabsTrigger>
                )
              )}
            </TabsList>

            <TabsContent
              className="w-[900px] shadow-[0px_3px_10px_rgba(0,0,0,0.1)]"
              value="first"
            >
              {WEATHER_ITEM_FIRST.map((item) => (
                <WeatherDetail item={item} key={item.time} />
              ))}
            </TabsContent>

            <TabsContent
              className="w-[900px] shadow-[0px_3px_10px_rgba(0,0,0,0.1)]"
              value="second"
            >
              {WEATHER_ITEM_SECOND.map((item) => (
                <WeatherDetail item={item} key={item.time} />
              ))}
            </TabsContent>

            <TabsContent
              className="w-[900px] shadow-[0px_3px_10px_rgba(0,0,0,0.1)]"
              value="third"
            >
              {WEATHER_ITEM_THIRD.map((item) => (
                <WeatherDetail item={item} key={item.time} />
              ))}
            </TabsContent>

            <TabsContent
              className="w-[900px] shadow-[0px_3px_10px_rgba(0,0,0,0.1)]"
              value="fourth"
            >
              {WEATHER_ITEM_FOURTH.map((item) => (
                <WeatherDetail item={item} key={item.time} />
              ))}
            </TabsContent>

            <TabsContent
              className="w-[900px] shadow-[0px_3px_10px_rgba(0,0,0,0.1)]"
              value="fifth"
            >
              {WEATHER_ITEM_FIFTH.map((item) => (
                <WeatherDetail item={item} key={item.time} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
        <div className="-mt-20 hidden xl:block">
          <RoadstatusAside />
          <FlightsAside />
        </div>
      </div>
      <div className="md:hidden">
        <h3 className="text-2xl my-5 mb-4 ml-9">Прогноз погоды</h3>
        <div className="mt-[20px] pb-8">
          <div className="flex justify-center pt-3">
            <p className="text-lg font-normal mr-1">Четверг,</p>
            <span className="text-lg font-medium text-[#1875F0]">2</span>
            <p className="text-lg text-[#1E1E1E] font-medium ml-1">июля</p>
          </div>
          {WEATHER_ITEM_FIRST.map((item) => (
            <WeatherDetailAdaptive item={item} key={item.time} />
          ))}
          <div className="flex gap-7 justify-center mt-7">
            <div>
              <p className="text-xs text-[#a2a2a2]">Давление, мм рт.</p>
              <p className="text-base">760</p>
            </div>
            <div>
              <p className="text-xs text-[#a2a2a2]">Влажность</p>
              <p className="text-base">53%</p>
            </div>
            <div>
              <p className="text-[12px] text-[#a2a2a2]">Скорость ветра</p>
              <p className="text-base">13-15 м/с</p>
            </div>
          </div>
        </div>
        <div className="mt-[20px] pb-8">
          <div className="flex justify-center pt-3">
            <p className="text-lg font-normal mr-1">Пятница,</p>
            <span className="text-lg text-[#1E1E1E] font-medium">3</span>
            <p className="text-lg text-[#1E1E1E] font-medium ml-1">июля</p>
          </div>
          {WEATHER_ITEM_SECOND.map((item) => (
            <WeatherDetailAdaptive item={item} key={item.time} />
          ))}
          <div className="flex gap-7 justify-center mt-7">
            <div>
              <p className="text-xs text-[#a2a2a2]">Давление, мм рт.</p>
              <p className="text-base">760</p>
            </div>
            <div>
              <p className="text-xs text-[#a2a2a2]">Влажность</p>
              <p className="text-base">53%</p>
            </div>
            <div>
              <p className="text-[12px] text-[#a2a2a2]">Скорость ветра</p>
              <p className="text-base">13-15 м/с</p>
            </div>
          </div>
        </div>
        <div className="mt-[20px] pb-8">
          <div className="flex justify-center pt-3">
            <p className="text-lg font-normal mr-1">Суббота,</p>
            <span className="text-lg text-[#1E1E1E] font-medium">4</span>
            <p className="text-lg text-[#1E1E1E] font-medium ml-1">июля</p>
          </div>
          {WEATHER_ITEM_THIRD.map((item) => (
            <WeatherDetailAdaptive item={item} key={item.time} />
          ))}
          <div className="flex gap-7 justify-center mt-7">
            <div>
              <p className="text-xs text-[#a2a2a2]">Давление, мм рт.</p>
              <p className="text-base">760</p>
            </div>
            <div>
              <p className="text-xs text-[#a2a2a2]">Влажность</p>
              <p className="text-base">53%</p>
            </div>
            <div>
              <p className="text-[12px] text-[#a2a2a2]">Скорость ветра</p>
              <p className="text-base">13-15 м/с</p>
            </div>
          </div>
        </div>
        <div className="mt-[20px] pb-8">
          <div className="flex justify-center pt-3">
            <p className="text-lg font-normal mr-1">Воскресенье,</p>
            <span className="text-lg text-[#1E1E1E] font-medium">5</span>
            <p className="text-lg text-[#1E1E1E] font-medium ml-1">июля</p>
          </div>
          {WEATHER_ITEM_FOURTH.map((item) => (
            <WeatherDetailAdaptive item={item} key={item.time} />
          ))}
          <div className="flex gap-7 justify-center mt-7">
            <div>
              <p className="text-xs text-[#a2a2a2]">Давление, мм рт.</p>
              <p className="text-base">760</p>
            </div>
            <div>
              <p className="text-xs text-[#a2a2a2]">Влажность</p>
              <p className="text-base">53%</p>
            </div>
            <div>
              <p className="text-[12px] text-[#a2a2a2]">Скорость ветра</p>
              <p className="text-base">13-15 м/с</p>
            </div>
          </div>
        </div>
        <div className="mt-[20px] pb-8">
          <div className="flex justify-center">
            <p className="text-lg font-normal mr-1">Понедельник,</p>
            <span className="text-lg text-[#1E1E1E] font-medium">6</span>
            <p className="text-lg text-[#1E1E1E] font-medium ml-1">июля</p>
          </div>
          {WEATHER_ITEM_FIFTH.map((item) => (
            <WeatherDetailAdaptive item={item} key={item.time} />
          ))}
          <div className="flex gap-7 justify-center mt-7">
            <div>
              <p className="text-xs text-[#a2a2a2]">Давление, мм рт.</p>
              <p className="text-base">760</p>
            </div>
            <div>
              <p className="text-xs text-[#a2a2a2]">Влажность</p>
              <p className="text-base">53%</p>
            </div>
            <div>
              <p className="text-[12px] text-[#a2a2a2]">Скорость ветра</p>
              <p className="text-base">13-15 м/с</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const WeatherDetail = ({ item }) => (
  <div className="flex items-center gap-20 bg-[#fff] px-16 py-4">
    <div>
      <p className="text-xs text-[#a2a2a2]">{item.time}</p>
      <p className="text-xl font-medium">{item.degrees}°</p>
    </div>
    <div className="flex items-center">
      <img src={item.imgURL} alt={item.weather} />
      <p className="text-base ml-3">{item.weather}</p>
    </div>
    <div>
      <p className="text-xs text-[#a2a2a2]">Давление, мм рт.</p>
      <p className="text-base">{item.pressure}</p>
    </div>
    <div>
      <p className="text-xs text-[#a2a2a2]">Влажность</p>
      <p className="text-base">{item.humidity}%</p>
    </div>
  </div>
);

const WeatherDetailAdaptive = ({ item }) => (
  <div>
    <div className="flex items-center justify-between gap-20 bg-[#fff] px-16 py-4">
      <div className="flex items-center">
        <img src={item.imgURL} alt={item.weather} />
        <p className="text-xl font-medium ml-2">{item.degrees}°,</p>
        <div className="flex items-center text-center">
          <p className="text-xl font-normal  ml-1 text-center">
            {item.weather}
          </p>
        </div>
      </div>
      <div>
        <p className="text-base font-normal text-[#a2a2a2]">{item.time}</p>
      </div>
    </div>
  </div>
);

export default Weather;
