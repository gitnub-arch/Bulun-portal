import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "../../components/ui/separator";
import { RussianRuble } from "lucide-react";
import { Button } from "../../components/ui/button";
import Payment from "../../shared/popups/pay/Payment";

const AccountPayment = () => {
  const [selectedDelivery, setSelectedDelivery] = useState(""); // State для выбранного способа доставки
  const [isPaymentVisible, setIsPaymentVisible] = useState(false); // State для отображения компонента Payment

  const handleSelectDelivery = (option: string) => {
    setSelectedDelivery(option); // Установка выбранного способа доставки
  };

  const handlePayment = () => {
    setIsPaymentVisible(true); // Показать Payment компонент
  };

  // Если платеж виден, показываем только его
  if (isPaymentVisible) {
    return <Payment />;
  }

  return (
    <div className="container max-w-[1140px] mx-auto mt-5">
      <h2 className="text-2xl font-semibold mb-5">Пополнение лицевого счёта</h2>
      <div className="flex gap-8">
        <div>
          <div className="bg-white py-5 px-[35px] rounded-lg w-full">
            <p className="text-xl font-semibold mb-5">Способ пополнения</p>

            <Select>
              <SelectTrigger className="w-full bg-[#F3F3F4]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="bg-[#fff] py-5 px-9 mt-5 max-w-[750px] rounded-lg">
            <h2 className="text-2xl font-semibold mb-5">
              Текущий тарифный план
            </h2>
            <Separator className="mb-6" />
            <div className="flex mb-5">
              <div>
                <p className="font-medium text-lg mb-3">Тариф «Начало»</p>
                <p className="max-w-[360px] text-[#676767] leading-4 mb-9">
                  Значимость этих проблем настолько свойств очевидна, что
                  сложившаяся структура ранга, имеет важнешее составляющее
                </p>
              </div>
              <div className="flex items-center bg-[#fff] shadow-[0px_3px_10px_rgba(0,0,0,0.3)] rounded-lg py-5 px-6 ml-1">
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
                <div className="flex items-center ml-14 bg-[#F7F7F7] px-7 py-4 rounded-lg">
                  <span className="text-[#222222] text-[34px]">540</span>
                  <RussianRuble className="text-[#76767A] h-5" />
                </div>
              </div>
            </div>
            <Separator className="mt-7 mb-5" />
            <Button className="bg-[#F3F3F4] text-[#89898D] px-14 py-4 hover:bg-[#E9E9EA]">
              Сменить тариф
            </Button>
          </div>
        </div>
        <aside className="py-[30px] px-[30px] max-w-[360px] max-h-[425px] bg-[#fff]">
          <p className="text-xl font-semibold">Способ доставки чека</p>
          <p className="text-[#76767A] text-xs">
            После оплаты вам будет направлен кассовый чек
          </p>

          <div
            className={`flex items-center border-2 ${
              selectedDelivery === "email"
                ? "border-blue-500"
                : "border-gray-300"
            } text-center mt-6 py-5 px-5 text-sm cursor-pointer`}
            onClick={() => handleSelectDelivery("email")}
          >
            <input
              type="radio"
              name="deliveryOption"
              checked={selectedDelivery === "email"}
              onChange={() => handleSelectDelivery("email")}
              className="h-7 w-7 mr-6"
            />
            <p>На электронную почту</p>
          </div>
          <div
            className={`flex justify-start items-center border-2 ${
              selectedDelivery === "sms" ? "border-blue-500" : "border-gray-300"
            } text-center mt-3 py-5 px-5 text-sm cursor-pointer`}
            onClick={() => handleSelectDelivery("sms")}
          >
            <input
              type="radio"
              name="deliveryOption"
              checked={selectedDelivery === "sms"}
              onChange={() => handleSelectDelivery("sms")}
              className="mr-6 h-7 w-7"
            />
            <p>На номер телефона</p>
          </div>

          <Separator className="mt-7 mb-3" />
          <div className="flex items-center gap-11">
            <span className="text-lg text-[#76767A]">К оплате:</span>
            <div className="flex border-2 px-4 py-2">
              <span className="text-center mt-1 mx-4 text-2xl font-semibold">
                540
              </span>
              <Separator
                orientation="vertical"
                className="w-[2px] h-9 mr-4 ml-1"
              />
              <RussianRuble className="mt-2 " />
            </div>
          </div>
          <Button className="w-full mt-3 p-4" onClick={handlePayment}>
            Оплатить
          </Button>
        </aside>
      </div>
    </div>
  );
};

export default AccountPayment;
