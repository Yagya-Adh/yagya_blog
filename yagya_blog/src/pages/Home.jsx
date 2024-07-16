import React from "react";
import plant from "../assets/plant.png";
const Home = () => {
  return (
    <div className="mx-auto w-[70%] p-2 ">
      <div className="grid grid-cols-2 grid-flow-row gap-6 ">
        {/* h-3/4 overflow-hidden */}
        <div className="border rounded-md  border-gray-400 pb-3">
          <img src={plant} className="shadow-md mb-3" alt="post_pic" />
          <h1 className="text-xl font-bold text-start mb-2">
            Essential Mathematics for Machine Learning, AI, and Data Science
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            doloribus fugiat, ipsum quia repellendus nihil doloremque dolore
            itaque porro voluptas eius! Voluptates esse veritatis quia corrupti,
            similique ad voluptate? Rerum.
          </p>
        </div>

        <div className="border rounded-md border-gray-400 pb-3">
          <img src={plant} className="shadow-md mb-3" alt="post_pic" />
          <h1 className="text-xl font-bold text-start mb-2">
            Essential Mathematics for Machine Learning, AI, and Data Science
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            doloribus fugiat, ipsum quia repellendus nihil doloremque dolore
            itaque porro voluptas eius! Voluptates esse veritatis quia corrupti,
            similique ad voluptate? Rerum.
          </p>
        </div>

        <div className="border rounded-md border-gray-400 pb-3">
          <img src={plant} className="shadow-md mb-3" alt="post_pic" />
          <h1 className="text-xl font-bold text-start mb-2">
            Essential Mathematics for Machine Learning, AI, and Data Science
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            doloribus fugiat, ipsum quia repellendus nihil doloremque dolore
            itaque porro voluptas eius! Voluptates esse veritatis quia corrupti,
            similique ad voluptate? Rerum.
          </p>
        </div>

        <div className="border rounded-md border-gray-400 pb-3">
          <img src={plant} className="shadow-md mb-3" alt="post_pic" />
          <h1 className="text-xl font-bold text-start mb-2">
            Essential Mathematics for Machine Learning, AI, and Data Science
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            doloribus fugiat, ipsum quia repellendus nihil doloremque dolore
            itaque porro voluptas eius! Voluptates esse veritatis quia corrupti,
            similique ad voluptate? Rerum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
