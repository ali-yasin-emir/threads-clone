"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Bottombar = () => {
  const pathname = usePathname();

  return (
    <div className="max-md:fixed max-md:flex items-center  justify-between hidden left-0 bottom-0 h-20 bg-[#101010]/90 text-[#B7B1A8] w-full max-md:px-12 max-xl:px-24">
      {navLinks.map((link) => (
        <Link
          href={link.route}
          key={link.label}
          className="py-4 px-6 rounded-lg hover:bg-[#1C1C1C] cursor-pointer z-10"
        >
          {pathname === link.route ? (
            <link.fillIcon className="text-white text-[32px]" />
          ) : (
            <link.lineIcon className="text-[#B7B1A8] text-[32px]" />
          )}
        </Link>
      ))}
    </div>
  );
};

export default Bottombar;
