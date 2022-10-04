import {
  FaGift,
  FaWhatsapp,
  FaRobot,
  FaWordpress,
  FaHandshake,
} from "react-icons/fa";
import { red } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

export default function Section5() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="text-white">
      <div className="text-center px-2 mt-14">
        <h3 className="text-3xl italic font-medium">
          Hurry Up Don’t Miss on these...
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold pt-5">
          Once in Lifetime Opportunity
        </h2>
      </div>
      <div className="text-center ">
        <h2 className="text-2xl sm:text-3xl font-bold pt-5">
          With this Exclusive Course, You will be able to
        </h2>
      </div>
      <div className="text-white mt-7 md:w-3/5 w-full px-3 md:px-0 flex flex-col md:flex-row mx-auto text-xl md:text-3xl font-semibold">
        <div className="text-white py-3 w-full px-2 md:px-5  rounded-sm flex items-center">
          <Checkbox
            {...label}
            style={{
              color: "#fff",
              borderRadius: "2px",
            }}
            // defaultChecked
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 30 },
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <h3 className="underline text-[#D14B39] underline-offset-4 decoration-2 md:decoration-4">
            <span className="text-white">
              Grow your Business using Digital Marketing
            </span>
          </h3>
        </div>
      </div>
      <div className="text-white md:w-3/5 w-full px-3 md:px-0 flex flex-col md:flex-row mx-auto text-xl md:text-3xl font-semibold">
        <div className="text-white py-3 w-full px-2 md:px-5  rounded-sm flex items-center">
          <Checkbox
            {...label}
            style={{
              color: "#fff",
              borderRadius: "2px",
            }}
            // defaultChecked
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 30 },
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <h3 className="underline text-[#D14B39] underline-offset-4 decoration-2 md:decoration-4">
            <span className="text-white">Get Job as a Digital Marketing</span>
          </h3>
        </div>
      </div>
      <div className="text-white md:w-3/5 w-full px-3 md:px-0 flex flex-col md:flex-row mx-auto text-xl md:text-3xl font-semibold">
        <div className="text-white py-3 w-full px-2 md:px-5  rounded-sm flex items-center">
          <Checkbox
            {...label}
            style={{
              color: "#fff",
              borderRadius: "2px",
            }}
            // defaultChecked
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 30 },
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <h3 className="underline text-[#D14B39] underline-offset-4 decoration-2 md:decoration-4">
            <span className="text-white">
              Work as a Digital Marketing Freelancer
            </span>
          </h3>
        </div>
      </div>
      <div className="text-white md:w-3/5 w-full px-3 md:px-0 flex flex-col md:flex-row mx-auto text-xl md:text-3xl font-semibold">
        <div className="text-white py-3 w-full px-2 md:px-5  rounded-sm flex items-center">
          <Checkbox
            {...label}
            style={{
              color: "#fff",
              borderRadius: "2px",
            }}
            // defaultChecked
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 30 },
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <h3 className="underline text-[#D14B39] underline-offset-4 decoration-2 md:decoration-4">
            <span className="text-white">
              Grow your Business using Digital Marketing
            </span>
          </h3>
        </div>
      </div>
      <div className="text-white md:w-3/5 w-full px-3 md:px-0 flex flex-col md:flex-row mx-auto text-xl md:text-3xl font-semibold">
        <div className="text-white py-3 w-full px-2 md:px-5  rounded-sm flex items-center">
          <Checkbox
            {...label}
            style={{
              color: "#fff",
              borderRadius: "2px",
            }}
            // defaultChecked
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 30 },
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <h3 className="underline text-[#D14B39] underline-offset-4 decoration-2 md:decoration-4">
            <span className="text-white">Become Social Media Influencer</span>
          </h3>
        </div>
      </div>
      <div className="text-white md:w-3/5 w-full px-3 md:px-0 flex flex-col md:flex-row mx-auto text-xl md:text-3xl font-semibold mb-8">
        <div className="text-white py-3 w-full px-2 md:px-5  rounded-sm flex items-center">
          <Checkbox
            {...label}
            style={{
              color: "#fff",
              borderRadius: "2px",
            }}
            // defaultChecked
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 30 },
              color: red[800],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <h3 className="underline text-[#D14B39] underline-offset-4 decoration-2 md:decoration-4">
            <span className="text-white">Start your Online Business</span>
          </h3>
        </div>
      </div>
      <div className="flex justify-center uppercase py-5">
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
      <div className="text-center px-2 mt-10">
        <h3 className="text-3xl italic font-medium">
          Wait You will also get these
        </h3>
        <h2 className="text-3xl sm:text-4xl font-bold pt-5">
          EXTRA BONUSES if you buy these today
        </h2>
      </div>
      <div className="flex flex-col items-center">
        {/* Bonus1  */}
        <div className="mt-10 mx-5 md:mx-20 lg:mx-28 max-w-6xl border-4 border-green-600  p-5 sm:p-10 md:w-full ">
          <div className="relative flex flex-col-reverse md:flex-row items-center">
            <div className="relative py-10 px-4 w-full md:w-1/2 lg:w-2/5 flex flex-col space-y-6  text-center sm:text-left">
              <div className="flex text-9xl justify-center items-center">
                <FaRobot />
              </div>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mt-3 uppercase">
                Bonus 1:
              </h2>
              <h3 className="text-xl lg:text-2xl font-bold mt-3">
                1 Year Super Chatbot Business Plan Subscription Worth- ₹7200
              </h3>
              <p className="text-lg flex flex-col gap-6 mt-4">
                This subscription will allow you to create Instagram and
                Facebook Chatbot and much more.
              </p>
            </div>
          </div>
        </div>
        {/* Bonus2 */}

        <div className="mt-10 mx-5 md:mx-20 lg:mx-28 max-w-6xl border-4 border-green-600  p-5 sm:p-10 md:w-full">
          <div className="relative flex flex-col-reverse md:flex-row items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mt-3 uppercase">
                Bonus 2:
              </h2>
              <h3 className="text-xl lg:text-2xl font-bold mt-3">
                1 Year Lapaas Website Builder Subscription Worth- ₹3600
              </h3>
              <p className="text-lg flex flex-col gap-6 mt-4">
                With this subscription you can create a basic website in a few
                minutes for your clients without hosting.
              </p>
            </div>
            <div className="relative py-10 px-4 w-full md:w-1/2 lg:w-2/5 flex flex-col space-y-6  text-center sm:text-left">
              <div className="flex text-9xl justify-center items-center">
                <FaGift />
              </div>
            </div>
          </div>
        </div>
        {/* Bonus3  */}
        <div className="mt-10 mx-5 md:mx-20 lg:mx-28 max-w-6xl border-4 border-green-600  p-5 sm:p-10 md:w-full">
          <div className="relative flex flex-col-reverse md:flex-row items-center">
            <div className="relative py-10 px-4 w-full md:w-1/2 lg:w-2/5 flex flex-col space-y-6  text-center sm:text-left">
              <div className="flex text-9xl justify-center items-center">
                <FaWordpress />
              </div>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mt-3 uppercase">
                Bonus 3:
              </h2>
              <h3 className="text-xl lg:text-2xl font-bold mt-3">
                Divi Wordpress Theme and another Necessary Plugins Worth- ₹10000
              </h3>
              <p className="text-lg flex flex-col gap-6 mt-4">
                We will provide a divi paid theme and another necessary plugin
                which will help you to create a stunning wordpress website.
              </p>
            </div>
          </div>
        </div>

        {/* Bonus4 */}

        <div className="mt-10 mx-5 md:mx-20 lg:mx-28 max-w-6xl border-4 border-green-600  p-5 sm:p-10 md:w-full">
          <div className="relative flex flex-col-reverse md:flex-row items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mt-3 uppercase">
                Bonus 4:
              </h2>
              <h3 className="text-xl lg:text-2xl font-bold mt-3">
                Hand Holding Support- Priceless
              </h3>
              <p className="text-lg flex flex-col gap-6 mt-4">
                We will also provide Whatsapp and Call Support to clear all your
                doubts and provide help in completing assignments.
              </p>
            </div>
            <div className="relative py-10 px-4 w-full md:w-1/2 lg:w-2/5 flex flex-col space-y-6  text-center sm:text-left">
              <div className="flex text-9xl justify-center items-center">
                <FaHandshake />
              </div>
            </div>
          </div>
        </div>
        {/* Bonus5  */}
        <div className="mt-10 mx-5 md:mx-20 lg:mx-28 max-w-6xl border-4 border-green-600  p-5 sm:p-10 md:w-full">
          <div className="relative flex flex-col-reverse md:flex-row items-center">
            <div className="relative py-10 px-4 w-full md:w-1/2 lg:w-2/5 flex flex-col space-y-6  text-center sm:text-left">
              <div className="flex text-9xl justify-center items-center">
                <FaWhatsapp />
              </div>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mt-3 uppercase">
                Bonus 5:
              </h2>
              <h3 className="text-xl lg:text-2xl font-bold mt-3">
                WhatsApp Group- Priceless
              </h3>
              <p className="text-lg flex flex-col gap-6 mt-4">
                We will also create a Whatsapp Group for Lifetime in which we
                all the students can discuss with other students and as well as
                also ask their query.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
