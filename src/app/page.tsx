"use client";

import Modal from "@/components/Base/Modal/Modal";
import Navbar from "@/components/Base/Navbar/Navbar";
import CustomButton from "@/components/Base/CustomButton/CustomButton";
import analytics from "../../public/static/images/analytics.png";
import candlestickChart from "../../public/static/images/candlestickChart.png";
import twitter2 from "../../public/static/images/twitter2.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  openContentModal,
  closeContentModal,
} from "@/redux/slices/contentModalSlices";
import {
  openSignalModal,
  closeSignalModal,
} from "@/redux/slices/signalModalSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { isContentModalOpen } = useSelector(
    (store: RootState) => store.contentModal
  );
  const { isSignalModalOpen } = useSelector(
    (store: RootState) => store.signalModal
  );

  const openContentModalHandler = () => {
    dispatch(openContentModal());
  };

  const closeContentModalHandler = () => {
    dispatch(closeContentModal());
  };

  const openSignalModalHandler = () => {
    dispatch(openSignalModal());
  };

  const closeSignalModalHandler = () => {
    dispatch(closeSignalModal());
  };

  const notification = () => {
    window.alert(
      "I didn't design a modal for this button , i just design for signal button as you said"
    );
  };

  const contentModalButtons = [
    {
      name: "Tweet",
      ImageButton: twitter2,
      buttonOnClickFunc: openSignalModalHandler,
      customButtonClass: "rounded-s-xl",
      buttonDisableOrNot: false,
    },
    {
      name: "Analysis",
      ImageButton: analytics,
      buttonOnClickFunc: openSignalModalHandler,
      customButtonClass: "",
      buttonDisableOrNot: false,
    },
    {
      name: "Signal",
      ImageButton: candlestickChart,
      buttonOnClickFunc: openSignalModalHandler,
      customButtonClass: "rounded-e-xl",
      buttonDisableOrNot: false,
    },
  ];

  const signalModalButtons = [
    {
      name: "indices",
      ImageButton: twitter2,
      buttonOnClickFunc: notification,
      customButtonClass: "rounded-s-xl",
      buttonDisableOrNot: true,
    },
    {
      name: "stocks",
      ImageButton: analytics,
      buttonOnClickFunc: notification,
      customButtonClass: "",
      buttonDisableOrNot: true,
    },
    {
      name: "crypto",
      ImageButton: candlestickChart,
      buttonOnClickFunc: notification,
      customButtonClass: "rounded-e-xl",
      buttonDisableOrNot: true,
    },
    {
      name: "forex",
      ImageButton: candlestickChart,
      buttonOnClickFunc: notification,
      customButtonClass: "rounded-s-xl",
      buttonDisableOrNot: true,
    },
    {
      name: "futures",
      ImageButton: candlestickChart,
      buttonOnClickFunc: notification,
      customButtonClass: "",
      buttonDisableOrNot: true,
    },
    {
      name: "bounds",
      ImageButton: candlestickChart,
      buttonOnClickFunc: notification,
      customButtonClass: "rounded-e-xl",
      buttonDisableOrNot: true,
    },
  ];

  const changeButtonStyle = (id: string) => {
    let ChartButton = document.getElementById("chart");
    let blogButton = document.getElementById("blog");

    if (id === "chart") {
      blogButton?.classList.remove("bg-secondary");
      blogButton?.classList.remove("text-white");
      ChartButton?.classList.add("bg-secondary");
      ChartButton?.classList.add("text-white");
    } else if (id === "blog") {
      ChartButton?.classList.remove("bg-secondary");
      ChartButton?.classList.remove("text-white");
      blogButton?.classList.add("bg-secondary");
      blogButton?.classList.add("text-white");
    }
    return;
  };

  return (
    <main>
      <Navbar />

      {/* add content button */}
      <div className="w-full h-[calc(100vh-10rem)] flex justify-center items-center flex-col gap-5">
        <div className="w-9 h-9 rounded-[100%] bg-secondary text-center text-2xl font-light text-white">
          <button onClick={openContentModalHandler}>+</button>
        </div>
        <span className="px-5 py-2 bg-white rounded text-sm">Add content</span>
      </div>

      {/* content modal data */}
      {isContentModalOpen && (
        <Modal
          isOpen={isContentModalOpen}
          onClose={closeContentModalHandler}
          header
          headerChildren={"Content Type"}
        >
          <div className="flex gap-1">
            {contentModalButtons.map((data, index) => {
              return (
                <CustomButton
                  isButtonDisable={data.buttonDisableOrNot}
                  key={index}
                  ImageButtonAlt={data.name}
                  ImageButtonSrc={data.ImageButton}
                  buttonOnClickFunc={data.buttonOnClickFunc}
                  customButtonClass={data.customButtonClass}
                >
                  {data.name}
                </CustomButton>
              );
            })}
          </div>
        </Modal>
      )}

      {/* signalModalData */}
      {isSignalModalOpen && (
        <Modal
          isOpen={isContentModalOpen}
          onClose={closeSignalModalHandler}
          header
          headerChildren={"Signal Type"}
        >
          {/* swtiching button section */}
          <div className="w-full bg-white my-4 rounded-lg">
            <button
              id="chart"
              className="w-[50%] py-2 rounded-lg bg-secondary text-white"
              onClick={() => changeButtonStyle("chart")}
            >
              Chart
            </button>
            <button
              id="blog"
              className="w-[50%] py-2 rounded-lg"
              onClick={() => changeButtonStyle("blog")}
            >
              Blog
            </button>
          </div>
          {/* buttons */}
          <h4 className="border-s-4 border-secondary ps-1 my-2 font-semibold text-sm">
            Global Markets
          </h4>
          <div className="flex flex-wrap">
            {signalModalButtons.map((data, index) => {
              return (
                <CustomButton
                  isButtonDisable={data.buttonDisableOrNot}
                  key={index}
                  ImageButtonAlt={data.name}
                  ImageButtonSrc={data.ImageButton}
                  buttonOnClickFunc={data.buttonOnClickFunc}
                  customButtonClass={data.customButtonClass}
                >
                  {data.name}
                </CustomButton>
              );
            })}
          </div>
        </Modal>
      )}
    </main>
  );
}
