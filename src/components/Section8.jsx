import React from "react";

export default function Section8() {
  return (
    <div>
      <div className="h-full sm:h-full text-white pb-6 text-center">
        <h2 className="flex justify-center text-2xl sm:text-3xl md:text-4xl  font-bold mb-0">
          Hurry Up Don’t Miss The Opportunity
        </h2>
        <p className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-semibold  my-4 sm:my-8 px-4">
          <span className="text-[#D14B39] line-through">
            <span className="text-white">₹1,00,000 </span>
          </span>
          <span className="ml-2">
            ₹39,999{" "}
            <span className="text-lg sm:text-3xl md:text-4xl">- 60% Off</span>
          </span>
        </p>
        <div className="flex justify-center uppercase cursor-pointer">
          <a href="https://rzp.io/l/nqYBVu8dXj">
            <button
              type="button"
              className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-green-600 text-lg sm:text-2xl text-white font-medium uppercase hover:bg-green-700"
            >
              BECOME DIGITAL MARKETING SCIENTIST
            </button>
          </a>
        </div>
        <p className="italic md:w-1/2 text-xl mx-5 md:mx-auto mt-4 text-center">
          Professional Teaching in less than ₹175/hr
        </p>
        <p className="italic md:w-1/2 text-xl mx-5 md:mx-auto mt-4 text-center">
          Sunday Only Batch
        </p>
        <button
          type="button"
          className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-[#D14B39] text-lg sm:text-2xl text-white font-medium hover:bg-[#b44132] mt-5"
        >
          Enrollment Ends - 29th Oct
        </button>
        <p className="italic md:w-2/5 text-xl mx-5 md:mx-auto mt-5">
          200+ Hours of Content + 25+ Resources + Private WhatsApp Group + 6
          Months Support + Mentorship + <br /> Practical Assignment
        </p>
      </div>
    </div>
  );
}
