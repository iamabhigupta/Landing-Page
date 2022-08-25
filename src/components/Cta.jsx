import React from "react";

export default function Cta() {
  const countdown = () => {
    const countDate = new Date("July 07, 2022 00:00:00");
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

    if (gap < 0) {
      clearInterval(countdown);
      document.querySelector(".day").innerText = "00";
      document.querySelector(".hour").innerText = "00";
      document.querySelector(".minute").innerText = "00";
      document.querySelector(".second").innerText = "00";
    }
  };

  setInterval(() => {
    countdown();
  }, 1000);

  return (
    <div>
      <div className="h-full sm:h-full hero-section text-white py-8 text-center">
        <h2 className="flex justify-center text-2xl sm:text-3xl md:text-4xl  font-bold mb-0">
          Hurry Up Don’t Miss The Opportunity
        </h2>
        <h3 className="flex justify-center text-2xl sm:text-3xl md:text-4xl  mt-4">
          The Price will increase in
        </h3>
        <div className="countdown flex justify-center mt-4 gap-2 md:gap-4">
          <div className="container-day ">
            <h3 className="day text-2xl sm:text-3xl md:text-4xl">Time</h3>
            <h3 className="text-lg sm:text-xl md:text-2xl">Day</h3>
          </div>
          <div className="container-hour">
            <h3 className="hour text-2xl sm:text-3xl md:text-4xl">Time</h3>
            <h3 className="text-lg sm:text-xl md:text-2xl">Hour</h3>
          </div>
          <div className="container-minute">
            <h3 className="minute text-2xl sm:text-3xl md:text-4xl">Time</h3>
            <h3 className="text-lg sm:text-xl md:text-2xl">minute</h3>
          </div>
          <div className="container-second">
            <h3 className="second text-2xl sm:text-3xl md:text-4xl">Time</h3>
            <h3 className="text-lg sm:text-xl md:text-2xl">second</h3>
          </div>
        </div>
        <p className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-semibold  my-4 sm:my-8">
          <span className="text-red-700 line-through">
            <span className="text-white">₹72,798</span>
          </span>
          <span className="ml-5">₹34,999 - 51% Off </span>
        </p>
        <div className="flex justify-center uppercase">
          <a href="https://pages.razorpay.com/pl_JmrNp6eYZXcBAe/view">
            <button
              type="button"
              className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-green-600 text-lg sm:text-2xl text-white font-medium uppercase hover:bg-green-700"
            >
              become digital marketing expert
            </button>
          </a>
        </div>
        <p>
          200+ Hours of Content + 25+ Resources + Private WhatsApp Group + 6
          Months Support + Mentorship + Practical Assignment
        </p>
      </div>
    </div>
  );
}
