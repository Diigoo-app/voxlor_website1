import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "../../Components/Header";
import "./index.css";
import BuySection from "../BuySection/BuySection";

const Tokenomics = () => {
  return (
    <div className="relative overflow-hidden bg-container min-h-screen">
      <div className="pb-20">
        <Header />
      </div>
      <div className="mr-6 w-full flex flex-col justify-center items-center mb-10 lg:mb-0">
        <ContentSection />
      </div>
    </div>
  );
};

const ContentSection = () => (
  <div className="flex flex-col lg:flex-row justify-center items-center h-max">
    <div className="flex flex-col justify-center items-center sm:col-row w-full sm:w-[500px] lg:w-[900px]">
      <PresaleInfo />
      

      <div className="h-max w-[fit-content] m-10 p-6">
        {/* For small screens, show pie.svg */}
        <img
          src="/images/Group 269.png"
          alt="pie-chart"
          className="hidden lg:block"
        />

        {/* For medium and larger screens, show pieLarge.svg */}
        <img
          src="/images/Group 270.png"
          alt="pie-chart"
          className="block lg:hidden"
        />
      </div>
    </div>
    <BuySection />
  </div>
);

const PresaleInfo = () => (
  <div className="customeskew6 bg-black p-4 w-[320px] lg:w-[800px]  mx-">
    <div className="bg-white customeskew-in6 flex flex-col h-full items-center justify-center">
      <span className="text-[3rem] font-extrabold text-black stroke-text tracking-[-2px]">
        Tokenomics
      </span>
    </div>
  </div>
);



export default Tokenomics;
