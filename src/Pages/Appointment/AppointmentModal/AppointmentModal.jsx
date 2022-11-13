import React from "react";
import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const AppointmentModal = ({ treatment, selected, setTreatment }) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = treatment;
  const bookingDate = format(selected, "PP");

  const handleBookingAppointment = (e) => {
    e.preventDefault();
    const form = e.target;
    const appointmentTime = form.slots.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const user = {
      patientName,
      bookingDate,
      appointmentTime,
      email,
      phone,
      treatment: name,
    };
    if (phone.length < 11) {
      toast.error("Phone number at least 11 Character");
      return;
    }
    console.log(user);
  };
  return (
    <div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="appointmentModal"
        tabIndex="-1"
        aria-labelledby="appointmentModal"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4  rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="appointmentModal"
              >
                {name}
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <form onSubmit={handleBookingAppointment} className="space-y-3">
                <div className="form-group">
                  <input
                    type="text"
                    value={bookingDate}
                    disabled
                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-primaryColor/20
          rounded
          transition
          ease-in-out
          m-0
          focus:text-primaryColor focus:bg-white focus:border-primaryColor focus:outline-none"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder="Name"
                  />
                </div>
                <select
                  name="slots"
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
                  {slots?.map((slot, idx) => (
                    <option key={idx} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    disabled={user?.displayName}
                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-primaryColor/20
          rounded
          transition
          ease-in-out
          m-0
          focus:text-primaryColor focus:bg-white focus:border-primaryColor focus:outline-none"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-primaryColor/20
          rounded
          transition
          ease-in-out
          m-0
          focus:text-primaryColor focus:bg-white focus:border-primaryColor focus:outline-none"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    disabled={user?.email}
                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-primaryColor/20
          rounded
          transition
          ease-in-out
          m-0
          focus:text-primaryColor focus:bg-white focus:border-primaryColor focus:outline-none"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder="Email"
                  />
                </div>
                <button
                  type="submit"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block px-4 py-3 bg-gradient-to-r from-primaryColor to-secondaryColor text-white font-medium text-lg leading-tight rounded-md shadow-md w-full  hover:shadow-2xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-colors duration-200 ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
