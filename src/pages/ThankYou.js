import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Bonus from "../components/Bonus";

const ThankYou = () => {
  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="self-center flex-shrink-0 mr-2 h-5 w-5 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
  return (
    <section className="w-full text-white pb-10 md:pb-20 background">
      <div className="w-full h-[563px] md:h-[515px] absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-5 md:px-20">
        <div className="text-center px-5 py-8 text-gray-100 space-y-6">
          <h2 className="text-lg uppercase text-white font-bold">
            Thanks For Purchasing the course
          </h2>
          <h3 className="text-5xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
            Welcome To The Family!
          </h3>
          <p className="text-lg md:w-4/5 mx-auto">
            You're well on your way to becoming Digital Marketing Scientist and
            we can't wait to help. Join Our WhatsApp Group for further
            instructions and communication
          </p>
        </div>
        <div className="text-slate-900 m-5 relative">
          <div className="flex flex-col items-center md:w-4/5 mx-auto rounded-sm">
            <div
              className="relative h-0 overflow-hidden max-w-full w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src="https://www.youtube.com/embed/e0XNcNgjlkg"
                frameBorder={0}
                allowFullScreen=""
                title="video"
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:mt-5 mx-5">
        <a href="https://chat.whatsapp.com/GXgON59TUCPFoId5IIhZkK">
          <button
            type="button"
            className="text-white flex justify-center items-center gap-3 md:gap-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-600 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-md text-lg md:text-xl px-5 py-2.5 text-center mr-2 mb-2"
          >
            <FaWhatsapp className="text-4xl" />
            Join WhatsApp Group
          </button>
        </a>
      </div>
      <div className="container mx-auto">
        <div className="w-full mt-10 px-5 flex flex-col items-center bg-gradient-to-tr font-body">
          <h3 className="text-4xl md:text-5xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-8">
            Access Bonus
          </h3>
          <div className="grid grid-cols-3 gap-6 max-w-7xl">
            {/* ::Offer 1 */}
            <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-[#D14B39] text-white shadow-xl border-4 border-white rounded-sm">
              {/* Offer name */}
              <h2 className="font-title mb-1 text-3xl font-extrabold uppercase tracking-wider border-2 border-white bg-white text-[#193247] rounded-sm p-2">
                Bonus - 1
              </h2>
              <ul className="mt-10 flex flex-col">
                <li className="mb-4 inline-flex text-2xl text-center font-bold">
                  50 Woo Commerce <br /> All Paid Plugin Bundle
                  <br /> Worth ₹15000/-
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  Woocommerce Customizer
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  Woocommerce Multilingual
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  Woocommerce Booster
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  Other 45+ Plugins
                </li>
              </ul>
              <a href="https://drive.google.com/file/d/1PHdxQisKODt_bxjc625JCXufd-5BN0qJ/view?usp=sharing">
                <button
                  type="button"
                  class="text-white bg-green to-lime-400/50  focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-2xl px-14 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 mt-8"
                >
                  Download
                </button>
              </a>
            </div>

            {/* ::Offer 2 */}
            <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-[#D14B39] text-white shadow-xl border-4 border-white rounded-sm">
              {/* Offer name */}
              <h2 className="font-title mb-1 text-3xl font-extrabold uppercase tracking-wider border-2 border-white bg-white text-[#193247] rounded-sm p-2">
                Bonus - 2
              </h2>
              <ul className="mt-10 flex flex-col">
                <li className="mb-4 inline-flex text-2xl text-center font-bold">
                  25 GPL WordPress Website Theme <br /> Worth ₹7500/-
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  Astra
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  Avada
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  NewsPaper
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  Other 20+ Themes
                </li>
              </ul>
              <a href="https://drive.google.com/file/d/10SzNfkmATCrVpmT2WYoNwI8VJ6-v6BCL/view?usp=sharing">
                <button
                  type="button"
                  class="text-white bg-green to-lime-400/50  focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-2xl px-14 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 mt-8"
                >
                  Download
                </button>
              </a>
            </div>

            {/* ::Offer 3 */}
            <div className="col-span-3 lg:col-span-1 my-4 py-9 px-12 flex flex-col items-center bg-[#D14B39] text-white shadow-xl border-4 border-white rounded-sm">
              {/* Offer name */}
              <h2 className="font-title mb-1 text-3xl font-extrabold uppercase tracking-wider border-2 border-white bg-white text-[#193247] rounded-sm p-2">
                Bonus - 3
              </h2>
              {/* Divide line */}
              {/* <span className="w-28 h-1.5 bg-white" /> */}
              {/* Features */}
              <ul className="mt-10 flex flex-col">
                <li className="mb-4 inline-flex text-2xl text-center font-bold">
                  25 Important WordPress Plugin Worth ₹7500/-
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  Yoast SEO
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  Wp Rocket
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  Wp Forms
                </li>
                <li className="mb-3 inline-flex font-medium text-lg">
                  <CheckIcon />
                  Other 20+ Plugins
                </li>
              </ul>
              <a href="https://drive.google.com/file/d/1GFRElGxFq5IkG9mi4zfUmtOHKrDomcNF/view?usp=sharing">
                <button
                  type="button"
                  class="text-white bg-green to-lime-400/50  focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-2xl px-14 py-2.5 text-center mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 mt-8"
                >
                  Download
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
