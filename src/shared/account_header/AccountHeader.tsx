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
import { useLocation, useNavigate } from "react-router-dom"; // Импортируем useNavigate для перехода

const AccountHeader = () => {
  const [activeLink, setActiveLink] = useState<LinkItemProps>(LINKS_ITEM[0]);
  const [history, setHistory] = useState<LinkItemProps[]>([LINKS_ITEM[0]]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate(); // Используем useNavigate для перехода

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

  const handleUserClick = () => {
    navigate("/account");
  };

  return (
    <div>
      <div className="bg-white ">
        <div className="flex items-center justify-between mx-8 gap-[50px]">
          <div className="flex items-center">
            <h1 className="font-black text-lg text-[#000000]">
              Булунский Портал
            </h1>
          </div>

          <div className="flex gap-[50px]">
            {LINKS_ITEM.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-gray-600 font-medium relative ${
                  activeLink.label === link.label ? "text-[#1875F0]" : ""
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {link.label}
                {activeLink.label === link.label && (
                  <span className="absolute top-[-20px] left-0 right-0 h-[3px] rounded-full bg-[#1875F0]" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-[50px]">
            <Separator orientation="vertical" className="h-20" />
            <div className="flex items-center">Перейти на сайт</div>
            <Separator orientation="vertical" className="h-20" />
            <div className="flex items-center">
              <User
                className="w-5 h-5 text-[#DADADA] cursor-pointer"
                onClick={handleUserClick}
              />
              <span
                className="font-medium text-base text-[#999999] cursor-pointer"
                onClick={handleUserClick}
              >
                Аккаунт
              </span>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumbs history={history} />
    </div>
  );
};

export default AccountHeader;
