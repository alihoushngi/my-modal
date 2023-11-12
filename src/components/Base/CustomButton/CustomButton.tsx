import { ReactComponent } from "@/types/base";
import React from "react";
import { IButtonTypes } from "./CustomButtonTypes";
import Image from "next/image";

const CustomButton: ReactComponent<IButtonTypes> = (props) => {
  const {
    children,
    buttonOnClickFunc,
    ImageButtonSrc,
    ImageButtonAlt,
    customButtonClass,
    isButtonDisable,
  } = props;
  return (
    <div
      className={`flex w-[33.33%] grow px-[2px] mb-[2px] ${customButtonClass}`}
    >
      <div className="bg-white w-full">
        <button
          onClick={buttonOnClickFunc}
          className="text-center h-[100px] text-[#505b70] font-semibold flex flex-col justify-center items-center gap-2 px-14 py-4 w-full capitalize"
          disabled={isButtonDisable}
        >
          <Image src={ImageButtonSrc} alt={ImageButtonAlt} />
          {children}
        </button>
      </div>
    </div>
  );
};

export default CustomButton;
