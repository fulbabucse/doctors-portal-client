import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ modalData, setModalData, date, refetch }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBookingSubmit = (data) => {
    if (!user?.email) {
      toast.error("Please Login");
      return;
    }

    const booking = {
      patient: user?.displayName,
      treatment: modalData?.option?.name,
      bookingDate: date,
      appointmentTime: data.appointmentTime,
      email: user?.email,
      phoneNumber: data.phoneNumber,
      price: modalData?.option?.price,
    };

    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setModalData(false);
          toast.success("Booking Complete");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <div>
      {modalData ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setModalData(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <h1 className="text-xl text-center mb-3 font-semibold text-primaryColor">
                  {modalData?.option?.name}
                </h1>
                <form onSubmit={handleSubmit(handleBookingSubmit)}>
                  <div className="space-y-2">
                    <div>
                      <input
                        type="text"
                        defaultValue={date}
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-primaryColor focus:border-primaryColor block w-full p-3 dark:placeholder-gray-300 focus:outline-primaryColor"
                        placeholder="Date"
                      />
                    </div>
                    <div>
                      <select
                        {...register("appointmentTime")}
                        className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none"
                        aria-label="Default select example"
                      >
                        {modalData?.option?.slots?.map((slot, idx) => (
                          <option key={idx} defaultValue={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <input
                        type="text"
                        defaultValue={user?.displayName}
                        disabled={user?.email}
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-primaryColor focus:border-primaryColor block w-full p-3 dark:placeholder-gray-300 focus:outline-primaryColor"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        disabled={user?.email}
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-primaryColor focus:border-primaryColor block w-full p-3 dark:placeholder-gray-300 focus:outline-primaryColor"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        {...register("phoneNumber", {
                          required: "Phone Number required",
                          minLength: {
                            value: 11,
                            message: "11 character valid Phone number required",
                          },
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-primaryColor focus:border-primaryColor block w-full p-3 dark:placeholder-gray-300 focus:outline-primaryColor"
                        placeholder="Phone Number"
                      />
                      {errors?.phoneNumber && (
                        <p className="text-red-400 font-medium text-sm mt-1">
                          {errors.phoneNumber?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="items-center gap-2 mt-3 sm:flex">
                    <button className="inline-block w-full px-4 py-3 bg-gradient-to-r from-primaryColor to-secondaryColor text-white font-medium text-lg leading-tight rounded-md shadow-md  hover:shadow-2xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-colors duration-200 ease-in-out">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default BookingModal;
