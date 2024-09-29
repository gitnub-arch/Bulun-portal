import { HOME_ITEM } from "./const";
import { Link } from "react-router-dom"; 

const Home = () => {
  return (
    <div className="max-w-[1250px] mx-auto mt-5">
      <h2 className="text-2xl font-medium mb-5 ml-7">Главная</h2>
      <div className="flex flex-wrap">
        {HOME_ITEM.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="bg-[#fff] p-1 w-full max-h-[255px] max-w-[360px] mb-8 mx-5 block hover:shadow-[0px_3px_10px_rgba(0,0,0,0.3)] transition-shadow duration-300"
          >
            <div>
              <img src={item.imgURL} alt={item.title} />
              <p className="text-center p-1 text-lg font-semibold text-gray-600 hover:text-black transition-colors duration-300">
                {item.text}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
