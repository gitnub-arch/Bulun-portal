import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { ChevronDown, User, LogOut } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import AcBreadcrumbs from "../accunt_breadcrumbs/AcBreadcrumbs";

import { LINKS_ITEM } from "./const";
import LinkItemProps from "./type";
import { Auth } from "../authorization/Auth";
import { useLogout } from "../../hooks/useLogout";

const AccountHeader = () => {
  const [activeLink, setActiveLink] = useState<LinkItemProps>(LINKS_ITEM[0]);
  const [history, setHistory] = useState<LinkItemProps[]>([LINKS_ITEM[0]]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { logout } = useLogout();

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

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="bg-white ">
        <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <h1 className="font-black text-lg text-[#000000] mt-5 mb-7 lg:mb-0 lg:mt-0">
              Булунский Портал
            </h1>
          </div>
          <div className="flex gap-[20px] lg:gap-[50px]">
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
          <div className="flex items-center gap-[50px] relative">
            <Separator orientation="vertical" className="h-20" />
            <Link to="/" className="flex items-center">
              Перейти на сайт
            </Link>
            <Separator orientation="vertical" className="h-20" />
            <div className="flex items-center relative">
              <Link
                to="/account-info"
                className="flex items-center"
                onClick={handleUserClick}
              >
                <User className="w-5 h-5 cursor-pointer text-[#1875F0] mr-2" />
                <span className="font-medium text-base text-[#999999] cursor-pointer">
                  Аккаунт
                </span>
                <ChevronDown
                  className="w-4 h-4 ml-1 cursor-pointer"
                  onClick={toggleDropdown}
                />
              </Link>
              {isDropdownOpen && (
                <div className="absolute bg-white shadow-lg rounded mt-40 z-10 right-1 min-w-[260px] hover:shadow-[0px_3px_10px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                  <button
                    className="block px-4 py-2 text-left w-full text-gray-800 hover:text-[#1875F0]"
                    onClick={handleUserClick}
                  >
                    Личный кабинет
                  </button>
                  <button
                    className="flex gap-2 items-start block px-4 py-2 text-left w-full text-gray-800 hover:text-[#1875F0]"
                    onClick={handleLogout}
                  >
                    <span onClick={logout} />
                    Выход
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <AcBreadcrumbs history={history} />
    </div>
  );
};

export default AccountHeader;
