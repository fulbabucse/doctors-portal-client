import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";
import AgreeModal from "../AgreeModal/AgreeModal";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);
  const cancelModal = () => {
    setDeleteDoctor(null);
  };
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-navy.vercel.app/doctors",
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem(
              "doctors-portal-access-token"
            )}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteDoctor = (doctor) => {
    fetch(
      `https://doctors-portal-server-navy.vercel.app/doctors/${doctor?._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "doctors-portal-access-token"
          )}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.error("Doctor delete successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <Helmet>
        <title>Manage Doctors - Doctors Portal</title>
      </Helmet>
      <div className="my-4">
        <h2 className="text-4xl font-semibold text-gray-700 text-center">
          All Doctors {doctors.length}
        </h2>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Doctors Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Speciality
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="text-sm text-center font-medium text-gray-900 px-6 py-4"
                    >
                      Doctors Images
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {doctors?.map((doctor, idx) => (
                    <tr
                      key={doctor._id}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {idx + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {doctor?.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {doctor?.speciality}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {doctor?.email}
                      </td>
                      <td className="flex justify-center text-sm text-gray-900 font-light px-6 whitespace-nowrap">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={doctor?.image}
                          alt={doctor?.name}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => setDeleteDoctor(doctor)}
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          data-bs-toggle="modal"
                          data-bs-target="#agree-modal"
                          className="inline-block px-3 py-2 bg-dangerColor text-white font-medium text-lg leading-tight rounded-md shadow-md  hover:shadow-2xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-colors duration-200 ease-in-out"
                        >
                          Delete
                        </button>
                        <AgreeModal
                          title={`Are you sure delete this doctor`}
                          message={`If you delete ${deleteDoctor?.name}. It can't be back?`}
                          cancelModal={cancelModal}
                          handleDeleteDoctor={handleDeleteDoctor}
                          deleteDoctor={deleteDoctor}
                        ></AgreeModal>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;
