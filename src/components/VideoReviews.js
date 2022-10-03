import React from "react";

export default function VideoReviews() {
  const testimonials = [
    "KUEGSrpNSfA",
    "CODyOPsizrI",
    "0t4yquLvJDI",
    "cahQMTvACDk",
    "EdXT_Zi5t2g",
    "mZHx1-tA28k",
  ];
  return (
    <>
      <div className="text-white container mx-auto md:py-4">
        <h2 className="text-4xl font-bold  text-center">Testimonials</h2>
        <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 px-5 pb-16 pt-10 gap-5">
          {/* section  */}
          {testimonials.map((test) => (
            <div className="flex flex-col items-center w-full mx-auto">
              <div
                className="relative h-0 overflow-hidden max-w-full w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${test}`}
                  frameBorder={0}
                  title="Testimonial"
                  allowFullScreen=""
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          ))}
          {/* section  */}
        </div>
      </div>
    </>
  );
}
