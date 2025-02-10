import React from "react";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "../../Components/Header";
import "./index.css";
import BuySection from "../BuySection/BuySection";

const FaqsPage = () => (
  <div className="bg-container relative min-h-screen overflow-y-auto">
    <Header />
    <div className="relative mt-28 mb-10 lg:mb-10">
      <ContentSection />
    </div>
  </div>
);



const ContentSection = () => (
  <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-1 pt-8">
    <div className=" flex flex-col justify-center items-center gap-2 w-full md:w-auto ">
      <Title text="FAQs" />
      <FaqList />
    </div>
    <BuySection />
  </div>
);

const Title = ({ text }) => (
  <div className="customeskew6 relative w-full md:w-[357px] h-[150px] bg-black p-4 ">
    <div className="relative bg-white customeskew-in6 pl-8 md:pl-16 flex flex-row justify-center items-center text-center h-full">
      <span className="text-[40px] md:text-[68px] font-extrabold text-black stroke-text tracking-[-1px] md:tracking-[-4px] ">
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








export default FaqsPage;