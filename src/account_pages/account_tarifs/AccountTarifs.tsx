import { useState } from "react";

import { RussianRuble } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

import Decoration from "@/shared/popups/decoration/Decoration";

import { TARIFS_ITEM } from "./const";

const AccountTarifs = () => {
  const [selectedTarif, setSelectedTarif] = useState<string>("tarif-1");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="container max-w-[1140px] mx-auto px-4 md:px-0">
      {isSubmitted ? (
        <Decoration />
      ) : (
        <>
          <div className="bg-[#fff] py-5 px-4 md:px-9 mt-5 max-w-[845px] rounded-lg">
            <h2 className="text-2xl font-semibold mb-5">
              Текущий тарифный план
            </h2>
            <Separator className="mb-6" />
            <div className="flex flex-col md:flex-row mb-5">
              <div className="flex-1">
                <p className="font-medium text-lg mb-3">Тариф «Начало»</p>
                <p className="max-w-[360px] text-[#676767] leading-4 mb-9">
                  Значимость этих проблем настолько свойств очевидна, что
                  сложившаяся структура ранга, имеет важнешее составляющее
                </p>
              </div>
              <div className="flex items-center bg-[#fff] shadow-[0px_3px_10px_rgba(0,0,0,0.3)] rounded-lg py-5 px-7 md:ml-9">
                <div className="flex items-center ">
                  <span className="text-[56px] text-[#1875F0] font-semibold">
                    12
                  </span>
                  <div className="text-[#676767] text-sm ml-3 mt-1">
                    <span>Гбайт</span>
                    <Separator />
                    <span>Месяц</span>
                  </div>
                </div>
                <div className="flex items-center ml-14 bg-[#F7F7F7] px-7 py-4 rounded-lg shadow-[0px_3px_10px_rgba(0,0,0,0.3)]">
                  <span className="text-[#222222] text-[34px]">540</span>
                  <RussianRuble className="text-[#76767A] h-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fff] py-5 px-4 md:px-9 mt-5 max-w-[845px] rounded-lg">
            <h2 className="text-2xl font-semibold mb-5">
              Выберите новый тарифный план
            </h2>
            <Separator className="mb-6" />
            <RadioGroup
              value={selectedTarif}
              onValueChange={(value) => setSelectedTarif(value)}
            >
              {TARIFS_ITEM.map((item, index) => {
                const currentTarif = `tarif-${index}`;
                const isSelected = selectedTarif === currentTarif;

                return (
                  <div
                    key={item.id}
                    className={`flex flex-col md:flex-row mb-5 border p-6 ${
                      isSelected ? "border-[#1875F0]" : "border-gray-300"
                    }`}
                  >
                    <RadioGroupItem
                      value={currentTarif}
                      id={currentTarif}
                      className="mr-4 mt-2 h-[20px] w-[20px]"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-lg mb-3">
                        Тариф «{item.name}»
                      </p>
                      <p className="max-w-[360px] text-[#676767]">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center bg-[#fff] shadow-[0px_3px_10px_rgba(0,0,0,0.3)] rounded-lg py-5 px-7 md:ml-9">
                      <div className="flex items-center ">
                        <span className="text-[56px] text-[#1875F0] font-semibold">
                          {item.quantity}
                        </span>
                        <div className="text-[#676767] text-sm ml-2 mt-1">
                          <span>Гбайт</span>
                          <Separator />
                          <span>Месяц</span>
                        </div>
                      </div>
                      <div className="flex items-center ml-6 bg-[#F7F7F7] px-7 py-4 rounded-lg">
                        <span className="text-[#222222] text-[34px]">
                          {item.price}
                        </span>
                        <RussianRuble className="text-[#76767A] h-5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </RadioGroup>
            <Separator className="mb-6" />
            <div className="flex">
              <Button
                className="ml-auto w-full md:w-auto px-4 py-3"
                onClick={handleSubmit}
              >
                Оформить
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AccountTarifs;
