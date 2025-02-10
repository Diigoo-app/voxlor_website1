import React from "react";
import Header from "../../Components/Header";
import "./index.css";

const RoadmapPage = () => (
  <div className="bg-container relative min-h-screen overflow-auto">
    <Header />
    <div className="z-10 relative top-28">
      <ContentSection />
    </div>
  </div>
);



const ContentSection = () => (
  <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-12 lg:px-24 pt-14 items-center justify-center">
    <div className="flex flex-col gap-6 w-full max-w-screen-lg">
      <PresaleInfo />
      <MultichainInfo />
    </div>
  </div>
);

const PresaleInfo = () => (
  <div className="customeskew7 relative w-full lg:w-[1020px] min-h-[100px] md:min-h-[120px] max-h-[140px] md:max-h-[180px] bg-black p-4">
    <div className="relative bg-white customeskew-in7 pl-6 md:pl-12 lg:pl-24 pb-6 flex items-center h-full">
      <span className="text-[7vw] sm:text-[6vw] md:text-[40px] lg:text-[62px] text-black sm:font-bold stroke-text tracking-[1px] lg:tracking-[-2px] text-center">
        Welcome to Voxlor Staking
      </span>
    </div>
  </div>
);


const MultichainInfo = () => (
  <div className="flex flex-col gap-6 pb-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 w-full">
      {infoData.map((data, index) => (
        <InfoCard key={index} {...data} />
      ))}
    </div>
  </div>
);

const InfoCard = ({
  title,
  value,
  subtitle,
  subValue,
  list,
  buttonText,
  buttonHeight,
}) => (
  <div className="flex flex-col gap-4 items-center w-full">
    <div className="relative w-full max-w-[261px] h-auto bg-[#858484] p-2 sm:p-[6px] pb-4 rounded-[20px]">
      <div className="relative bg-black flex flex-col h-full font-bold rounded-[20px] text-white gap-3 sm:gap-4 py-4 sm:py-6 px-3 sm:px-4 lg:py-10 lg:pl-4 justify-between text-justify">
        <span className="text-[16px] sm:text-[18px] lg:text-[21px] leading-5 sm:leading-6">
          {title}
        </span>
        <span className="text-[16px] sm:text-[18px] lg:text-[21px] text-[#6FD195] leading-5 sm:leading-6">
          {value}
        </span>
        {subtitle && (
          <span className="text-[16px] sm:text-[18px] lg:text-[21px] leading-5 sm:leading-6">
            {subtitle}
          </span>
        )}
        {subValue && (
          <span className="text-[16px] sm:text-[18px] lg:text-[21px] text-[#6FD195] leading-5 sm:leading-6">
            {subValue}
          </span>
        )}
        {list && (
          <ul className="font-bold text-[14px] sm:text-[16px] lg:text-[18px] list-disc ml-4">
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
    {buttonText && (
      <button
      className="px-6 py-3 text-[18px] sm:text-[20px] lg:text-[20px] font-bold rounded-[10px] bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white">
        {buttonText}
      </button>
    )}
  </div>
);

const infoData = [
  {
    title: "STAKED BALANCE",
    value: "0 VOXTX",
    subtitle: "YOUR STAKEABLE",
    subValue: "0 VOXTX",
    buttonText: "Buy Voxtx",
  },
  {
    title: "% OF POOL",
    value: "0%",
    subtitle: "TOTAL STAKED",
    subValue: "4,946,229 VOX",
    buttonText: "WITHDRAW STAKE TOKENS",
    buttonHeight: "90px",
  },
  {
    title: "ESTIMATED REWARDS",
    value: "233%",
    list: [
      "Rewards rate is dynamic",
      "Monthly = rewards%/12",
      "Daily = rewards%/12",
    ],
  },
  {
    title: "CURRENT REWARDS",
    value: "4377.4 per ETH",
    subtitle: "TOTAL REWARDS",
    subValue: "0 VOX",
    buttonText: "CLAIM REWARDS",
  },
];

export default RoadmapPage;