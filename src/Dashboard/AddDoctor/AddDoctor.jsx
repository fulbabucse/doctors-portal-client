import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { data: appointmentSpeciality = [] } = useQuery({
    queryKey: ["appointmentSpeciality"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentSpeciality`);
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctors = (doctorData) => {
    const formData = new FormData();
    formData.append("image", doctorData.image[0]);

    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_Imgbb_API_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imageData) => {
        const doctorInfo = {
          name: doctorData.name,
          email: doctorData.email,
          speciality: doctorData.speciality,
          image: imageData.data.url,
        };

        fetch(`http://localhost:5000/doctors`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem(
              "doctors-portal-access-token"
            )}`,
          },
          body: JSON.stringify(doctorInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Successfully added a new Doctor");
              navigate("/dashboard/manage-doctors");
            }
          });
      });
  };

  return (
    <div className="w-full md:w-3/5 lg:w-2/5 mx-auto my-3">
      <Helmet>
        <title>Add Doctors - Doctors Portal</title>
      </Helmet>
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
            {...register("speciality", {
              required: "Speciality is required",
            })}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primaryColor focus:border-primaryColor block w-full p-3 outline-none"
          >
            {appointmentSpeciality.map((speaciality) => (
              <option key={speaciality._id} value={speaciality.name}>
                {speaciality.name}
              </option>
            ))}
          </select>
          {errors.speciality && (
            <p className="text-red-400 text-sm font-medium">
              {errors.speciality?.message}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <div className="w-full">
            <label
              htmlFor="formFile"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Doctor Picture
            </label>
            <input
              className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none"
              type="file"
              {...register("image", {
                required: "Picture is required",
              })}
              id="formFile"
            />
            {errors.image && (
              <p className="text-red-400 text-sm font-medium">
                {errors.image?.message}
              </p>
            )}
          </div>
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
