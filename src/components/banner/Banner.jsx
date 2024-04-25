import React from "react";

import banner from "../../assets/amrutam.png";
import profilePic from "../../assets/profilePic.png";
import bluetic from "../../assets/bluetic.png";
import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Banner = () => {
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
  return (
    <div className="container mx-auto mt-14 w-full h-auto md:h-72 bg-[#FFF7E2] rounded-t-lg">
      <img
        className="w-full h-[140px] object-cover rounded-t-lg"
        src={banner}
        alt="banner image"
      />
      <div className="w-full relative">
        <div className="absolute left-5 -top-10">
          <div className="flex justify-center items-end gap-8">
            <img
              src={profilePic}
              alt="profile pic"
              className="w-[159px] h-[159px] object-cover rounded-full border-4 border-white "
            />

            <div>
              <h1 className="flex justify-center items-center gap-2 text-[20px] font-medium">
                Dr. Bruce Willis{" "}
                <span>
                  <img className="w-4" src={bluetic} alt="blueTic" />
                </span>
              </h1>
              <h4 className="text-[#3A643B] text-[15px] font-medium">
                Gynecologist
              </h4>
              <h4 className="flex justify-start items-center gap-2">
                <span className="text-[#626262] text-[15px] font-medium">
                  4.2
                </span>
                <span className="flex gap-1">
                  <IoStarSharp className="text-[#F79624]" />
                  <IoStarSharp className="text-[#F79624]" />
                  <IoStarSharp className="text-[#F79624]" />
                  <IoStarSharp className="text-[#F79624]" />
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-end items-center mt-40 md:mt-16 px-12">
        <div className="w-full md:w-[60%] flex justify-end gap-8 my-4">
          <div className="flex flex-col items-center">
            <h3 className="text-[14px] text-[#3A643B] font-medium">
              Followers
            </h3>
            <p className="text-[24px] font-semibold text-[#212529]">850</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[14px] text-[#3A643B] font-medium">
              Following
            </h3>
            <p className="text-[24px] font-semibold text-[#212529]">18K</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[14px] text-[#3A643B] font-medium">Posts</h3>
            <p className="text-[24px] font-semibold text-[#212529]">250</p>
          </div>
        </div>
        <div className="w-full md:w-[40%] flex justify-end mb-5">
          <button
            onClick={handleAppointment}
            className="bg-[#3A643B] px-5 py-3 rounded-lg text-[20px] text-white font-medium"
          >
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
