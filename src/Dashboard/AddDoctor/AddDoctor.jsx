import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctors = (doctorData) => {
    console.log(doctorData);
  };

  return (
    <div className="w-full md:w-3/5 lg:w-2/5 mx-auto my-3">
      <div className="my-3">
        <h2 className="text-4xl font-semibold text-gray-700 text-center">
          Add a New Doctor
        </h2>
      </div>
      <form onSubmit={handleSubmit(handleAddDoctors)} className="space-y-6">
        <div className="relative z-0 w-full group">
          <input
            type="text"
            {...register("name", {
              required: "Doctor name is required",
            })}
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Doctor Name
          </label>
          {errors.name && (
            <p className="text-red-400 text-sm font-medium">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="relative z-0 w-full group">
          <input
            type="email"
            {...register("email", {
              required: "Email address is required",
            })}
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
          {errors.email && (
            <p className="text-red-400 text-sm font-medium">
              {errors.email?.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
          >
            Select an Speciality
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryColor focus:border-primaryColor block w-full p-3 outline-none"
          >
            <option selected>Choose an Speciality</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <button
          type="submit"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-4 py-3 bg-gradient-to-r from-primaryColor to-secondaryColor text-white font-medium text-lg leading-tight rounded-md shadow-md  hover:shadow-2xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-colors duration-200 ease-in-out"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
