import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-white p-8 flex justify-center items-center flex-col">
        <img
          src="/Lapaas Voice Logo.svg"
          alt="Lapaas-logo"
          className="h-20 w-20"
        />
        <p className="text-center w-full md:w-3/5 md:text-lg mt-10">
          Lapaas Learning is an initiative by Lapaas where you will get value
          rich courses which will help you to enhance and polish your skills. We
          make it easier to learn new skills so you can easily master the field
          in which you want to build your career.
        </p>
      </div>
      <div className="bg-[#D14B39]">
        <p className="text-base text-gray-300 text-center py-4">
          &copy;2022 Lapaas Digital Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </>
  );
}
