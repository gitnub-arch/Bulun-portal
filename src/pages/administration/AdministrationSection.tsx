import { ADMINISTRATION_ITEMS } from "./const";

const AdministrationSection = () => {
  return (
    <div className="max-w-[1250px] mx-auto mt-5">
      <h2 className="text-2xl font-semibold mb-5 ml-7">Администрация</h2>
      <div className="space-y-6 bg-[#fff] p-7">
        {ADMINISTRATION_ITEMS.map((item) => (
          <div key={item.id} className="flex items-center">
            <img
              src={item.photoURL}
              alt={item.name}
              className="w-20 h-20 mr-20 object-cover border-2 border-gray-200"
            />
            <div className="grid grid-cols-3 gap-4 w-full">
              <h3 className="text-xl font-semibold text-[#020202]">
                {item.name}
              </h3>
              <p className="text-base text-[#020202] mt-1">{item.number}</p>
              <p className="text-base text-[#020202] mt-1">{item.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdministrationSection;
