const Footer = () => {
  return (
    <div>
      <footer className="bg-white p-4 text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 gap-10 text-center">
            <li className="text-black font-black text-center ml-16 mr-20 md:ml-28">
              Булунский портал
            </li>
            <li>
              <a href="#" className="hover:text-black text-[#76767A]">
                Новости
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black text-[#76767A]">
                Главная
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black text-[#76767A]">
                Объявления
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black text-[#76767A]">
                Транспорт
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black text-[#76767A]">
                Администрация
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black text-[#76767A]">
                Архив
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
