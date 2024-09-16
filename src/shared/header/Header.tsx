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

const Header = () => {
  const [activeLink, setActiveLink] = useState(useState(LINKS_ITEM[1]));

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  return (
    <div className="mt-3 container m-auto">
      <div className="flex justify-between">
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
      <Separator className="mt-[26px] mb-[26px]" />
      <div className="flex justify-between">
        <AlignJustifyIcon className="text-[#DADADA]" />
        {LINKS_ITEM.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-600 font-medium mr-4"
            onClick={() => handleLinkClick(link)}
          >
            {link.label}
            {activeLink[0] === link && (
              <hr className="mt-4 border-[#1875F0] border-[2px]" />
            )}
          </a>
        ))}
        <Search className="text-[#999999]" />
      </div>
    </div>
  );
};

export default Header;
