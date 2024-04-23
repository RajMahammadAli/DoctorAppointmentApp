import React from "react";
import { MdOutlineMapsHomeWork } from "react-icons/md";

const WorkExperience = () => {
  const experiences = [
    {
      icon: <MdOutlineMapsHomeWork size={25} />,
      institutionName: "Midtown Medical Clinic",
      designation: "Senior doctor",
      duration: "2016-present",
    },
    {
      icon: <MdOutlineMapsHomeWork size={25} />,
      institutionName: "Midtown Medical Clinic",
      designation: "Senior doctor",
      duration: "2010-2015",
    },
  ];
  return (
    <>
      <div className="border rounded-lg mb-5">
        <div class="h-14 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] flex justify-between items-center px-10 py-10">
          <h1 className="text-2xl font-semibold text-[#313131]">
            My Work Experience
          </h1>
        </div>
        <div className="my-3 px-10">
          <h1 className="text-[#3A643B] text-[18px] font-semibold pb-5">
            I have been in practice for : 7+ Years
          </h1>
          <hr width="450px" />
        </div>
        <div className="px-10 pb-5">
          {experiences.map((experience, index) => (
            <div key={index} className=" flex justify-between items-center">
              <div className="flex gap-5 items-center">
                <div className="w-10 h-10 bg-[#F7F7FC] text-[#2E37A4] flex justify-center items-center rounded">
                  {experience.icon}
                </div>
                <div>
                  <h1 className="text-base text-[#333548] font-medium">
                    {experience.institutionName}
                  </h1>
                  <p className="text-base text-[#3335485e] font-medium">
                    {experience.designation}
                  </p>
                </div>
              </div>

              <div className="text-[#3335489d] font-normal flex justify-start w-[150px]">
                {experience.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
