import React from "react";
import plant from "../assets/plant.png";

import admin from "../assets/admin.jpg";

const NewsLetter = () => {
  const author = "Yagya Psd Adhikari";
  return (
    <div className="mx-auto w-[80%] p-5">
      <div className="flex flex-col justify-center items-center">
        <img
          className="rounded-full w-24 h-24 mb-3"
          src={admin}
          alt="admin_logo"
        />

        <h1 className="text-2xl font-bold text-center my-3">
          Subscribe to my newsletter
        </h1>
        <p className="text-xl w-2/3 text-gray-500 text-center my-3">
          Read articles from directly inside your inbox. Subscribe to the
          newsletter, and don't miss out.
        </p>

        <div className="flex border border-gray-600 overflow-hidden rounded-xl p-0 w-full sm:w-1/2 my-3">
          <input
            type="text"
            placeholder="Enter your email address"
            className="px-2text-gray-400 border-none p-3 focus:text-black w-full"
            name=""
            id=""
          />
          <button className="hover:bg-gray-600 bg-gray-700 text-white text-2xl p-3 w-full">
            SUBSCRIBE
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-center my-3">Recent articles</h1>

        <div className="grid grid-cols-3 grid-flow-row gap-8 ">
          {/* h-3/4 overflow-hidden */}
          <div className="border rounded-md border-gray-400 pb-3">
            <img src={plant} className="shadow-md mb-3" alt="post_pic" />
            <h1 className="text-xl font-bold text-start mb-2">
              Essential Mathematics for Machine Learning, AI, and Data Science
            </h1>
            <h2 className="font-bold text-gray-500">{author}</h2>
          </div>

          <div className="border rounded-md border-gray-400 pb-3">
            <img src={plant} className="shadow-md mb-3" alt="post_pic" />
            <h1 className="text-xl font-bold text-start mb-2">
              Improving Model Performance
            </h1>

            <h2 className="font-bold text-gray-500">{author}</h2>
          </div>

          <div className="border rounded-md border-gray-400 pb-3">
            <img src={plant} className="shadow-md mb-3" alt="post_pic" />
            <h1 className="text-xl font-bold text-start mb-2">
              Deploying a Highly Available E-commerce Application on AWS{" "}
            </h1>

            <h2 className="font-bold text-gray-500">{author}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
