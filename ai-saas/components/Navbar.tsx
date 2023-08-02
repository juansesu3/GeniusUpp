import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import MobileSidevbar from "./MobileSidebar";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center p-4">
      <MobileSidevbar />
      <div className="flex w-full justify-end ">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
