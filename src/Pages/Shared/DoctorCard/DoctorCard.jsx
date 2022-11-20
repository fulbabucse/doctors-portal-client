import React from "react";

const DoctorCard = ({ doctor }) => {
  const { name, image, speciality, email } = doctor;

  return (
    <div>
      <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            className="object-cover object-center w-full h-56"
            src={image}
            alt="avatar"
          />
        </div>

        <div className="flex items-center px-6 py-3 bg-primaryColor">
          <h1 className="mx-3 text-lg font-semibold text-white">{name}</h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            {speciality}
          </h1>

          <a
            href={`mailto:${email}`}
            className="py-2 text-gray-700 dark:text-gray-400"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
