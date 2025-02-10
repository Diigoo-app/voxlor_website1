import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Button = ({ className = "", children, ...props }) => (
  <button className={`rounded-[10px] w-[96px] h-[40px] ${className}`} {...props}>
    {children}
  </button>
);

const NAV_ITEMS = ["Roadmap", "How to Buy", "Tokenomics", "FAQs"];

const BuyDialogBox = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="w-[510px] h-[668px] bg-white border-4 border-black rounded-[20px] relative z-10">
      <img
        onClick={onClose}
        className="absolute top-4 right-4 cursor-pointer"
        src="images/CloseIcon.svg"
        alt="close"
      />
      <div className="p-8 flex flex-col gap-3">
        <span className="font-bold text-black text-[40px] text-center stroke-text">Connect Wallet</span>
        <button className="w-full h-[64px] text-[25px] font-bold rounded-[10px] bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white">
          BEST WALLET
        </button>
        <button className="w-full h-[64px] text-[25px] font-bold rounded-[10px] bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white">
          WALLET CONNECT
        </button>
        <span className="font-bold text-black text-[30px] text-center stroke-text">I don’t have a wallet</span>
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isRoadmapPage = location.pathname === "/roadmap";

  return (
    <header className="flex justify-between items-center px-6 md:px-16 lg:px-40 py-4 w-full text-white absolute top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
      <a href="/">
      <img src="images/LogoText.png" alt="logo" className="h-20 md:h-16 lg:h-24" />
    </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>
      </div>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:flex gap-6 font-semibold text-[16px]">
        {NAV_ITEMS.map((item) => {
          const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link key={item} to={`/${formattedItem}`} className="text-white">
              {item}
            </Link>
          );
        })}
      </nav>

      {/* Action Buttons (Desktop) */}
      <div className="hidden md:flex items-center gap-6">
        {!isRoadmapPage ? (
          <>
            <Button
              className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white"
              onClick={() => setIsDialogOpen(true)}
            >
              Buy Voxtx
            </Button>

            {isDialogOpen && <BuyDialogBox onClose={() => setIsDialogOpen(false)} />}

            <Menu as="div" className="relative inline-block text-left font-bold text-[16px]">
              <MenuButton className="flex items-center gap-1 text-white">
                Eng
                <ChevronDownIcon className="h-5 w-5" />
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg ring-1 ring-black/5">
                <MenuItem>
                  <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Hindi</a>
                </MenuItem>
                <MenuItem>
                  <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Spanish</a>
                </MenuItem>
                <MenuItem>
                  <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Arabic</a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </>
        ) : (
          <>
            <Button className="text-white border-[1px] border-white">Sign In</Button>
            <Button className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white">
              Sign Up
            </Button>
          </>
        )}
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-4 md:hidden">
          <nav className="flex flex-col gap-4 text-white">
            {NAV_ITEMS.map((item) => {
              const formattedItem = item.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link key={item} to={`/${formattedItem}`} className="text-white text-lg">
                  {item}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-4 mt-6">
            {!isRoadmapPage ? (
              <>
                <Button
                  className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white w-full"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Buy Voxtx
                </Button>

                {isDialogOpen && <BuyDialogBox onClose={() => setIsDialogOpen(false)} />}

                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="flex items-center gap-1 text-white text-lg">
                    Eng
                    <ChevronDownIcon className="h-5 w-5" />
                  </MenuButton>
                  <MenuItems className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg ring-1 ring-black/5">
                    <MenuItem>
                      <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Hindi</a>
                    </MenuItem>
                    <MenuItem>
                      <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Spanish</a>
                    </MenuItem>
                    <MenuItem>
                      <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-100">Arabic</a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </>
            ) : (
              <>
                <Button className="text-white border-[1px] border-white w-full">Sign In</Button>
                <Button className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white w-full">
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
