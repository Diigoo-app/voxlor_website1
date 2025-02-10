import React from "react";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "../../Components/Header";
import "./index.css";

const FaqsPage = () => (
  <div className="bg-container relative h-auto overflow-y-auto">
    <Header />
    <div className="relative mt-28 px-4 md:px-44">
      <ContentSection />
    </div>
  </div>
);



const ContentSection = () => (
  <div className="flex flex-col md:flex-row gap-4 md:gap-1 pt-8">
    <div className="md:pl-44 flex flex-col gap-2 w-full md:w-auto">
      <Title text="FAQs" />
      <FaqList />
    </div>
    <BuySection />
  </div>
);

const Title = ({ text }) => (
  <div className="customeskew6 relative w-full md:w-[357px] h-[150px] bg-black p-4">
    <div className="relative bg-white customeskew-in6 pl-8 md:pl-16 flex items-center text-center h-full">
      <span className="text-[40px] md:text-[68px] font-extrabold text-black stroke-text tracking-[-1px] md:tracking-[-4px]">
        {text}
      </span>
    </div>
  </div>
);

const FaqList = () => {
  const faqs = [
    {
      question: "01. What is Voxtx?", answer: "VoxTX is the clever cryptocurrency that blends innovative blockchain technology with meme coin culture. Think of it as the sly fox of the digital finance world—smart, agile, and always ready to outsmart the traditional financial system." },
    { question: "02. How do I stake?", answer: "Join our Fox Den! To stake your VoxTX tokens, simply access the staking portal in your wallet, follow the easy steps to stake your tokens, and watch them work for you. Just like a fox carefully planning its next move, your staked tokens help secure the network while earning you rewards." },
    { question: "03. When can I claim?", answer: "Rewards can be claimed at intervals specified by our smart contract schedule. Once your tokens have been properly staked, you’ll receive your rewards as swiftly as a fox on the hunt. Keep an eye on your dashboard for updates and claim your bounty when it’s time!." },
  ];

  return (
    <div className="flex flex-col gap-6">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-full md:w-[614px] bg-black p-[6px] pb-4 rounded-[20px] cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="relative bg-white flex flex-col rounded-[20px] justify-center items-center transition-all duration-300">
        <div className="flex justify-center items-center w-full">
          <span className="stroke-text font-semibold text-[24px] md:text-[40px] p-4 md:p-8 text-center">
            {question}
          </span>
        </div>
        {isOpen && (
          <div className="text-black text-[16px] md:text-[18px] p-4 md:p-6 text-center transition-all duration-300 text-justify">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};


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





export default FaqsPage;