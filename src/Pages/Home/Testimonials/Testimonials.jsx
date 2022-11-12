import React from "react";
import comma from "../../../assets/images/comma.png";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const Testimonials = () => {
  return (
    <div className="space-y-5 lg:space-y-9">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-primaryColor text-2xl font-semibold">
            Testimonials
          </h4>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            What Our Patients Says
          </h1>
        </div>
        <div>
          <img className="w-10 h-10 lg:w-20 lg:h-20" src={comma} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-lg p-5 shadow-xl space-y-5">
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex items-center gap-2">
            <div className="ring-2 ring-primaryColor rounded-full">
              <img
                className="w-16 h-16 bg-white rounded-full p-1"
                src={people1}
                alt=""
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Fahim Islam
              </h2>
              <h5>Rangpur, Bangladesh</h5>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-5 shadow-xl space-y-5">
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex items-center gap-2">
            <div className="ring-2 ring-primaryColor rounded-full">
              <img
                className="w-16 h-16 bg-white rounded-full p-1"
                src={people2}
                alt=""
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Emilia Clark
              </h2>
              <h5>United Kingdom</h5>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-5 shadow-xl space-y-5">
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex items-center gap-2">
            <div className="ring-2 ring-primaryColor rounded-full">
              <img
                className="w-16 h-16 bg-white rounded-full p-1"
                src={people3}
                alt=""
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Jennifer Lawrence
              </h2>
              <h5>California, USA</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
