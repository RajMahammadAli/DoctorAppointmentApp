import React, { useState } from "react";
import TickMark from "../../assets/TickMark.png";
import { FiClipboard } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Swal from "sweetalert2";

const BookAnAppointment = () => {
  const [selectedMorningSession, setSelectedMorningSession] = useState(null);
  const morningSessions = [
    { id: 1, session: "09:00 AM" },
    { id: 2, session: "09:30 AM" },
    { id: 3, session: "10:00 AM" },
    { id: 4, session: "10:15 AM" },
    { id: 5, session: "10:45 AM" },
    { id: 6, session: "11:00 AM" },
  ];
  const handleAppointment = () => {
    console.log("You have book an appointment");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your have successfully book an appointment",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSelectSession = (id) => {
    console.log(id);
    setSelectedMorningSession(id);
  };
  return (
    <>
      <div className="px-5 py-4 border rounded-lg">
        <div className="flex justify-between border px-5 py-3 rounded-2xl">
          <h1 className="text-[20px] font-semibold">Appointment Fee</h1>
          <p className="text-[#3A643B] text-[20px] font-semibold">₹699.00</p>
        </div>

        {/* mode of session */}
        <div>
          <div className="w-full pl-5 py-8 flex items-center gap-4">
            <div className="w-[560px]">
              <h1 className="text-[20px] font-bold">
                Select your mode of session
              </h1>
            </div>
            <div className="w-full">
              <hr />
            </div>
          </div>
          <div className="px-5 py-3 flex justify-between items-center">
            <div className="border px-10 py-3 rounded-lg text-center">
              <h1 className="text-[#1F1F1F] text-base font-[350]">In-Clinic</h1>
              <p className="text-[#606060] text-base font-normal">45 Mins</p>
            </div>
            <div className="bg-[#3a643b41] px-10 py-3 rounded-lg text-center border border-[#3A643B]">
              {" "}
              <div className="flex justify-center items-center gap-1 ">
                <h1 className="text-[#3A643B] text-[18px] font-bold">Video </h1>
                <span>
                  <img src={TickMark} alt="tickMark" className="w-5 h-5" />
                </span>
              </div>
              <p className="text-[#606060] text-base font-normal">45 Mins</p>
            </div>
            <div className="border px-10 py-3 rounded-lg text-center">
              {" "}
              <h1 className="text-[#1F1F1F] text-base font-[350]">Chat</h1>
              <p className="text-[#606060] text-base font-normal">10 Mins</p>
            </div>
          </div>
        </div>

        {/* select time slot */}
        <div>
          <div className="w-full pl-5 py-8 flex items-center gap-4">
            <div className="w-56">
              <h1 className="text-[20px] font-bold">Pick a time slot</h1>
            </div>
            <div className="w-full flex justify-center items-center gap-1">
              <div className="w-full border-b-2"></div>
              <div>
                <FiClipboard size={25} />
              </div>
            </div>
          </div>
          <div>
            <div className="ml-5 p-5 border rounded-lg flex justify-between items-center gap-2">
              <div className="w-7 h-7 border rounded-full flex justify-center items-center cursor-pointer">
                <FaChevronLeft />
              </div>
              <div className="flex justify-between items-center gap-3">
                <div className="bg-[#3a643b41] border border-[#3A643B] px-10 py-3 rounded-lg text-center">
                  <h1 className="text-[#3A643B] text-base font-semibold">
                    Mon, 10 Oct
                  </h1>
                  <p className="text-[#818181] text-base font-bold">10 slots</p>
                </div>
                <div className="border px-10 py-3 rounded-lg text-center">
                  <h1 className="text-[#1F1F1F] text-base font-semibold">
                    Tue, 11 Oct
                  </h1>
                  <p className="text-[#D5512E] text-base font-normal">
                    02 slots
                  </p>
                </div>
                <div className="border px-10 py-3 rounded-lg text-center">
                  <h1 className="text-[#1F1F1F] text-base font-semibold">
                    Wed, 12 Oct
                  </h1>
                  <p className="text-[#F1B93A] text-base font-normal">
                    05 slots
                  </p>
                </div>
              </div>
              <div className="w-7 h-7 border rounded-full flex justify-center items-center cursor-pointer">
                <FaChevronRight />
              </div>
            </div>
            {/* morning session */}
            <div>
              <h1 className="ml-5 my-8 text-[18px] font-bold">Morning</h1>
              <div className="ml-5 flex flex-wrap gap-4">
                {morningSessions.map((morningSession, index) => (
                  <button
                    onClick={() => handleSelectSession(morningSession.id)}
                    key={index}
                    className={
                      selectedMorningSession === morningSession.id
                        ? "px-4 py-3 border border-[#EBEBEB] rounded-2xl bg-[#3A643B] text-white"
                        : "px-4 py-3 border border-[#EBEBEB] rounded-2xl"
                    }
                  >
                    {morningSession.session}
                  </button>
                ))}
              </div>
            </div>
            {/* evening session */}
            <div>
              <h1 className="ml-5 my-8 text-[18px] font-bold">Evening</h1>
              <div className="ml-5 flex flex-wrap gap-4">
                <button className="px-4 py-3 border border-[#EBEBEB] rounded-2xl">
                  04:00 PM
                </button>
                <button className="px-4 py-3 border border-[#EBEBEB] rounded-2xl">
                  04:15 PM
                </button>
                <button className="px-4 py-3 border border-[#EBEBEB] rounded-2xl">
                  04:30 PM
                </button>
                <button className="px-4 py-3 border border-[#EBEBEB] rounded-2xl">
                  04:45 PM
                </button>
                <button className="px-4 py-3 border border-[#EBEBEB] rounded-2xl">
                  05:15 PM
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-10 mx-5 my-10">
          <button
            onClick={handleAppointment}
            className="w-full py-5 px-6 text-white text-[20px] font-normal rounded-lg bg-[#3A643B]"
          >
            Make An Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default BookAnAppointment;
