const Footer = () => {
  return (
    <div>
      <footer className="bg-white p-4 text-black">
        <div>
          <nav>
            <ul className="flex justify-between gap-6 max-w-[1200px] mx-auto">
              <li>
                <h1 className="h-[24px] font-black text-lg mr-16 text-[#000000]">
                  Булунский Портал
                </h1>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Главная
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Объявления
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Афиша
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Транспорт
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Форум
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Администрация
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Архив
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
