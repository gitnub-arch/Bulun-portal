import {
  AlignJustifyIcon,
  ChevronDown,
  CloudRainWind,
  Search,
  User,
} from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { LINKS_ITEM } from "./const";
import { useState } from "react";
import LinkItemProps from "./type"; // Импортируйте типы
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const Header = () => {
  const [activeLink, setActiveLink] = useState<LinkItemProps>(LINKS_ITEM[0]);
  const [history, setHistory] = useState<LinkItemProps[]>([LINKS_ITEM[0]]); // Хранение истории

  const handleLinkClick = (link: LinkItemProps) => {
    setActiveLink(link);
    setHistory(prevHistory => {
      // Добавляем новый элемент в начало истории и ограничиваем её длину до 4
      const updatedHistory = [...prevHistory, link].slice(0, 9);
      return updatedHistory;
    });
  };

  return (
    <div>
      <div className="mt-6 bg-white">
        <div className="flex justify-between mx-8">
          <div className="flex items-center">
            <h4 className="mr-2 font-medium text-base text-[#76767A]">Тиксик</h4>
            <ChevronDown className="text-[#B3B3B3] w-[18px] h-[18px]" />
            <CloudRainWind className="ml-12 text-[#DADADA]" />
            <p className="ml-2 font-medium text-base text-[#666666]">+8°С</p>
          </div>
          <h1 className="h-[24px] font-black text-lg text-[#000000]">
            Булунский Портал
          </h1>
          <div className="flex">
            <User className="w-5 h-5 text-[#DADADA]" />
            <span className="ml-5 font-medium text-base text-[#999999]">
              Войти
            </span>
          </div>
        </div>
        <Separator className="bg-[#DADADA] mt-[26px] mb-[26px] w-full" />
        <div className="flex justify-around mx-8">
          <div>
            <AlignJustifyIcon className="text-[#DADADA]" />
          </div>
          <Separator orientation="vertical" className="bg-[#DADADA] -mt-6 ml-7" />
          <div className="flex justify-center w-[90%] gap-9">
            {LINKS_ITEM.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 font-medium mr-4 px-3"
                onClick={() => handleLinkClick(link)}
              >
                {link.label}
                {activeLink.label === link.label && (
                  <hr className="mt-4 border-[#1875F0] border-[2px] rounded-full" />
                )}
              </a>
            ))}
          </div>
          <Separator orientation="vertical" className="bg-[#DADADA] -mt-6 mr-7" />
          <Search className="text-[#999999]" />
        </div>
      </div>
      <Breadcrumbs history={history} />
    </div>
  );
};

export default Header;
