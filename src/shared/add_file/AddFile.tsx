import { SquarePlus, PictureInPicture2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import WeatherAside from "../global_aside/weather_aside/WeatherAside";
import RoadstatusAside from "../global_aside/roadStatus_asede/RoadStatusAside";
import FlightsAside from "../global_aside/flights_aside/FlightsAside";

const AddFile = () => {
  return (
    <div className="max-w-[1250px] mx-auto mt-5">
      <h2 className="text-2xl font-semibold mb-5 ml-7">Добавление файла</h2>
      <div className="flex">
        <div>
          <div className="border-2 border-dashed border-[#AFAFAF] bg-white/50 p-6 rounded-lg text-center max-w-[900px] mx-7">
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center mt-11 mb-3 space-y-2"
            >
              <SquarePlus className="text-center text-[#1875F0]" size={30} />
              <span className="text-[#333333] text-base fond-medium">
                Добавить фото или видео
              </span>
              <span className="text-[#333333] text-xs fond-medium pt-4">
                Формат файла:
              </span>
              <span className="text-[#a2a2a2] text-xs">AVI, MP4, JPG, PNG</span>
              <input id="file-upload" type="file" className="sr-only" />
            </label>
          </div>
          <div className="bg-[#fff] max-w-[900px] mt-5 mx-7 p-9">
            <form action="">
              <input
                placeholder="Название"
                type="text"
                className="border-2 border-[#EFEFEF] w-full py-3 pl-6"
              />
              <div className="flex flex-wrap mt-8">
                <input
                  placeholder="Дата"
                  type="date"
                  className="border-2 border-[#EFEFEF] w-full py-3 pl-6 mb-3"
                />
                <input
                  placeholder="Метки"
                  type="text"
                  className="border-2 border-[#EFEFEF] w-full py-3 pl-6 mb-3"
                />
                <div className="flex items-center border-2 border-[#1875F0] w-full">
                  <PictureInPicture2 className="ml-11 text-[#1875F0]" />
                  <input
                    placeholder="ОТМЕТИТЬ ЧЕЛОВЕКА"
                    type="text"
                    className="text-[10px] font-medium text-center text-[#1875F0] w-full py-4 pl-2 placeholder-[#1875F0] outline-none"
                  />
                </div>
              </div>
              <Textarea
                placeholder="Введите текст сообщения"
                className="mt-8 max-h-24"
              />
              <Select className="p-3">
                <SelectTrigger className="w-full mt-8 bg-[#EFEFEF]">
                  <SelectValue placeholder="Выберите куда будет направлен файл" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Фото</SelectItem>
                  <SelectItem value="dark">Видео</SelectItem>
                  <SelectItem value="system">Основные файлы</SelectItem>
                </SelectContent>
              </Select>
              <Button className="text-[10px] font-medium py-4 px-12 mt-8">
                ОТПРАВИТЬ
              </Button>
            </form>
          </div>
        </div>
        <div className="-mt-32 hidden xl:block">
          <WeatherAside />
          <RoadstatusAside />
          <FlightsAside />
        </div>
      </div>
    </div>
  );
};

export default AddFile;
