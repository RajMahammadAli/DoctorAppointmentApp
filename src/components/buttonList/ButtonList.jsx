import React, { useState } from "react";

export const ButtonList = ({ buttons }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleButtons = showAll ? buttons : buttons.slice(0, 6);
  const hiddenButtonCount = buttons.length - visibleButtons.length;
  return (
    <>
      <div className="flex flex-wrap">
        {visibleButtons.map((button, index) => (
          <button
            className="m-2 p-2 bg-[#F7F7FC] text-[#3A643B] rounded-full"
            key={index}
          >
            {button}
          </button>
        ))}
        {hiddenButtonCount > 0 && (
          <button
            className="m-2 p-2 bg-[] text-[#3A643B] border border-[#E0DFDF] rounded-full"
            onClick={() => setShowAll(true)}
          >
            {" "}
            + {hiddenButtonCount} More
          </button>
        )}
      </div>
    </>
  );
};
