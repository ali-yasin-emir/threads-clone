import { RiHome2Line } from "react-icons/ri";
import { RiHome2Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { HiPencilSquare } from "react-icons/hi2";
import { RiHeart3Line } from "react-icons/ri";
import { RiHeart3Fill } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

export const navLinks = [
  {
    label: "home",
    route: "/",
    lineIcon: RiHome2Line,
    fillIcon: RiHome2Fill,
  },
  {
    label: "search",
    route: "/search",
    lineIcon: IoSearchOutline,
    fillIcon: IoSearch,
  },
  {
    label: "create",
    route: "/onboarding",
    lineIcon: HiOutlinePencilSquare,
    fillIcon: HiPencilSquare,
  },
  {
    label: "activity",
    route: "/activity",
    lineIcon: RiHeart3Line,
    fillIcon: RiHeart3Fill,
  },
  {
    label: "profile",
    route: "/profile",
    lineIcon: IoPersonOutline,
    fillIcon: IoPerson,
  },
];

