import { Ellipsis } from "lucide-react";
import map from "@/assets/map.png";
import { Button } from "@/components/ui/button";

const RoadstatusAside = () => {
  return (
    <div className="bg-[#fff] max-w-[266px] m-5 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.3)]">
      <div className="flex gap-14 items-center justify-around">
        <h4 className="py-7 text-sm font-bold">Статус дорог</h4>
        <Ellipsis className="cursor-pointer" />
      </div>
      <div className="relative">
        <img src={map} alt="map" className="w-full" />
        <Button className="absolute bottom-8 right-20">подробнее</Button>
      </div>
    </div>
  );
};

export default RoadstatusAside;
