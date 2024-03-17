import Image from "next/image";
import { Button } from "./button";
import { Search, ShoppingBag } from "lucide-react";

import { navLists } from "@/constants";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-m screen-max-width">
        <Link href={"/"} className="flex">
          <Image
            src={"/assets/images/apple.svg"}
            alt="Apple"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </Link>

        <div className="flex flex-1 justify-center max-sm:hidden items-center">
          {navLists.map((nav) => (
            <div
              className="px-5 text-sm cursor-pointer text-gray-400 hover:text-white transition-all"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Button>
            <Search className="h-[18px] w-[18px]" />
          </Button>
          <Button>
            <Image
              src={"/assets/images/bag.svg"}
              alt="bag"
              height={18}
              width={18}
            />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
