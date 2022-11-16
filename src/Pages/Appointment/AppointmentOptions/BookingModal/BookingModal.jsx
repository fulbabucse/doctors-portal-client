import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({ showModal, setShowModal, date }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const handleBookingSubmit = (data) => {
    const booking = {
      patient: user?.displayName,
      treatment: showModal?.option?.name,
      bookingDate: date,
      appointmentTime: data.appointmentTime,
      email: user?.email,
      phoneNumber: data.phoneNumber,
    };
    console.log(booking);
    setShowModal(false);
  };

  return (
    <div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <h1 className="text-xl text-center mb-3 font-semibold text-primaryColor">
                  {showModal?.option?.name}
                </h1>
                <form
                  onSubmit={handleSubmit(handleBookingSubmit)}
                  className="text-center"
                >
                  <div className="space-y-2">
                    <div>
                      <input
                        type="text"
                        defaultValue={date}
                        disabled
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
      border border-solid border-primaryColor/20
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none"
                        aria-label="Default select example"
                      >
                        {showModal?.option?.slots?.map((slot, idx) => (
                          <option key={idx} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <input
                        type="text"
                        defaultValue={user?.displayName}
                        disabled
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-primaryColor focus:border-primaryColor block w-full p-3 dark:placeholder-gray-300 focus:outline-primaryColor"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        disabled
                        className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-md focus:ring-primaryColor focus:border-primaryColor block w-full p-3 dark:placeholder-gray-300 focus:outline-primaryColor"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
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
                        <p className="text-red-400 font-medium">
                          {errors.phoneNumber?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="items-center gap-2 mt-3 sm:flex">
                    <button className="w-full mt-2 p-2.5 flex-1 text-white bg-primaryColor rounded-md outline-none ring-offset-2 ring-primaryColor focus:ring-2">
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
