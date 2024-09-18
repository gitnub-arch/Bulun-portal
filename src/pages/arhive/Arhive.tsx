import React from "react";
import tree from "@/assets/images/tree.jpg";

const Arhive = () => {
  return (
    <div className="max-w-[1150px] mx-auto mt-5">
      <h2 className="text-2xl font-semibold mb-5">Архив</h2>
      <div>
        <div className="bg-[#fff] p-1 max-w-[410px]">
          <img src={tree} alt="tree" />
          <span className="flex text-center text-lg font-medium">Фотографии</span>
        </div>
      </div>
    </div>
  );
};

export default Arhive;
