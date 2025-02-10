import React from "react";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "../../Components/Header";
import "./index.css";
import BuySection from "../BuySection/BuySection";

const HowtoBuy = () => {
  return (
    <div className="bg-container relative overflow-hidden  min-h-[80vh] sm:min-h-[100vh]">
      <Header />
      <div className="mb-10 lg:mb-0 pt-28">
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



export default HowtoBuy;