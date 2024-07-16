import React from "react";

const Footer = () => {
  return (
    <div className="   w-full border-t-2 shadow-md">
      <div className="bg-gray-100 text-gray-600 mx-auto w-[80%] pt-4 pb-4">
        <div className="flex flex-col justify-center text-center">
          <p className="p-3 text-xl">@copy 2024 {"Yagya Psd Adhikari"}</p>

          <div className="flex justify-center">
            <a href="" className="underline mx-2">
              {" "}
              Archive
            </a>
            <a href="" className="underline mx-2">
              {" "}
              Privacy policy
            </a>
            <a href="" className="underline mx-2">
              {" "}
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
