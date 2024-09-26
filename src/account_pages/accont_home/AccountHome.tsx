import React from "react";
import { RussianRuble, Globe } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

const AccountHome = () => {
  return (
    <div className="container max-w-[1250px] mx-auto mt-5 ">
      <aside className="py-[50px] px-[35px] max-w-[360px] bg-[#fff]">
        <div>
          <h2 className="text-[22px] font-semibold mb-5">Баланс аккаунта</h2>
          <div className="flex items-center mb-5">
            <RussianRuble className="bg-[rgba(196,196,196,0.33)] mr-4 text-[#76767A] rounded-full p-4 w-[50px] h-[50px]" />
            <div>
              <p className="text-sm text-[#A0A0A2]">Доступные средства:</p>
              <p className="text-[#222222] text-[26px]">24 852 ₽</p>
            </div>
          </div>
          <Button className="w-full">Пополнить счёт</Button>
          <Separator className="bg-[#DADADA] mt-7 mb-5 w-fulls" />
          <div className="flex items-center">
            <p className="text-[22px] font-semibold mr-12">Баланс аккаунта</p>
            <span className="text-xs mr-3 text-[#76767A] cursor-pointer">
              ГИГ
            </span>
            <span className="text-xs text-[#76767A] cursor-pointer">МБ</span>
          </div>
          <div class="relative w-[200px] h-[200px] mt-6 mx-auto">
            <div class="absolute inset-0 flex items-center justify-center rounded-full bg-[#F6F6FA]">
              <div class="relative w-36 h-36 flex items-center justify-center">
                <div class="absolute w-[166px] h-[166px] rounded-full border-8 border-blue-500"></div>
                <div class="relative text-center bg-[#fff] rounded-full w-[125px] h-[125px]">
                  <div class=" absolute w-[109px] h-[109px] rounded-full border-2 border-dashed top-[8px] left-[8px] py-5 px-3">
                    <span class="text-3xl font-semibold">8.27</span>
                    <br />
                    <span class="text-gray-400 text-sm">из 12 ГИГ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="w-full py-3 mt-5 border-[#1875F0] text-sm font-medium text-[#1875F0]">
            Добавить трафик
          </button>
          <Separator className="bg-[#DADADA] mt-7 mb-5 w-fulls" />
          <div>
            <p className="text-[22px] font-semibold mr-12">Тарифный план</p>
            <div className="bg-[#F6F6FA] flex items-center">
              <div className="w-[52px] h-[52px] bg-[#fff] m-3">
                <Globe className="mx-auto my-[15px] text-[#1875F0]" />
              </div>
              <div>
                <p className="">Тариф «Начало» 12 гиг</p>
                <p className="text-xs text-[#A0A0A2]">Описание тарифа</p>
              </div>
            </div>
          </div>
          <button className="w-full py-3 mt-7 border-[#1875F0] text-sm font-medium text-[#1875F0]">
            Сменить тариф
          </button>
        </div>
      </aside>
    </div>
  );
};

export default AccountHome;
