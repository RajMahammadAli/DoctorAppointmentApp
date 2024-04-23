import React from "react";
import reviewPic from "../../assets/reviewPic.jpeg";
import { IoStarSharp } from "react-icons/io5";

const Reviews = () => {
  return (
    <>
      <div className="border rounded-lg mb-5">
        <div class="h-14 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] flex justify-between items-center px-10 py-10">
          <h1 className="text-2xl font-semibold text-[#313131]">
            Featured Reviews (102)
          </h1>
        </div>

        <div className="bg-[#FAFAFA] rounded py-5 mx-10 my-4">
          <div className="px-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src={reviewPic}
                alt="reviewPic"
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h1 className="text-[20px] text-[#2F2F2F] font-semibold">
                  Alicent Hightower
                </h1>
                <p className="text-[16px] font-medium text-[#939393]">
                  Consulted for Skin care
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-base font-normal text-[#979797]">
                20 January 2023
              </h1>
            </div>
          </div>
          <div className="px-10 py-4">
            <span className="flex gap-1">
              <IoStarSharp className="text-[#F79624]" />
              <IoStarSharp className="text-[#F79624]" />
              <IoStarSharp className="text-[#F79624]" />
              <IoStarSharp className="text-[#F79624]" />
            </span>
          </div>
          <div className="px-10">
            <p className="text-[#2E2F2E] text-base font-normal">
              Might be bit early to confirm but yes I can see noticeable
              difference in my hairfall. will write again after using it for
              longer periods
            </p>
          </div>
        </div>
        <div className="bg-[#FAFAFA] rounded py-5 mx-10 my-4">
          <div className="px-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src={reviewPic}
                alt="reviewPic"
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h1 className="text-[20px] text-[#2F2F2F] font-semibold">
                  Alicent Hightower
                </h1>
                <p className="text-[16px] font-medium text-[#939393]">
                  Consulted for Skin care
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-base font-normal text-[#979797]">
                20 January 2023
              </h1>
            </div>
          </div>
          <div className="px-10 py-4">
            <span className="flex gap-1">
              <IoStarSharp className="text-[#F79624]" />
              <IoStarSharp className="text-[#F79624]" />
              <IoStarSharp className="text-[#F79624]" />
              <IoStarSharp className="text-[#F79624]" />
            </span>
          </div>
          <div className="px-10">
            <p className="text-[#2E2F2E] text-base font-normal">
              Might be bit early to confirm but yes I can see noticeable
              difference in my hairfall. will write again after using it for
              longer periods
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
