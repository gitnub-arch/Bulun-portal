import React from "react";
import { CircleCheckBig } from "lucide-react";

const Payment = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg py-[50px] px-14 text-center max-w-[462px]">
        {/* Иконка галочки */}
        <div className="text-blue-500 mb-7 flex justify-center">
          <CircleCheckBig className="w-24 h-24" />
        </div>
        {/* Заголовок */}
        <h2 className="text-2xl font-semibold mb-4">Платеж выполнен</h2>
        {/* Описание */}
        <p className="text-gray-500 mb-6 text-sm">
          Пакет интернет-трафика по опции «Начало» был успешно продлен
        </p>
        {/* Кнопка */}
        <a
          href="/account"
          className="w-full block text-center py-3 mt-5 border-[#1875F0] text-sm font-medium text-[#1875F0] border"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default Payment;
