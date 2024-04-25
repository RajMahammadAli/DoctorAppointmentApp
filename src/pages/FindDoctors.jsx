import React from "react";
import bannerImage from "../assets/banner.png";
import "../index.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import doctorProfileImage from "../assets/docProfilePic.png";
import { IoStarSharp } from "react-icons/io5";
import { RiCapsuleLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";

export const FindDoctors = () => {
  const style = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <>
      <div className="w-full h-64" style={style}>
        <div className="container w-full h-full mx-auto flex flex-col justify-center items-center">
          <div>
            <h1 className="text-[32px] ">
              Find expert Doctors for an In-clinic session here{" "}
            </h1>
          </div>
          <div className="w-full flex justify-center items-center gap-4 my-3">
            <div className="relative">
              <select className="w-48 pl-8 px-5 py-2 rounded-lg focus:outline-none border text-center">
                <option>Select Location</option>
                <option>New Delhi</option>
                <option>Guzrat</option>
                <option>Kolkata</option>
              </select>
              <div className="absolute top-2 left-2">
                <FaLocationDot className="text-[#3A643B]" size={25} />
              </div>
            </div>
            <div className="relative">
              <input
                className="w-96 pl-5 py-2 rounded-lg focus:outline-none border"
                type="text"
                placeholder="eg. Doctor, specialisation, clinic name"
              />
              <div className="absolute top-2 right-2">
                <FaArrowRight className="text-[#3A643B]" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 my-5">
        <select className="bg-[#F3F3F3] focus:outline-none border px-7 py-2 rounded-lg">
          <option>Expertise</option>
          <option>Hair Care</option>
          <option>Face Care</option>
          <option>Body Care</option>
        </select>
        <select className="bg-[#F3F3F3] focus:outline-none border px-7 py-2 rounded-lg">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select className="bg-[#F3F3F3] focus:outline-none border px-7 py-2 rounded-lg">
          <option>Fees</option>
          <option>Rs.0-Rs.500</option>
          <option>Rs.500-Rs.1000</option>
          <option>Rs.1000-Rs.1500</option>
        </select>
        <select className="bg-[#F3F3F3] focus:outline-none border px-7 py-2 rounded-lg">
          <option>Languages</option>
          <option>Hidni</option>
          <option>Bangla</option>
          <option>English</option>
        </select>
        <select className="bg-[#F3F3F3] focus:outline-none border px-7 py-2 rounded-lg">
          <option>All Filters</option>
          <option>Expertise</option>
          <option>Gender</option>
          <option>Fees</option>
          <option>Languages</option>
        </select>
      </div>
      <hr />
      <div className="my-10 flex justify-end gap-5 px-28">
        <div className="bg-[#EAF2EA] px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer">
          <h3>Hair Care</h3> <IoCloseOutline size={22} />
        </div>
        <div className="bg-[#EAF2EA] px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer">
          <h3>Female</h3> <IoCloseOutline size={22} />
        </div>
        <div className="bg-[#EAF2EA] px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer">
          <h3>Rs.0-Rs.500</h3> <IoCloseOutline size={22} />
        </div>
        <div className="bg-[#EAF2EA] px-3 py-2 rounded-2xl flex justify-center items-center cursor-pointer">
          <h3>Hindi</h3> <IoCloseOutline size={22} />
        </div>
      </div>

      <div className="container mx-auto my-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#FFF7E2] rounded-2xl px-16 py-10 flex flex-col justify-center items-center">
            <div className="relative">
              <img
                src={doctorProfileImage}
                alt="doctor Profile image"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="absolute bottom-0 left-5 flex justify-center items-center bg-black text-white px-3 rounded-2xl">
                4.5 <IoStarSharp className="text-[#F79624]" />
              </div>
            </div>
            <div>
              <h1 className="text-[32px] font-bold text-[#2E2F2E]">
                Dr. Prerna Narang
              </h1>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <RiCapsuleLine className="text-[#3A643B]" />
                <p className="text-[#646665]">Male-Female Infertility</p>
              </div>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-[#3A643B]" />
                <p className="text-[#646665]">7 years of Experience</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineMessage className="text-[#3A643B]" />
                <p className="text-[#646665]">
                  Speaks: English, Hindi, Marathi
                </p>
              </div>
            </div>
            <div className="flex gap-4 my-4">
              <div className="border border-[#3A643B] px-1 py-2 rounded-xl text-center cursor-pointer">
                <h1 className="text-[#3C3C3C] text-[14px] font-semibold">
                  Video Consultation
                </h1>
                <p className="font-bold text-[#3A643B]">₹800</p>
              </div>
              <div className="border border-[#3A643B] px-1 py-2 rounded-xl text-center cursor-pointer">
                <h1 className="text-[#3C3C3C] text-[14px] font-semibold">
                  Chat Consultation
                </h1>
                <p className="font-bold text-[#3A643B]">Free</p>
              </div>
            </div>
            <div>
              <button className="w-full py-2 px-6 text-[#3A643B] text-[20px] font-normal rounded-lg border border-[#3A643B]">
                View Profile
              </button>
              <button className="w-full py-2 px-6 text-white text-[20px] font-normal rounded-lg bg-[#3A643B] my-3">
                Book a consultation
              </button>
            </div>
          </div>
          <div className="bg-[#FFF7E2] rounded-2xl px-16 py-10 flex flex-col justify-center items-center">
            <div className="relative">
              <img
                src={doctorProfileImage}
                alt="doctor Profile image"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="absolute bottom-0 left-5 flex justify-center items-center bg-black text-white px-3 rounded-2xl">
                4.5 <IoStarSharp className="text-[#F79624]" />
              </div>
            </div>
            <div>
              <h1 className="text-[32px] font-bold text-[#2E2F2E]">
                Dr. Prerna Narang
              </h1>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <RiCapsuleLine className="text-[#3A643B]" />
                <p className="text-[#646665]">Male-Female Infertility</p>
              </div>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-[#3A643B]" />
                <p className="text-[#646665]">7 years of Experience</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineMessage className="text-[#3A643B]" />
                <p className="text-[#646665]">
                  Speaks: English, Hindi, Marathi
                </p>
              </div>
            </div>
            <div className="flex gap-4 my-4">
              <div className="border border-[#3A643B] px-1 py-2 rounded-xl text-center cursor-pointer">
                <h1 className="text-[#3C3C3C] text-[14px] font-semibold">
                  Video Consultation
                </h1>
                <p className="font-bold text-[#3A643B]">₹800</p>
              </div>
              <div className="border border-[#3A643B] px-1 py-2 rounded-xl text-center cursor-pointer">
                <h1 className="text-[#3C3C3C] text-[14px] font-semibold">
                  Chat Consultation
                </h1>
                <p className="font-bold text-[#3A643B]">Free</p>
              </div>
            </div>
            <div>
              <button className="w-full py-2 px-6 text-[#3A643B] text-[20px] font-normal rounded-lg border border-[#3A643B]">
                View Profile
              </button>
              <button className="w-full py-2 px-6 text-white text-[20px] font-normal rounded-lg bg-[#3A643B] my-3">
                Book a consultation
              </button>
            </div>
          </div>
          <div className="bg-[#FFF7E2] rounded-2xl px-16 py-10 flex flex-col justify-center items-center">
            <div className="relative">
              <img
                src={doctorProfileImage}
                alt="doctor Profile image"
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="absolute bottom-0 left-5 flex justify-center items-center bg-black text-white px-3 rounded-2xl">
                4.5 <IoStarSharp className="text-[#F79624]" />
              </div>
            </div>
            <div>
              <h1 className="text-[32px] font-bold text-[#2E2F2E]">
                Dr. Prerna Narang
              </h1>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <RiCapsuleLine className="text-[#3A643B]" />
                <p className="text-[#646665]">Male-Female Infertility</p>
              </div>
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-[#3A643B]" />
                <p className="text-[#646665]">7 years of Experience</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineMessage className="text-[#3A643B]" />
                <p className="text-[#646665]">
                  Speaks: English, Hindi, Marathi
                </p>
              </div>
            </div>
            <div className="flex gap-4 my-4">
              <div className="border border-[#3A643B] px-1 py-2 rounded-xl text-center cursor-pointer">
                <h1 className="text-[#3C3C3C] text-[14px] font-semibold">
                  Video Consultation
                </h1>
                <p className="font-bold text-[#3A643B]">₹800</p>
              </div>
              <div className="border border-[#3A643B] px-1 py-2 rounded-xl text-center cursor-pointer">
                <h1 className="text-[#3C3C3C] text-[14px] font-semibold">
                  Chat Consultation
                </h1>
                <p className="font-bold text-[#3A643B]">Free</p>
              </div>
            </div>
            <div>
              <button className="w-full py-2 px-6 text-[#3A643B] text-[20px] font-normal rounded-lg border border-[#3A643B]">
                View Profile
              </button>
              <button className="w-full py-2 px-6 text-white text-[20px] font-normal rounded-lg bg-[#3A643B] my-3">
                Book a consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
