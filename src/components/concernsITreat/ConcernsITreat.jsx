import React from "react";
import { ButtonList } from "../buttonList/ButtonList";

const ConcernsITreat = () => {
  const buttons = [
    "Skin Treatment",
    "Pregnancy",
    "Period Doubts",
    "Endometriosis",
    "Pelvic Pain",
    "Ovarian Cysts",
    "Button 7",
    "Button 8",
    "Button 9",
    "Button 10",
  ];
  return (
    <>
      <div className="border rounded-lg mb-5">
        <div class="h-14 bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] flex justify-between items-center px-10 py-10">
          <h1 className="text-2xl font-semibold text-[#313131]">
            The Concerns I Treat
          </h1>
        </div>
        <div className="px-10">
          <ButtonList buttons={buttons} />
        </div>
      </div>
    </>
  );
};

export default ConcernsITreat;
