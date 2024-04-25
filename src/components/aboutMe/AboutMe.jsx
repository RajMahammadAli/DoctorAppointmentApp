import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { FiTwitter, FiYoutube } from "react-icons/fi";

const AboutMe = () => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="border rounded-lg mb-5">
        <div class="h-14 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] flex justify-between items-center px-10 py-10">
          <h1 className="text-2xl font-semibold text-[#313131]">
            A Little About me
          </h1>
          <button
            onClick={() => setSelected(!selected)}
            className="px-3 py-1 border border-[#3A643B] rounded-lg text-[24px] text-[#585858] font-medium"
          >
            {selected ? "Unfollow -" : "Follow +"}
          </button>
        </div>
        <div className="px-10 ">
          <p className="text-[#33354877] text-[16px] font-medium">
            Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
            Surat. love to work with all my hospital staff and seniour doctors.
            Completed my graduation in Gynaecologist Medicine from the
          </p>
        </div>
        <div className="flex justify-end items-center gap-4 px-10">
          <div className="w-[70%] md:w-[80%] underline">
            <hr />
          </div>
          <div className="w-[30%] md:w-[20%]">
            <Link
              to="/Aboutus"
              className="underline text-[16px] md:text-[18px]"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center my-8">
          <div className="w-full block text-center my-5 md:flex justify-center items-center gap-4">
            <p className="text-[20px] font-medium">Language Spoken</p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="text-[20px] font-medium text-[#505050] px-4 py-2 rounded-lg bg-[#e2e2e262]">
                English
              </button>
              <button className="text-[20px] font-medium text-[#505050] px-4 py-2 rounded-lg bg-[#e2e2e262]">
                Hindi
              </button>
              <button className="text-[20px] font-medium text-[#505050] px-4 py-2 rounded-lg bg-[#e2e2e262]">
                Telugu
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-start px-10 py-5">
          <div className="w-10 h-10 rounded-full bg-[#c5c5c557] flex justify-center items-center border border-[#8E8E8E] text-[#3A643B]">
            <SlSocialFacebook size={22} />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#c5c5c557] flex justify-center items-center border border-[#8E8E8E] text-[#3A643B]">
            <SlSocialInstagram size={22} />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#c5c5c557] flex justify-center items-center border border-[#8E8E8E] text-[#3A643B]">
            <FiYoutube size={22} />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#c5c5c557] flex justify-center items-center border border-[#8E8E8E] text-[#3A643B]">
            <FiTwitter size={22} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
