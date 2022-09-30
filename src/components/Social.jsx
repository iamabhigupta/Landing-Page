import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Social() {
  // https://www.instagram.com/<username>/?__a=1

  return (
    <div>
      <div className="flex items-center justify-center flex-wrap p-5">
        <button className="bg-[#FF0000] py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-sm px-24 m-4">
          <FaYoutube className="w-10 h-10 fill-current" />
          <span className="text-2xl">1.14M</span>
        </button>
        <button className="bg-[#E1306C]  py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-sm px-24 m-4">
          <FaInstagram className="w-10 h-10 fill-current" />
          <span className="text-2xl">86.9K</span>
        </button>
        <button className="bg-[#0077b5]  py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-sm px-24 m-4">
          <FaLinkedinIn className="w-10 h-10 fill-current" />
          <span className="text-2xl">16.01K</span>
        </button>
      </div>
    </div>
  );
}
