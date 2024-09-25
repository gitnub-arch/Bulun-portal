import {
  AlignJustifyIcon,
  ChevronDown,
  CloudRainWind,
  Search,
  User,
  X,
} from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { LINKS_ITEM } from "./const";
import { useState, useEffect } from "react";
import LinkItemProps from "./type";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState<LinkItemProps>(LINKS_ITEM[0]);
  const [history, setHistory] = useState<LinkItemProps[]>([LINKS_ITEM[0]]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const updateActiveLink = (link: LinkItemProps) => {
    setActiveLink(link);
    setHistory((prevHistory) => {
      if (!prevHistory.some((item) => item.label === link.label)) {
        const updatedHistory = [...prevHistory, link].slice(0, 9);
        return updatedHistory;
      } else {
        return prevHistory;
      }
    });
  };

  const handleLinkClick = (link: LinkItemProps) => {
    updateActiveLink(link);
  };

  useEffect(() => {
    const currentLink = LINKS_ITEM.find(
      (link) => link.href === location.pathname
    );
    if (currentLink) {
      updateActiveLink(currentLink);
    }
  }, [location]);

  return (
    <div>
      <div className="pt-6 bg-white">
        <div className="flex justify-between mx-8">
          <div className="flex items-center">
            <h4 className="mr-2 font-medium text-base text-[#76767A]">
              Тиксик
            </h4>
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
        <div className="flex justify-between items-center mx-8">
          <div className="flex items-center">
            <AlignJustifyIcon className="text-[#DADADA]" />
            <Separator
              orientation="vertical"
              className="bg-[#DADADA] -mt-6 ml-7"
            />
          </div>
          <div className="flex justify-center items-center flex-grow gap-9">
            {!isSearchActive ? (
              <div className="flex justify-center gap-9 w-full">
                {LINKS_ITEM.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-600 font-medium"
                    onClick={() => handleLinkClick(link)}
                  >
                    {link.label}
                    {activeLink.label === link.label && (
                      <hr className="mt-4 border-[#1875F0] border-[2px] rounded-full" />
                    )}
                  </a>
                ))}
              </div>
            ) : (
              <div className="relative w-full">
                <div className="flex items-center border border-[#DADADA] rounded-md px-4 py-2 w-full mb-5">
                  <Search className="text-[#999999] mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Введите фразу для поиска"
                    className="flex-grow text-base outline-none"
                  />
                  <X
                    className="text-[#999999] cursor-pointer"
                    onClick={() => setIsSearchActive(false)}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center">
            <Separator
              orientation="vertical"
              className="bg-[#DADADA] -mt-6 mr-7"
            />
            {!isSearchActive && (
              <Search
                className="text-[#999999] cursor-pointer"
                onClick={() => setIsSearchActive(true)}
              />
            )}
          </div>
        </div>
      </div>
      <Breadcrumbs history={history} />
    </div>
  );
};

export default Header;
