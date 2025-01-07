import { ProjectType } from "@/types";
import { format, toZonedTime } from "date-fns-tz";
export const links = [
  {
    name: "All projects",
    link: "#projects",
  },
  {
    name: "About me",
    link: "#about",
  },

  //     {
  //     name: 'services',
  //     link: '#services'
  // },
  //     {
  //     name: 'skills',
  //     link: '#skills'
  // },
];

const timeZone = "Asia/Riyadh"; // Your time zone
const now = new Date();
const zonedTime = toZonedTime(now, timeZone); // Adjust to time zone
export const myTimeZone = format(zonedTime, "HH:mm", { timeZone });

export const Projects: ProjectType[] = [
  {
    text: "Nft app",
    image: "/nft-seller.png",
    tags: ["Frontend development", "UI design"],
    direction: "items-start",
    styles: "md:items-start",
    imageHeight: "md:h-[500px] sm-[400px] h-[200px]",
    imageWidth: "md:w-[900px] sm:w-[600px] w-full",
  },
  {
    text: "Brew Cafe",
    image: "/BrewCafe.png",
    tags: ["Frontend development", "UI design"],
    direction: "items-end",
    styles: "md:items-end md:mr-20 md:mt-20",
    imageHeight: "md:h-[500px] h-[200px]",
    imageWidth: "md:w-[800px] sm:w-[600px] w-full",
  },
];

export const workTogetherlinks = [
  {
    name: "Instagram",
    link: "/",
  },
  {
    name: "Twitter",
    link: "x.com",
  },
  {
    name: "LinkedIn",
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },

  //     {
  //     name: 'services',
  //     link: '#services'
  // },
  //     {
  //     name: 'skills',
  //     link: '#skills'
  // },
];

export const themes = [
  "corporate",
  "night",
  "synthwave",
  "retro",
  "valentine",
  "halloween",
  "aqua",

  ,
];
