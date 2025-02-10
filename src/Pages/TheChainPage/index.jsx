import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "../../Components/Header";
import "./index.css";

const TheChainPage = () => (
  <div className="relative overflow-hidden bg-container">
    <div className="pb-20">
      <Header />
    </div>
    <div className="mr-6 overflow-hidden  w-full flex flex-col justify-center items-center min-h-screen">
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

const BuySection = () => {
  const handleDownload = () => {
    const fileUrl = "/whitepaper.pdf"; // Adjust if using a different path
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "whitepaper.pdf"; // The file will be saved with this name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-[370px] sm:max-w-[450px] lg:max-w-[560px] lg:h-[400px] border border-black bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 sm:p-6 lg:p-5 mx-auto">
      <div className="innerdiv lg:mt-10 flex flex-col items-center justify-center space-y-3 sm:space-y-4 lg:space-y-2">
        <span className="font-bold text-lg sm:text-xl lg:text-2xl text-center text-black">
          Buy VOXTX, Presale going to start!
        </span>
        <CountdownTimer />
        <span className="font-semibold text-xs sm:text-sm lg:text-base text-black text-center">
          UNTIL NEXT PRICE INCREASE
        </span>
        <button
          onClick={handleDownload}
          className="w-full max-w-[180px] rounded-lg p-2 sm:p-3 lg:p-2.5 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white text-xs sm:text-sm font-bold"
        >
          WHITEPAPER
        </button>
      </div>
    </div>
  );
};


const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        days: String(now.getDate()).padStart(2, "0"),
        hours: String(now.getHours()).padStart(2, "0"),
        minutes: String(now.getMinutes()).padStart(2, "0"),
        seconds: String(now.getSeconds()).padStart(2, "0"),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[350px] sm:max-w-[400px] bg-gray-400 rounded-xl flex justify-center mx-auto p-2">
      <div className="bg-black w-full rounded-lg p-4">
        {/* Labels */}
        <div className="text-white flex justify-between text-xs sm:text-sm md:text-base font-bold">
          {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        {/* Time Values */}
        <div className="text-white flex justify-between text-lg sm:text-2xl md:text-3xl font-extrabold mt-2">
          {Object.values(time).map((value, index) => (
            <span key={index}>{value}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const FloatingImage = ({ src, alt }) => (
  <div className="absolute top-[4rem] left-[52rem]">
    <img src={src} alt={alt} />
  </div>
);

export default TheChainPage;
