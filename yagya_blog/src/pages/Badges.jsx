import React from "react";
import plant from "../assets/plant.png";
const Badges = () => {
  return (
    <div className="mx-auto w-[90%] p-2">
      <div className="flex flex-col justify-center shadow-sm">
        <div className="flex justify-between shadow-sm mb-4 border px-3 py-5">
          <h1 className="text-5xl font-bold">Badges Earned</h1>
          <div className="p-3 border border-gray-400 rounded-2xl flex w-1/2  overflow-hidden">
            <h1 className="mx-1 text-4xl content-center text-center">
              LogoBadge
            </h1>
            Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur
            adipisicing elit.
          </div>
        </div>

        <div className="flex justify-between border shadow-sm px-3 py-5 mb-4">
          <h1 className="text-4xl text-center font-bold">Logo</h1>

          <div className="border w-1/2 p-3 rounded-2xl">
            <h1 className="text-3xl font-bold p-3">Word warrior</h1>
            <p className="text-sm text-gray-600 p-3">Earnd 6 months ago</p>
            <p className="text-sm text-gray-600 p-3">
              Wrote an in-depth blog post with more than 2K words
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
