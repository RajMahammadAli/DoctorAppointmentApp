import React, { useState } from "react";
import TickMark from "../../assets/TickMark.png";
import { FiClipboard } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Swal from "sweetalert2";
import SwiperPractice from "../swiper/SwiperPractice";
import { useNavigate } from "react-router-dom";

const BookAnAppointment = () => {
  const [selectedMorningSession, setSelectedMorningSession] = useState(null);
  const [selectedEveningSession, setSelectedEveningSession] = useState(null);
  const [selectedModeOfSession, setSelectedModeOfSession] = useState(null);

  const modeOfSessions = [
    { id: 1, mode: "In-Clinic", duration: "45 Mins" },
    { id: 2, mode: "Video", duration: "45 Mins" },
    { id: 3, mode: "Chat", duration: "10 Mins" },
  ];
  const morningSessions = [
    { id: 1, session: "09:00 AM" },
    { id: 2, session: "09:30 AM" },
    { id: 3, session: "10:00 AM" },
    { id: 4, session: "10:15 AM" },
    { id: 5, session: "10:45 AM" },
    { id: 6, session: "11:00 AM" },
  ];
  const eveningSessions = [
    { id: 1, session: "04:00 PM" },
    { id: 2, session: "04:15 PM" },
    { id: 3, session: "04:30 PM" },
    { id: 4, session: "04:45 PM" },
    { id: 5, session: "05:15 PM" },
  ];

  const navigate = useNavigate();
  const handleAppointment = () => {
    console.log("You have book an appointment");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your have successfully book an appointment",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/findDoctors");
  };

  const handleSelectSession = (id, sessionName) => {
    if (sessionName === "morning") {
      setSelectedMorningSession(id);
    }
    if (sessionName === "evening") {
      setSelectedEveningSession(id);
    }
    if (sessionName === "mode") {
      console.log(id);
      setSelectedModeOfSession(id);
    }
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

          <div className="px-16 py-3 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between items-center">
            {modeOfSessions.map((modeOfSession, index) => (
              <div
                onClick={() => handleSelectSession(modeOfSession.id, "mode")}
                key={index}
                className={
                  selectedModeOfSession === modeOfSession.id
                    ? "border border-[#3A643B] px-5 py-3 rounded-lg text-center cursor-pointer"
                    : "border px-5 py-3 rounded-lg text-center cursor-pointer"
                }
              >
                <div className="flex justify-center items-center gap-2">
                  <h1
                    className={
                      selectedModeOfSession === modeOfSession.id
                        ? "text-[#3A643B] text-base font-bold"
                        : " text-base font-[350]"
                    }
                  >
                    {modeOfSession.mode}{" "}
                  </h1>
                  {selectedModeOfSession === modeOfSession.id ? (
                    <img className="w-5 h-5" src={TickMark} />
                  ) : (
                    ""
                  )}
                </div>
                <p className="text-[#606060] text-base font-normal">
                  {modeOfSession.duration}
                </p>
              </div>
            ))}
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
            <div className="py-5 border rounded-lg">
              <SwiperPractice />
            </div>
            {/* morning session */}
            <div>
              <h1 className="ml-5 my-8 text-[18px] font-bold">Morning</h1>
              <div className="ml-5 flex flex-wrap gap-4">
                {morningSessions.map((morningSession, index) => (
                  <button
                    onClick={() =>
                      handleSelectSession(morningSession.id, "morning")
                    }
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
                {eveningSessions.map((eveningSession, index) => (
                  <button
                    onClick={() =>
                      handleSelectSession(eveningSession.id, "evening")
                    }
                    key={index}
                    className={
                      selectedEveningSession === eveningSession.id
                        ? "px-4 py-3 border border-[#EBEBEB] rounded-2xl bg-[#3A643B] text-white"
                        : "px-4 py-3 border border-[#EBEBEB] rounded-2xl"
                    }
                  >
                    {eveningSession.session}
                  </button>
                ))}
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
