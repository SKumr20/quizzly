'use client';
import React from "react";
import ToggleDarkmode from "../ui/ToggleDarkmode";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex bg-background justify-between p-8">
      <div className="flex justify-center items-center">
        {/* Visible on bigger devices */}
        <div className="hidden md:flex justify-center items-center gap-4">
          <Button variant="ghost" className="text-sm font-light">
            <Link href='/'>
              Home
            </Link>
          </Button>
          <Button variant="ghost" className="text-sm font-light">
            Get Started
          </Button>
          <Button variant="ghost" className="text-sm font-light">
            <Link href='/experience'>
              Experience
            </Link>
          </Button>
          <ToggleDarkmode />
        </div>
        
        {/* Small device toggle with ToggleDarkmode next to it */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost">
                <Menu className="scale-120" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col items-center p-6 w-full mt-5 space-y-4">
                <Link href='/' className="w-full text-center">
                  <SheetClose asChild>
                    <Button variant="ghost" className="text-md font-light w-full justify-center">
                      Home
                    </Button>
                  </SheetClose>
                </Link>
                
                <SheetClose asChild>
                  <Button variant="ghost" className="text-md font-light w-full justify-center">
                    Projects
                  </Button>
                </SheetClose>
                
                <Link href='/experience' className="w-full text-center">
                  <SheetClose asChild>
                    <Button variant="ghost" className="text-md font-light w-full justify-center">
                      Experience
                    </Button>
                  </SheetClose>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <ToggleDarkmode />
        </div>
      </div>
    </div>
  );
};
export default Navbar;