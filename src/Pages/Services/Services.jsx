import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";

const Services = () => {
  return (
    <div className="my-3 lg:my-10">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-[#11D0DB] uppercase">
          Our Services
        </h3>
        <h1 className="text-3xl font-semibold text-gray-800">
          Services We Provide
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5 lg:my-5">
        <div className="flex flex-col items-center rounded-lg p-3 shadow-xl">
          <img src={fluoride} alt="" />
          <h3 className="text-xl lg:text-2xl font-base text-gray-800 capitalize">
            Fluoride treatment
          </h3>
          <p className="text-center text-gray-600 font-base">
            Fluoride varnish can be applied to both baby teeth and adult teeth
            by a dentist. The process involves painting a varnish containing
            high levels of fluoride onto the surface of the tooth twice a year
            to prevent decay. It works by strengthening tooth enamel, making it
            more resistant to decay.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg p-3 shadow-xl">
          <img src={cavity} alt="" />
          <h3 className="text-xl lg:text-2xl font-base text-gray-800 capitalize">
            Cavity filling
          </h3>
          <p className="text-center text-gray-600 font-base">
            Is it painful to have cavity fillings? No. Your dentist will numb
            the area and use a numbing gel before injecting a local anesthetic
            known as Lidocaine. You may feel a bit of a sting, but that's a
            reaction from the local anesthetic when it starts to block the nerve
            signals to stop the pain.
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg p-3 shadow-xl">
          <img src={whitening} alt="" />
          <h3 className="text-xl lg:text-2xl font-base text-gray-800 capitalize">
            Teeth whitening
          </h3>
          <p className="text-center text-gray-600 font-base">
            Yellow teeth can be completely whitened with teeth whitening
            technologies at the dentist or at home. Depending on the status of
            your yellow teeth as well as your needs, the doctor will advise and
            prescribe the appropriate method.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center lg:mt-10">
        <div className="flex justify-center">
          <img
            style={{ maxWidth: "458px", height: "576px" }}
            src={treatment}
            alt="Treatment"
            className="treatment-img rounded-md"
          />
        </div>
        <div className="space-y-1 lg:space-y-3">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="secondary-font font-medium text-gray-600/90">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-3 py-3 bg-[#12D0DC] text-white font-medium text-base leading-tight rounded-md shadow-md hover:bg-[#0ebeca] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
