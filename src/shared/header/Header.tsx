import {
  AlignJustifyIcon,
  ChevronDown,
  CloudRainWind,
  Search,
  X,
} from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { Link } from "react-router-dom";
import { LINKS_ITEM } from "./const";
import { useState, useEffect } from "react";
import LinkItemProps from "./type";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import { useLocation, useNavigate } from "react-router-dom";
import { Auth } from "../authorization/Auth";
import useAuthState from "../../hooks/useAuthState";

const Header = () => {
  const { isLoggedIn, isCheckingStatus } = useAuthState();
  const [activeLink, setActiveLink] = useState<LinkItemProps>(LINKS_ITEM[0]);
  const [history, setHistory] = useState<LinkItemProps[]>([LINKS_ITEM[0]]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
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
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const currentLink = LINKS_ITEM.find(
      (link) => link.href === location.pathname
    );
    if (currentLink) {
      updateActiveLink(currentLink);
    }
  }, [location]);

  
  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(
        `/search-result?query=${encodeURIComponent(searchQuery.trim())}`
      );
    }
  };

  // Тоггл состояния меню
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="pt-6 bg-white">
        <div className="flex justify-between mx-8">
          <div className="hidden lg:flex items-center">
            <h4 className="mr-2 font-medium text-base text-[#76767A]">
              Тиксик
            </h4>
            <ChevronDown className="text-[#B3B3B3] w-[18px] h-[18px]" />
            <CloudRainWind className="ml-12 text-[#DADADA]" />
            <p className="ml-2 font-medium text-base text-[#666666]">+8°С</p>
          </div>

          <div className="flex justify-center w-full">
            <h1 className="h-[24px] font-black text-lg text-[#000000]">
              Булунский Портал
            </h1>
          </div>

          {!isCheckingStatus && (
            <>
              {isLoggedIn ? (
                <Link
                  to="/account"
                  className="ml-5 font-medium text-base text-[#999999]"
                >
                  Личный кабинет
                </Link>
              ) : (
                <Auth>
                  <span className="ml-5 font-medium text-base text-[#999999] cursor-pointer">
                    Войти
                  </span>
                </Auth>
              )}
            </>
          )}
        </div>

        <Separator className="bg-[#DADADA] mt-[26px] mb-[26px] w-full" />

        <div className="flex justify-between items-center mx-8">
          <div className="flex items-center">
            {/* Бургер-меню */}
            <div className="block lg:hidden pb-5">
              {isMenuOpen ? (
                <X
                  className="text-[#000000] cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <AlignJustifyIcon
                  className="text-[#000000] cursor-pointer"
                  onClick={toggleMenu}
                />
              )}
            </div>
            <Separator
              orientation="vertical"
              className="bg-[#DADADA] -mt-6 ml-7 hidden lg:block"
            />
          </div>

          <div className="hidden lg:flex justify-center items-center flex-grow gap-9">
            {!isSearchActive ? (
              <div className="flex justify-center gap-9 w-full">
                {LINKS_ITEM.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-gray-600 font-medium"
                    onClick={() => handleLinkClick(link)}
                  >
                    {link.label}
                    {activeLink.label === link.label && (
                      <hr className="mt-4 border-[#1875F0] border-[2px] rounded-full" />
                    )}
                  </Link>
                ))}
              </div>
            ) : (
              <div className="relative w-full">
                <div className="flex items-center border border-[#DADADA] rounded-md px-4 py-2 lg:w-full mb-5">
                  <Search className="text-[#999999] mr-2 " />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown} 
                    placeholder="Введите фразу для поиска"
                    className="flex-grow outline-none text-sm sm:text-base"
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
              className="bg-[#DADADA] -mt-6 mr-7 hidden lg:block"
            />
            {!isSearchActive && (
              <Search
                className="text-[#999999] cursor-pointer hidden lg:block -mt-5"
                onClick={() => {
                  setIsSearchActive(true);
                  setSearchQuery("");
                }}
              />
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg rounded-md p-4 absolute w-full top-0 left-0 z-50">
          <div className="flex justify-between items-center mb-3">
            <h1 className="font-black text-lg text-[#000000]">Меню</h1>
            <X className="text-[#000000] cursor-pointer" onClick={toggleMenu} />
          </div>
          {LINKS_ITEM.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-gray-600 font-medium mb-4"
              onClick={() => handleLinkClick(link)}
            >
              {link.label}
            </a>
          ))}
          {!isCheckingStatus && (
            <>
              {isLoggedIn ? (
                <Link
                  to="/account"
                  className="ml-5 font-medium text-base text-[#999999]"
                >
                  Личный кабинет
                </Link>
              ) : (
                <Auth>
                  <div className="flex mt-4">
                    <span className="ml-5 font-medium text-base text-[#999999] cursor-pointer">
                      Войти
                    </span>
                  </div>
                </Auth>
              )}
            </>
          )}
        </div>
      )}

      <Breadcrumbs history={history} />
    </div>
  );
};

export default Header;