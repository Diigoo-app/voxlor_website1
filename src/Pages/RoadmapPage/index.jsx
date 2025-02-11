import React from "react";
import Header from "../../Components/Header";
import "./index.css";

const RoadmapPage = () => (
  <div className="bg-container relative min-h-screen overflow-auto">
    <Header />
    <div className="z-10 relative top-28">
      <ContentSection />
    </div>
  </div>
);



const ContentSection = () => (
  <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-12 lg:px-24 pt-14 items-center justify-center">
    <div className="flex flex-col gap-6 w-full max-w-screen-lg">
      <PresaleInfo />
      <MultichainInfo />
    </div>
  </div>
);

const PresaleInfo = () => (
  <div className="customeskew7 relative w-full lg:w-[800px] min-h-[100px] md:min-h-[120px] max-h-[140px] md:max-h-[180px] bg-black p-4">
    <div className="relative bg-white customeskew-in7 pl-6 md:pl-12 lg:pl-24 pb-6 flex items-center h-full">
      <span className="text-[7vw] sm:text-[6vw] md:text-[40px] lg:text-[62px] text-black sm:font-bold stroke-text tracking-[1px] lg:tracking-[-2px] text-center">
        Voxlor Road Map
      </span>
    </div>
  </div>
);


const MultichainInfo = () => (
  <div className="flex flex-col gap-10 pb-4">
    {roadmapData.map((phase, index) => (
      <div key={index} className="flex flex-col gap-6 w-full">
        {/* Phase Title with Improved Visibility */}
        <div className="relative text-center">
          <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-white z-10 p-2 sm:p-4">
            {phase.title}
          </h2>
          {/* Background Overlay to Improve Readability */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        </div>

        {/* Dynamic Grid Layout for Better Responsiveness */}
        <div
          className={`grid gap-6 ${
            phase.months.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {phase.months.map((month, i) => (
            <InfoCard key={i} {...month} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const InfoCard = ({ title, list }) => (
  <div className="flex flex-col gap-4 items-center justify-between w-full">
    <div className="relative w-full min-w-[300px] h-auto bg-[#858484] p-2 sm:p-[6px] pb-4 rounded-[20px]">
      <div className="relative bg-black flex flex-col h-full font-bold rounded-[20px] text-white gap-3 sm:gap-4 py-4 sm:py-6 px-3 sm:px-4 lg:py-10 lg:pl-4 justify-between text-justify">
        <span className="text-[18px] sm:text-[20px] lg:text-[22px] leading-5 sm:leading-6">
          {title}
        </span>
        <ul className="font-bold text-[14px] sm:text-[16px] lg:text-[18px] list-disc ml-4">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);


const roadmapData = [
  {
    title: "Phase 1: Token Launch & Presale (February - March 2024)",
    months: [
      {
        title: "✅ February",
        list: [
          "Token Smart Contract Deployment & Audit",
          "Official Whitepaper Release",
          "Community Building & Marketing Kickoff",
          "Website & Dashboard Launch",
          "Presale on PinkSale & DxSale",
        ],
      },
      {
        title: "✅ March",
        list: [
          "Presale & Public Sale Completion",
          "Staking Platform Preparation (Forest Stash)",
          "Liquidity Pool Setup for Trading Stability",
          "Governance Mechanism Development",
          "Finalizing Blockchain Development for VOXTX",
        ],
      },
    ],
  },
  {
    title: "Phase 2: Blockchain & Exchange Listings (April - May 2024)",
    months: [
      {
        title: "✅ April",
        list: [
          "Blockchain Launch with Full Features (Smart Contracts, DeFi, NFTs, etc.)",
          "Deployment of Blockchain Explorer & Wallet Integrations",
        ],
      },
      {
        title: "✅ May",
        list: [
          "DEX Listing (Uniswap/PancakeSwap, etc.)",
          "CEX Listing (Gate.io, KuCoin, MEXC, etc.)",
          "Governance System Activation for Token Holders",
          "Cross-Chain Compatibility Research",
        ],
      },
    ],
  },
  {
    title: "Phase 3: Staking & DeFi Expansion (June - July 2024)",
    months: [
      {
        title: "✅ June",
        list: [
          "Staking Platform Official Launch",
          "Liquidity Farming & Yield Staking",
          "Launch of Governance Voting Platform",
        ],
      },
      {
        title: "✅ July",
        list: [
          "Integration with Major DeFi Platforms (Aave, Curve, etc.)",
          "Cross-Chain Bridge Implementation",
          "Expanding Use Cases for Staking Rewards",
        ],
      },
    ],
  },
  {
    title: "Phase 4: NFT & Gaming Ecosystem (August - September 2024)",
    months: [
      {
        title: "✅ August",
        list: [
          "NFT Marketplace Launch",
          "Introduction of Limited Edition NFTs for Stakers",
          "Partnerships with NFT Projects & Artists",
        ],
      },
      {
        title: "✅ September",
        list: [
          "VOXTX-Powered Play-to-Earn (P2E) Game Development",
          "Beta Release of NFT Game",
          "NFT Staking & Lending Features",
        ],
      },
    ],
  },
  {
    title: "Phase 5: Enterprise & Global Adoption (October - December 2024)",
    months: [
      {
        title: "✅ October",
        list: [
          "Enterprise Partnerships & Institutional Adoption",
          "Integration with Payment Gateways for Real-World Utility",
          "Exploring Regulatory Compliance & Licensing",
        ],
      },
      {
        title: "✅ November",
        list: [
          "Mobile App Release for VOXTX Ecosystem",
          "Expansion of Global Marketing & Community Growth",
          "User-Friendly Wallet & DApp Enhancements",
        ],
      },
      {
        title: "✅ December",
        list: [
          "Review of 2024 Goals & Achievements",
          "Announcing 2025 Roadmap & Future Developments",
          "Community Feedback & Feature Enhancements",
        ],
      },
    ],
  },
];

export default RoadmapPage;