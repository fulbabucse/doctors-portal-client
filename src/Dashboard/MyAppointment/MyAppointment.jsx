import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-navy.vercel.app/bookings?email=${user?.email}`,
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

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <Helmet>
        <title>
          {user?.displayName} Your Appointments list - Doctors Portal
        </title>
      </Helmet>
      <div className="my-4">
        <h2 className="text-4xl font-semibold text-gray-700 text-center">
          My Appointments
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
                      Patient Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Treatment
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Appointment Date
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Appointment Time
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Payments
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookings?.map((booking, idx) => (
                    <tr
                      key={booking._id}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        {idx + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                        {booking?.patient}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                        {booking?.treatment}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                        {booking?.bookingDate}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                        {booking?.appointmentTime}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                        {booking?.price}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-1 whitespace-nowrap">
                        {booking?.price && !booking?.paid && (
                          <Link to={`/dashboard/payment/${booking?._id}`}>
                            <button
                              type="button"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                              className="inline-block px-4 py-1 bg-gradient-to-r from-primaryColor to-secondaryColor text-white font-medium text-lg leading-tight rounded-md shadow-md  hover:shadow-2xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-colors duration-200 ease-in-out"
                            >
                              Pay
                            </button>
                          </Link>
                        )}

                        {booking?.price && booking?.paid && (
                          <h4 className="text-md font-semibold text-primaryColor">
                            Paid
                          </h4>
                        )}
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

export default MyAppointment;
