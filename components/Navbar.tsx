"use client";

import { links, themes } from "@/constants";
import Link from "next/link";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { AlignJustify } from "lucide-react";
import { CiCircleCheck } from "react-icons/ci";
import { format, toZonedTime } from "date-fns-tz";
import { AnimatePresence, motion } from "motion/react";
import WorkTogetherModal from "./ui/WorkTogetherModal";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  
  const [currentTheme, setCurrentTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light",
  ); // Default to 'light' theme
  const [currentTime, setCurrentTime] = useState("");

  const timeZone = "Asia/Riyadh"; // Your desired time zone

  // Handle theme changes and save to localStorage
  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    // Apply the saved theme on component mount
    const savedTheme = localStorage.getItem("theme") || "light";
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Handle scroll-based visibility for the navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  // Prevent scrolling when the mobile navigation is open

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const zonedTime = toZonedTime(now, timeZone);
      const formattedTime = format(zonedTime, "HH:mm", { timeZone });
      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <nav
      className={`sticky top-0 w-full bg-base-200/70 flex shadow-sm justify-between px-8 items-center py-4 text-white transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href={"#"} className="text-secondary text-xl font-bold">
        StrayCat
      </Link>

      <ul className="hidden md:flex gap-8 items-center">
        <h1 className="mr-4 gap-2 text-primary text-sm lg:flex hidden items-center">
          <span className="rounded-full md:text-sm">
            <CiCircleCheck size={24} />
          </span>{" "}
          Available For Work -{" "}
          <span className="text-base-content md:text-sm hidden lg:inline-block sm:text-sm font-bold">
            Madinah, SA • {currentTime} (UTC +3 AST)
          </span>
        </h1>

        {links.map((link) => (
          <li key={link.link}>
            <Link
              className="relative inline-block lg:text-base md:text-sm text-base-content after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              href={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-2 ml-2 text-base-content"
          >
            Theme
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
          >
            {themes.map((theme, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label={
                    (theme || "").charAt(0).toUpperCase() +
                    (theme || "").slice(1)
                  }
                  value={theme}
                  checked={currentTheme === theme}
                  onChange={() => handleThemeChange(theme || "dark")}
                />
              </li>
            ))}
          </ul>
        </div>

        <button
          className="btn border-secondary lg:btn-md hover:btn-secondary duration-300"
            onClick={() => setIsOpen(!isOpen)}
        >
          Get in touch
        </button>
      </ul>

      <button
        className="btn btn-ghost md:hidden"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <AlignJustify />
      </button>
      <AnimatePresence mode="wait">
        {isNavOpen && (
          <MobileNav
            setIsNavOpen={setIsNavOpen}
            isNavOpen={isNavOpen}
            handleThemeChange={handleThemeChange}
            currentTheme={currentTheme}
          />
        )}
      </AnimatePresence>
         <AnimatePresence>
              {isOpen  &&  (
                <WorkTogetherModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
              )}
            </AnimatePresence>
    </nav>
  );
}

type MobileNavProps = {
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
  isNavOpen: boolean;
  handleThemeChange: (theme: string) => void;
  currentTheme: string;
};

const MobileNav = ({
  setIsNavOpen,
  isNavOpen,
  handleThemeChange,
  currentTheme,
}: MobileNavProps) => {
  const navVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    // Prevent scrolling when the nav is open
    if (isNavOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    // Cleanup function to restore default behavior
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  return (
    <motion.nav
      variants={navVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className={`fixed top-0 left-0 w-full z-[100] h-screen bg-base-200 flex flex-col justify-center items-center gap-8 transform transition-transform duration-300 
        `}
    >
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={() => setIsNavOpen(false)}
      >
        ✕
      </button>
      <ul className="flex flex-col gap-8 text-center">
        {links.map((link) => (
          <li key={link.link}>
            <Link
              className="relative inline-block  text-3xl text-base-content after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              href={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" flex gap-2 items-center justify-center  text-3xl text-base-content"
          >
            Theme
            <svg
              width="30px"
              height="30x"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
          >
            {themes.map((theme, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label={
                    (theme || "").charAt(0).toUpperCase() +
                    (theme || "").slice(1)
                  }
                  value={theme}
                  checked={currentTheme === theme}
                  onChange={() => handleThemeChange(theme || "dark")}
                />
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </motion.nav>
  );
};
