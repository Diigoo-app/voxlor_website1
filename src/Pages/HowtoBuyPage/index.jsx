import React from "react";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "../../Components/Header";
import "./index.css";

const HowtoBuy = () => {
  return (
    <div className="bg-container relative overflow-hidden  min-h-[80vh] sm:min-h-[100vh]">
      <Header />
      <div className="z-10 relative pt-28">
        <ContentSection />
      </div>
    </div>
  );
};



const ContentSection = () => (
  <div className="flex flex-col md:flex-row gap-6 px-6 sm:px-10 md:px-16 lg:px-44 pt-14">
    <div className="flex flex-col gap-4 w-full md:w-auto">
      <PresaleInfo />
      <BuyInfo />
    </div>
    <BuySection />
  </div>
);


const PresaleInfo = () => (
  <div className="customeskew4 relative w-full max-w-[740px] min-h-[80px] sm:min-h-[110px] md:min-h-[130px] lg:min-h-[150px] bg-black p-4">
    <div className="relative bg-white customeskew-in4 px-4 sm:px-8 md:px-12 lg:px-16 text-center flex items-center justify-center h-full sm:pt-4 pb-6 sm:pb-1 md:pb-5 lg:pb-5">
      <span className="text-[7vw] sm:text-[5vw] md:text-[48px] lg:text-[62px] font-extrabold text-black pt-4 lg:pt-0 tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px] lg:tracking-[-4px] text-center leading-tight">
        How to buy Voxtx?
      </span>
    </div>
  </div>
);





const BuyInfo = () => (
  <>
    <div className="flex flex-col md:flex-row gap-6 pb-8">
      <div className="relative w-full md:w-[340px] h-auto md:h-[450px] bg-black p-[6px] pb-4 rounded-[20px]">
        <div className="relative bg-white flex flex-col h-full rounded-[20px]">
          <span className="stroke-text font-semibold text-[32px] sm:text-[40px] p-3 text-center">
            01. Get Wallet
          </span>
          <p className="font-semibold text-[14px] p-4 sm:p-8 pt-0 leading-6 text-justify" >
          Become a Fox Holder<br/>
          Before you can participate in the VOXTX presale, you’ll need a crypto wallet—your digital burrow for managing your assets.<br/>
          ✅ Recommended wallets: MetaMask, Trust Wallet, or Rabby Wallet.<br/>
          ✅ Install and set up your wallet securely.<br/>
          ✅ Connect your wallet to the FoxChain to interact with the presale.<br/>

          🦊 Ready? Click “Connect Wallet” to begin

          </p>
        </div>
      </div>
      <div className="relative w-full md:w-[340px] h-auto md:h-[360px] bg-black p-[6px] pb-4 rounded-[20px]">
        <div className="relative bg-white flex flex-col h-full rounded-[20px]">
          <span className="stroke-text font-semibold text-[32px] sm:text-[40px] p-3 text-center">
            02. Add Crypto
          </span>
          <p className="font-semibold text-[14px] p-4 sm:p-8 pt-0 leading-6 text-justify">
          Fuel Your Fox Investment<br/>
          To invest in the presale, you’ll need to contribute crypto in exchange for VOXTX tokens.<br/>

          🔹 Deposit funds into your wallet from a trusted exchange.<br/>
          🔹 Choose your investment amount and confirm your transaction.<br/>

          🦊 Join the Hunt - Invest in VOXTX Today
          </p>
        </div>
      </div>
    </div>
    <div className="relative w-full md:w-[674px] bg-black p-[6px] pb-4 rounded-[20px]">
      <div className="relative bg-white flex flex-col h-auto md:h-[300px] rounded-[20px]">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <span className="stroke-text font-semibold text-[32px] sm:text-[40px] p-4 w-full md:w-[40%]">
            03. Staking
          </span>
          <span className="font-semibold text-[14px] py-4 px-4 md:pr-2 leading-6 w-full md:w-[60%] text-justify">
          Let Your VOXTX Run Wild<br/>
          Foxes are strategic creatures, and staking is your best move to grow your assets!<br/>

          Stake VOXTX and watch your tokens multiply!<br/>

          Lock up tokens for different durations and earn higher rewards.<br/>

          The longer you stake, the bigger your Fox Reward Bonus!<br/>


          Become an Alpha—Stake Now!<br/>

          Join the VOXTX Pack & Shape the Future!<br/>
          </span>
        </div>
      </div>
    </div>
  </>
);
// const InfoContainer = ({ children, className }) => (
//   <div className={`relative bg-white p-2 flex flex-col h-full ${className}`}>
//     {children}
//   </div>
// );
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



export default HowtoBuy;