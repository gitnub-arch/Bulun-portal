import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";

import { RussianRuble } from "lucide-react";

import Payment from "@/shared/popups/pay/Payment";

const AccountPayment = () => {
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(540); // Добавляем состояние для суммы оплаты

  const handleSelectDelivery = (option: string) => {
    setSelectedDelivery(option);
  };

  const handlePayment = () => {
    setIsPaymentVisible(true);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Убираем все нечисловые символы
    setPaymentAmount(value ? parseInt(value) : 0); // Обновляем состояние, если значение не пустое
  };

  if (isPaymentVisible) {
    return <Payment />;
  }

  return (
    <div className="container max-w-[1140px] mx-auto mt-5 px-4 md:px-0">
      <h2 className="text-2xl font-semibold mb-5">Пополнение лицевого счёта</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-white py-5 px-4 rounded-lg w-full">
            <p className="text-xl font-semibold mb-5">Способ пополнения</p>

            <Select>
              <SelectTrigger className="w-full bg-[#F3F3F4]">
                <SelectValue placeholder="Выберите способ оплаты" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Банковской картой</SelectItem>
                <SelectItem value="dark">Кредитной картой</SelectItem>
                <SelectItem value="system">Чеком</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="bg-[#fff] py-5 px-4 mt-5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-5">
              Текущий тарифный план
            </h2>
            <Separator className="mb-6" />
            <div className="flex flex-col md:flex-row mb-5">
              <div className="flex-1">
                <p className="font-medium text-lg mb-3">Тариф «Начало»</p>
                <p className="max-w-[360px] text-[#676767] leading-4 mb-9">
                  Значимость этих проблем настолько свойств очевидна, что
                  сложившаяся структура ранга, имеет важнеее составляющее
                </p>
              </div>
              <div className="flex items-center bg-[#fff] shadow-[0px_3px_10px_rgba(0,0,0,0.3)] rounded-lg py-5 px-6">
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
                  <input
                    type="text"
                    value={paymentAmount}
                    onChange={handleAmountChange}
                    className="text-center text-[#222222] text-[34px] w-20 border-b border-[#ccc] focus:outline-none"
                  />
                  <RussianRuble className="text-[#76767A] h-5 ml-2" />
                </div>
              </div>
            </div>
            <Separator className="mt-7 mb-5" />
            <Button className="bg-[#F3F3F4] text-[#89898D] px-14 py-4 hover:bg-[#E9E9EA]">
              Сменить тариф
            </Button>
          </div>
        </div>
        <aside className="py-[30px] px-4 md:px-[30px] max-w-[360px] bg-[#fff] mt-5 md:mt-0">
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
          <div className="flex items-center gap-3">
            <span className="text-lg text-[#76767A]">К оплате:</span>
            <div className="flex border-2 px-4 py-2">
              <input
                type="text"
                value={paymentAmount}
                onChange={handleAmountChange}
                className="text-center text-2xl font-semibold w-20 border-b border-[#ccc] focus:outline-none"
              />
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
