import { AdministrationItem } from "./types";
const AdministrationSection = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">Администрация</h2>
  <ul className="space-y-4">
    <li className="flex items-center space-x-4">
      <img src="url_картинки" alt="Инд. Джонс" className="w-16 h-16 rounded-full object-cover" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">Инд. Джонс</h3>
        <p className="text-sm text-gray-600">+996 (550) 344-321</p>
        <p className="text-sm text-gray-600">Президент</p>
      </div>
    </li>
    <li className="flex items-center space-x-4">
      <img src="url_картинки" alt="Наруто Узум." className="w-16 h-16 rounded-full object-cover" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">Наруто Узум.</h3>
        <p className="text-sm text-gray-600">+996 (550) 344-322</p>
        <p className="text-sm text-gray-600">Хокаге</p>
      </div>
    </li>
    <li className="flex items-center space-x-4">
      <img src="url_картинки" alt="Геральт из Ривии" className="w-16 h-16 rounded-full object-cover" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">Геральт из Ривии</h3>
        <p className="text-sm text-gray-600">+996 (550) 344-323</p>
        <p className="text-sm text-gray-600">Главный бухгалтер</p>
      </div>
    </li>
    <li className="flex items-center space-x-4">
      <img src="url_картинки" alt="Гарри Поттер" className="w-16 h-16 rounded-full object-cover" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">Гарри Поттер</h3>
        <p className="text-sm text-gray-600">+996 (550) 344-324</p>
        <p className="text-sm text-gray-600">Депутат</p>
      </div>
    </li>
  </ul>
</div>
  );
};

export default AdministrationSection;
