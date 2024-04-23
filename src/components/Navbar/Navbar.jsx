import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export const Navbar = () => {
  const [isClose, setIsClose] = useState(false);
  const navlinks = [
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-bold ml-4 text-[#3A643B] text-[16px] md:text-[16px] lg:text-[18px]"
            : "ml-4 text-[16px] md:text-[16px] lg:text-[18px]"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/findDoctors"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-bold ml-4 text-[#3A643B] text-[16px] md:text-[16px] lg:text-[18px]"
            : "ml-4 text-[16px] md:text-[16px] lg:text-[18px]"
        }
      >
        Find Doctors
      </NavLink>
      <NavLink
        to="/Aboutus"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "font-bold ml-4 text-[#3A643B] text-[16px] md:text-[16px] lg:text-[18px]"
            : "ml-4 text-[16px] md:text-[16px] lg:text-[18px]"
        }
      >
        About Us
      </NavLink>
    </>,
  ];
  return (
    <>
      <div className="bg-[#FFF7E2]">
        <div className="container mx-auto flex justify-between p-4 items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-[10px] text-[#3A643B]">
              AMRUTAM
            </h1>
          </div>
          <div className="hidden md:flex justify-between flex-1">
            <div className="w-full flex justify-center items-center">
              {navlinks.map((link, index) => (
                <ul key={index}>
                  <li>{link}</li>
                </ul>
              ))}
            </div>

            <div className="flex gap-4 w-full justify-end items-center">
              <div>
                <button className="border border-[#3A643B] text-[#3A643B] font-semibold px-4 py-2 rounded-lg text-[16px] md:text-[16px] lg:text-[18px]">
                  Login
                </button>
              </div>
              <div>
                <button className="bg-[#3A643B] text-white font-bold px-4 py-2 rounded-lg text-[16px] md:text-[16px] lg:text-[18px]">
                  Sign-up
                </button>
              </div>
            </div>
          </div>
          {/* for mobile device */}
          <div className="block md:hidden relative">
            <div>
              <h1 onClick={() => setIsClose(!isClose)}>
                {isClose ? <IoMdClose /> : <IoMdMenu />}
              </h1>
              {isClose && (
                <div className="absolute top-10 right-0 min-h-screen bg-[#FAFBF8] w-[150px] p-4">
                  <div className=" md:hidden">
                    <div className="w-full flex justify-center items-center">
                      {navlinks.map((link, index) => (
                        <ul key={index}>
                          <li
                            onClick={() => setIsClose(!isClose)}
                            className="flex flex-col items-center gap-2 mt-5 mb-10"
                          >
                            {link}
                          </li>
                        </ul>
                      ))}
                    </div>

                    <div className="flex flex-col gap-4 w-full justify-end items-center">
                      <div>
                        <button
                          onClick={() => setIsClose(!isClose)}
                          className="border border-[#3A643B] text-[#3A643B] font-semibold px-4 py-2 rounded-lg text-[16px] md:text-[16px] lg:text-[18px]"
                        >
                          Login
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => setIsClose(!isClose)}
                          className="bg-[#3A643B] text-white font-bold px-4 py-2 rounded-lg text-[16px] md:text-[16px] lg:text-[18px]"
                        >
                          Sign-up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
