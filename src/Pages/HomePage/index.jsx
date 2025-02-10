import React from "react";
import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import "./index.css";

const HomePage = () => {
  return (
    <div className="bg-container relative overflow-hidden min-h-screen">
      <Header />
      <div className="relative top-20 md:top-10 mb-24 lg:mb-0 p-2 flex flex-col justify-center items-center min-h-screen">
        <div className="block md:hidden ">
          <SubHeadline />
        </div>
        <div className="flex flex-col items-center text-[1rem]">
          <Headline text="VOXTX presale is going to start 100% staking rewards" />
        </div>
        <div className="hidden md:block w-full">
          <SubHeadline />
        </div>
        <div className="mb-10 lg:mb-0">
          <ContentSection />
        </div>
      </div>
    </div>
  );
};

const Headline = ({ text }) => (
  <div className="text-2xl md:text-5xl align-center pt-16 text-white w-[340px] h-[120px] md:w-[690px] relative mb-[1rem] ">
    <span className="font-black text-center absolute lg-top-[-4px] lg-left-[-4px] transform rotate-[1deg] md:rotate-[-deg] text-justify">
      {text}
    </span>
  </div>
);

const SubHeadline = () => {
  const text = "BEST MEME COIN";
  const repeatedText = Array(20).fill(text).join(" // ");

  return (
    <div className="text-[1rem] text-s font-bold relative mt-6 w-screen">
      <span className="absolute flex items-center transform rotate-[3deg] md:rotate-[-3deg] w-full h-[52px] bg-[#EEFF9A] overflow-hidden whitespace-nowrap text-clip">
        {repeatedText}
      </span>
    </div>
  );
};

const ContentSection = () => (
  <div className="flex flex-col lg:flex-row gap-1 md:pt-10 lg:pt-0 md:pl-3 lg:pl-30 justify-center items-center">
    <div className="lg:hidden flex flex-row justify-center items-center">
      <img
        className="h-[330px] w-[fit-content]"
        src="/images/home_fox.png"
        alt="cartoon"
      />
    </div>
    <div className=" flex flex-col ">
      <PresaleInfo />
      <TokenInfo />
    </div>
    
    <div className="hidden lg:block flex flex-row justify-center items-center">
      <img
        className="relative h-[450px] w-[fit-content] "
        src="/images/home_fox.png"
        alt="cartoon"
      />
    </div>
    <div>
      <BuySection />
    </div>
  </div>
);

const PresaleInfo = () => (
  <div className="customeskew  w-[370px] h-[220px] md:w-[640px] md:h-[220px] bg-black p-4">
    <div className="bg-white customeskew-in pl-8 md:pl-16 flex flex-col h-full">
      <span className="webkit-bg-clip-text text-[1.4rem] md:text-[2.1rem]  font-extrabold font-blackHanSans text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text drop-shadow-[4px_4px_0px_#000] stroke-text">
        VOXLOR CRYPTO PRESALE
      </span>

      <ul className="font-bold text-[0.9rem] md:text-[1.2rem] mt-4 list-disc">
        <li>Developing our own Layer 1 Blockchain Technology</li>
        <div className="flex gap-10">
          <li>Utility based meme coin</li>
          <li>Multi-chain compatibility</li>
        </div>
      </ul>
    </div>
  </div>
);

const TokenInfo = () => (
  <div className="left-10 customeskew2 md:w-[604px] md:h-[192px] sm:w-[450px] sm:h-[150px] bg-black p-4">
    <div className="bg-white customeskew-in2 flex flex-col h-full">
      <span className="font-bold text-[0.8rem] md:text-[0.9rem] p-10 text-justify">
        Voxlor Token ($VOXTx) powers the Voxlor ecosystem, a high-performance
        Layer 1 blockchain integrating AI for scalability, security, and
        efficiency. Aiming for 100,000+ TPS, Voxlor redefines blockchain utility
        with cutting-edge, AI-driven innovations.
      </span>
    </div>
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
    <div className="relative w-full max-w-[370px] sm:max-w-[450px] lg:max-w-[560px] lg:h-[400px] border border-black bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 sm:p-6 lg:p-5 mx-auto">
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
  const targetDate = new Date("February 15, 2025 10:00:00").getTime();
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, "0");

      setTime({ days, hours, minutes, seconds });
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


export default HomePage;
