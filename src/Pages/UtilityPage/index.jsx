import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import "./index.css"

const UtilityPage = () => (
  <div className="relative bg-container overflow-hidden">
    <div className="pb-10">
      <Header />
    </div>
    <div
      className=" w-full flex flex-col justify-center items-center mt-[2rem] lg:mt-[3rem] "
      style={{ boxSizing: "border-box" }}
    >
      <ContentSection />
    </div>
  </div>
);

const ContentSection = () => (
  <div className="flex ">
    <div className="flex flex-col  justify-center items-center lg:px-10">
      <PresaleInfo />
      <MultichainInfo />
    </div>
  </div>
);

const InfoContainer = ({ children, className }) => (
  <div className={`relative bg-white p-4 flex flex-col h-full ${className}`}>
    {children}
  </div>
);

const PresaleInfo = () => (
  <div className="customeskew7 w-[410px] lg:min-w-[1100px] h-[160px] bg-black p-4">
    <InfoContainer className="customeskew-in7 pl-6 pb-6 items-center justify-center text-center pl-10 pr-10">
      <span className=" text-[1.5rem] lg:text-[3.5rem] font-extrabold text-black stroke-text tracking-[1px] lg:tracking-[-2px]">
        The Voxtx / Ethereum multichain
      </span>
    </InfoContainer>
  </div>
);

const MultichainInfo = () => (
  <div className="flex">
    <div className="flex flex-col ">
      <div className="flex flex-col lg:flex-row pb-4 gap-2 lg:pr-20 ">
        <MultichainCard title="Voxtx the best new Cryptocurrency" />
        <MultichainCard title="Meme coin Voxtx" />
      </div>
      <div className="lg:hidden flex flex-row justify-center items-center">
      <img
        className="h-[300px] w-[fit-content]"
        src="/images/Cartoon1.png"
        alt="cartoon"
      />
    </div>
      <BackHomeLink />
    </div>
    <div className="hidden lg:block flex flex-row justify-center items-center">
      <img
        className="relative right-16 bottom-14 h-[500px] w-[fit-content]"
        src="/images/Cartoon1.png"
        alt="cartoon"
      />
    </div>
    
  </div>
);

const MultichainCard = ({ title }) => (
  <div className="relative w-[360px] h-[410px] bg-black p-[6px] pb-4 rounded-[20px]">
    <InfoContainer className="rounded-[20px]">
      <span className="stroke-text font-semibold text-[40px] tracking-[-1px] py-6 px-[20px] text-left leading-10">
        {title}
      </span>
      <span className="font-semibold text-[14px] p-8 pt-0 leading-6">
        On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and tr
      </span>
    </InfoContainer>
  </div>
);

const BackHomeLink = () => (
  <Link to="/home" className="relative flex">
    <img src="images/BackArrow.svg" alt="back" />
    <span className="text-white font-semibold text-[40px] tracking-[-1px]">
      Back Home
    </span>
  </Link>
);

const FloatingImage = ({ src, alt }) => (
  <div className="absolute top-[24rem] left-[65rem] h-[650px] w-[100px] ">
    <img className="" src={src} alt={alt} />
  </div>
);

export default UtilityPage;
