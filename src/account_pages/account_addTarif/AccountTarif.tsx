import React from "react";
import { RussianRuble } from "lucide-react";
import { TARIF_ITEM } from "./const";
import { Link } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";
import AccountHeader from "../../shared/account_header/AccountHeader";

const AccountTarif = () => {
  return (
    <div className="container max-w-[1250px] mx-auto">
      <h2 className="text-2xl my-8">Добавление дополнительного трафика</h2>
      <div className="flex flex-wrap gap-8">
        <div className="bg-[#fff] py-[30px] px-[20px] sm:px-[35px] justify-between flex-1">
          {TARIF_ITEM.map((item, index) => (
            <div key={index} className="flex items-center gap-5 border-2 p-5 mb-4">
              <div className="flex items-center bg-[#F3F3F4] rounded-sm py-3 px-5 justify-center w-[150px]">
                <span className="text-5xl font-semibold text-[#1875F0]">{item.quantity}</span>
                <span className="text-[#76767A] ml-2 mt-1">Гбайт</span>
              </div>
              <div className="flex items-center ml-11">
                <span className="text-3xl font-semibold text-[#222222]">{item.price}</span>
                <RussianRuble className="text-[#76767A] h-5 mt-1" />
              </div>
              <p className="text-sm text-[#76767A] ml-2 sm:ml-14">
                Дополнительный {item.text} ГБ
              </p>
              <button className="py-2 px-4 ml-2 sm:ml-11 border-[#1875F0] text-sm font-medium text-[#1875F0]">
                Выбрать
              </button>
            </div>
          ))}
        </div>
        <aside className="py-[30px] px-[20px] sm:px-[35px] max-w-[360px] w-full bg-[#fff]">
          <p className="text-5 font-semibold mb-1">Выберите способ оплаты</p>
          <p className="text-xs text-[#76767A] mb-6">
            Выберите предпочитаемый способ оплаты
          </p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="С баланса аккаунта" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">С баланса аккаунта</SelectItem>
              <SelectItem value="dark">С карточки</SelectItem>
              <SelectItem value="system">С балансы телефона</SelectItem>
            </SelectContent>
          </Select>
          <Separator className="my-5" />
          <div className="flex justify-between">
            <span>Итого к оплате:</span>
            <span>400</span>
          </div>
          <Link to="/account-payment">
            <Button className="w-full mt-5">Добавить трафик</Button>
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default AccountTarif;
