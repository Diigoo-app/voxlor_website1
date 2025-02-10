import React from "react";
import { useState, useEffect } from "react";
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
    <div className="relative w-full max-w-[370px] sm:max-w-[450px] lg:max-w-[560px] lg:h-[400px] border-8 border-black bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 sm:p-6 lg:p-5 ">
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

export default BuySection;