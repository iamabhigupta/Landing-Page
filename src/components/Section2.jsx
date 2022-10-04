import { FaHandPointRight } from "react-icons/fa";

export default function Section2() {
  return (
    <div className="text-white">
      <div className="text-center">
        <h3 className=" text-3xl italic font-medium">Introducing…</h3>
        <h2 className="text-3xl sm:text-4xl font-bold pt-5">
          The Most Interactive and Practical <br /> Course on Digital Marketing
        </h2>
        <h3 className="text-2xl sm:text-3xl font-medium pt-5">
          Become a Digital Marketing Expert <br /> who is able to
          <span className="underline ml-2">grow any business</span>
        </h3>
      </div>
      <div className="px-7 md:px-32">
        <p className="text-center text-base sm:text-xl  font-medium pt-10">
          We at Lapaas are pleased to announce the launch of our new digital
          marketing program! <br /> This program will teach you all about how to
          best utilise your time in order to be successful in the digital
          marketing world. <br />
          <span className="font-extrabold underline mx-1">
            With 100 days worth of content + live classes + assessed homework
            assignments +mentorship.
          </span>
          <br />
          Our program is designed to give you all the skills and knowledge you
          need to be successful in digital marketing. <br /> You’ll learn how to
          create and execute successful marketing campaigns, measure their
          results, and optimise them for even better performance.
        </p>
      </div>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-[#D14B39] bg-[#D14B39] border p-4 rounded-md ">
              <div>
                <FaHandPointRight className="text-4xl mr-5" />
              </div>
              <div className="flex-grow text-base sm:text-xl font-medium">
                <p className="">
                  Course will start on 30th Oct and ends on 5th Feb
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-[#D14B39] bg-[#D14B39] border p-4 rounded-md ">
              <div>
                <FaHandPointRight className="text-4xl mr-5" />
              </div>
              <div className="flex-grow text-base sm:text-xl font-medium">
                <p className="">
                  Duration of the Program is 100 days and Live classes will be
                  only on sundays
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-[#D14B39] bg-[#D14B39] border p-4 rounded-md ">
              <div>
                <FaHandPointRight className="text-4xl mr-5" />
              </div>
              <div className="flex-grow text-base sm:text-xl font-medium">
                <p>
                  Recording of All Live Classes will be provided till 19th Feb
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-[#D14B39] bg-[#D14B39] border p-4 rounded-md ">
              <div>
                <FaHandPointRight className="text-4xl mr-5" />
              </div>
              <div className="flex-grow text-base sm:text-xl font-medium">
                <p>
                  In weekdays you have to work on Assignments and Live Projects.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-[#D14B39] bg-[#D14B39] border p-4 rounded-md ">
              <div>
                <FaHandPointRight className="text-4xl mr-5" />
              </div>
              <div className="flex-grow text-base sm:text-xl font-medium">
                <p>
                  Sunday Class Timing will be 11 am to 2 pm and 3 pm TO 7 pm.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-[#D14B39] bg-[#D14B39] border p-4 rounded-md ">
              <div>
                <FaHandPointRight className="text-4xl mr-5" />
              </div>
              <div className="flex-grow text-base sm:text-xl font-medium">
                <p>Whatsapp and Call Support will be provided by Team Lapaas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center uppercase mb-8 cursor-pointer">
        <a href="https://rzp.io/l/nqYBVu8dXj">
          <button
            type="button"
            className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-green-600 text-lg sm:text-2xl text-white font-medium uppercase hover:bg-green-700"
          >
            BECOME DIGITAL MARKETING SCIENTIST
          </button>
        </a>
      </div>
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-[#D14B39] text-lg sm:text-2xl text-white font-medium hover:bg-[#b44132]"
        >
          Enrollment Ends - 29th Oct
        </button>
      </div>
      <p className="italic md:w-1/2 mx-5 md:mx-auto mt-5 text-center text-xl">
        200+ Hours of Content + 25+ Resources + Private WhatsApp Group + 6
        Months Support + Mentorship + <br /> Practical Assignment
      </p>
    </div>
  );
}
