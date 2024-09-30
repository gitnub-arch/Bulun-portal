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
import { useLocation, useNavigate } from "react-router-dom";
import { Auth } from "../authorization/Auth"; // Компонент авторизации

const Header = () => {
  const [activeLink, setActiveLink] = useState<LinkItemProps>(LINKS_ITEM[0]);
  const [history, setHistory] = useState<LinkItemProps[]>([LINKS_ITEM[0]]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // состояние для открытия/закрытия бургер-меню
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
    setIsMenuOpen(false); // Закрываем меню при выборе ссылки
  };

  useEffect(() => {
    const currentLink = LINKS_ITEM.find(
      (link) => link.href === location.pathname
    );
    if (currentLink) {
      updateActiveLink(currentLink);
    }
  }, [location]);

  // Функция для перехода на страницу авторизации


  // Обработчик нажатия клавиши Enter в поисковой строке
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
          <Auth>
            <span
              className="ml-5 font-medium text-base text-[#999999] cursor-pointer"
            >
              Войти
            </span>
          </Auth>
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
            {/* Вертикальный разделитель */}
            <Separator
              orientation="vertical"
              className="bg-[#DADADA] -mt-6 ml-7 hidden lg:block"
            />
          </div>

          {/* Основная навигация для десктопов */}
          <div className="hidden lg:flex justify-center items-center flex-grow gap-9">
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
                  <Search className="text-[#999999] mr-2 block" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown} // Обработчик нажатия клавиши Enter
                    placeholder="Введите фразу для поиска"
                    className="flex-grow text-base outline-none 
                 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" // адаптивная ширина
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
            {/* Вертикальный разделитель */}
            <Separator
              orientation="vertical"
              className="bg-[#DADADA] -mt-6 mr-7 hidden lg:block"
            />
            {!isSearchActive && (
              <Search
                className="text-[#999999] cursor-pointer block -mt-5"
                onClick={() => {
                  setIsSearchActive(true); // Активируем поиск
                  setSearchQuery(""); // Очищаем поле поиска
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Мобильное бургер-меню */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg rounded-md p-4 absolute w-full top-0 left-0 z-50">
          <div className="flex justify-between items-center">
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
          {/* Войти в мобильной версии */}
          <Auth>
            <div className="flex mt-4">
            
              <span
                className="ml-5 font-medium text-base text-[#999999] cursor-pointer"
               
              >
                Войти
              </span>
            </div>
          </Auth>
        </div>
      )}

      <Breadcrumbs history={history} />
    </div>
  );
};

export default Header;
