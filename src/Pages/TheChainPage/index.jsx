import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "../../Components/Header";
import "./index.css";
import BuySection from "../BuySection/BuySection";

const TheChainPage = () => (
  <div className="relative overflow-hidden bg-container">
    <div className="pb-20">
      <Header />
    </div>
    <div className="mr-6 overflow-hidden  w-full flex flex-col justify-center items-center min-h-screen mb-10 lg:mb-0">
      <ContentSection />
    </div>
  </div>
);

const ContentSection = () => (
  <div className="flex flex-col lg:flex-row justify-center items-center h-max">
    <div className="flex flex-col justify-center items-center ">
      <BackHomeLink />
      <PresaleInfo />
      <TokenInfo />
    </div>
    <div className="lg:hidden flex flex-row justify-center items-center">
      <img
        className="h-[300px] w-[fit-content]"
        src="/images/Cartoon2.png"
        alt="cartoon"
      />
    </div>
    <div className="hidden lg:block flex flex-row justify-center items-center">
      <img
        className="relative right-1 bottom-14 h-[500px] w-[fit-content]"
        src="/images/Cartoon2.png"
        alt="cartoon"
      />
    </div>
    <BuySection />
  </div>
);

const BackHomeLink = () => (
  <Link
    to="/home"
    className="relative flex flex-row justify-center items-center pb-4"
  >
    <img src="images/BackArrow.svg" alt="back" />
    <span className="text-white font-semibold text-[2rem] lg:text-[3rem] tracking-[-1px]">
      Back Home
    </span>
  </Link>
);

const InfoContainer = ({ children, className }) => (
  <div className={`relative bg-white p-2 flex flex-col h-full ${className}`}>
    {children}
  </div>
);

const PresaleInfo = () => (
  <div className="customeskew8 relative w-[400px] h-[220px] lg:w-[620px] lg:h-[280px] bg-black p-4 mx-2">
    <InfoContainer className="customeskew-in8 pl-16">
      <span className="text-[3rem] lg:text-[4.5rem] font-extrabold text-black stroke-text tracking-[-4px]">
        What is
      </span>
      <span className="webkit-bg-clip-text text-[3rem] lg:text-[4rem] font-extrabold font-blackHanSans text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text drop-shadow-[4px_4px_0px_#000] stroke-text pl-6">
        VOXLOR?
      </span>
    </InfoContainer>
  </div>
);

const TokenInfo = () => (
  <div className="customeskew9 relative sm:w-[575px] sm:h-[230px] lg:w-[595px] lg:h-[260px] bg-black p-4 pt-4">
    <InfoContainer className="customeskew-in9">
      <span className="font-semibold text-[0.7rem] pt-10 pl-16 pr-[54px] pb-2 leading-5">
        Voxlor Token ($VOXTx) powers the Voxlor ecosystem, a high-performance
        Layer 1 blockchain integrating AI for scalability, security, and
        efficiency. Aiming for 100,000+ TPS, Voxlor redefines blockchain utility
        with cutting-edge, AI-driven innovations.
      </span>
      <span className="font-semibold text-[0.7rem] pl-16 pr-20 pb-4 leading-6">
        Voxlor Token ($VOXTx) powers the Voxlor ecosystem, a Layer 1 blockchain
        integrating AI for scalability.
      </span>
    </InfoContainer>
  </div>
);



export default TheChainPage;
