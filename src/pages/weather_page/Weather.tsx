import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const Weather = () => {
  return (
    <div className="max-w-[1250px] mx-auto mt-5">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="h-16 bg-none">
          <TabsTrigger value="first">
            <div className="flex items-center px-11 bg-[#fff]">
              <span className="text-[#1875F0] text-5xl font-semibold pr-2">
                2
              </span>
              <div className="text-left mt-1">
                <p className="text-sm font-semibold text-[#1e1e1e]">Июль</p>
                <p className="text-sm text-[#a1a1a1]">четверг</p>
              </div>
            </div>
          </TabsTrigger>
          <TabsTrigger value="second"><div className="flex items-center px-11 bg-[#fff]">
              <span className="text-[#1875F0] text-5xl font-semibold pr-2">
                3
              </span>
              <div className="text-left mt-1">
                <p className="text-sm font-semibold text-[#1e1e1e]">Июль</p>
                <p className="text-sm text-[#a1a1a1]">четверг</p>
              </div>
            </div></TabsTrigger>
          <TabsTrigger value="third"><div className="flex items-center px-11 bg-[#fff]">
              <span className="text-[#1875F0] text-5xl font-semibold pr-2">
                4
              </span>
              <div className="text-left mt-1">
                <p className="text-sm font-semibold text-[#1e1e1e]">Июль</p>
                <p className="text-sm text-[#a1a1a1]">четверг</p>
              </div>
            </div></TabsTrigger>
          <TabsTrigger value="fourth"><div className="flex items-center px-11 bg-[#fff]">
              <span className="text-[#1875F0] text-5xl font-semibold pr-2">
                5
              </span>
              <div className="text-left mt-1">
                <p className="text-sm font-semibold text-[#1e1e1e]">Июль</p>
                <p className="text-sm text-[#a1a1a1]">четверг</p>
              </div>
            </div></TabsTrigger>
          <TabsTrigger value="fifth"><div className="flex items-center px-11 bg-[#fff]">
              <span className="text-[#1875F0] text-5xl font-semibold pr-2">
                6
              </span>
              <div className="text-left mt-1">
                <p className="text-sm font-semibold text-[#1e1e1e]">Июль</p>
                <p className="text-sm text-[#a1a1a1]">четверг</p>
              </div>
            </div></TabsTrigger>
        </TabsList>
        <TabsContent value="first">
          <div>
            
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default Weather;
