import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Whatsapp() {
  const countdown4 = () => {
    const countDate4 = new Date("July 17, 2022 10:00:00");
    const now4 = new Date().getTime();
    const gap4 = countDate4 - now4;

    const second4 = 1000;
    const minute4 = second4 * 60;
    const hour4 = minute4 * 60;
    const day4 = hour4 * 24;

    const textDay4 = Math.floor(gap4 / day4);
    const textHour4 = Math.floor((gap4 % day4) / hour4);
    const textMinute4 = Math.floor((gap4 % hour4) / minute4);
    const textSecond4 = Math.floor((gap4 % minute4) / second4);

    document.querySelector(".day4").innerText = textDay4;
    document.querySelector(".hour4").innerText = textHour4;
    document.querySelector(".minute4").innerText = textMinute4;
    document.querySelector(".second4").innerText = textSecond4;

    if (gap4 < 0) {
      clearInterval(countdown4);
      document.querySelector(".day4").innerText = "00";
      document.querySelector(".hour4").innerText = "00";
      document.querySelector(".minute4").innerText = "00";
      document.querySelector(".second4").innerText = "00";
    }
  };

  setInterval(() => {
    countdown4();
  }, 1000);

  return (
    <>
      <div className="flex md:hidden fixed inset-x-0 bottom-0 z-50 bg-[#193247] text-white p-4">
        <div className="font-medium">
          <span className="text-xl mr-4 font-semibold">₹34,999</span>
          <span className="text-red-700 line-through">
            <span className="text-white text-sm">₹72,798</span>
          </span>
          <div>
            <p className="text-xs">
              {/* <span className="ml-1 font-bold">17th Jul, 2022</span> */}
              {/* <span className="day4 ml-1 font-bold">00</span>
              <span className="font-bold mr-1">d</span>
              <span className="hour4 font-bold">00:</span>
              <span className="font-bold mr-1">h</span>
              <span className="minute4 font-bold">00:</span>
              <span className="font-bold mr-1">m</span>
              <span className="second4 font-bold">00</span>
              <span className="font-bold mr-1">s</span> */}
              Join Waitlist
            </p>
          </div>
        </div>
        <div className="flex justify-end w-1/2">
          <Stack direction="row" spacing={2}>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "#3d3d3d",
              }}
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<FaShoppingCart />}
            >
              BUY NOW
            </Button>
          </Stack>
        </div>
      </div>
      <a
        href="https://wa.link/1821of"
        className="float mb-12 -mr-5 md:-mr-0 md:mb-0"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="text-5xl md:text-5xl text-center mt-[6px] ml-[6px]" />
      </a>
    </>
  );
}
