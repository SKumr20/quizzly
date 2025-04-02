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
import Title from "../ui/Title";

const Navbar = () => {
  return (
    <div className="flex bg-background justify-between items-center p-8">
      <div className="flex justify-center items-center">
        <Title />
        {/* Visible on bigger devices */}
        <div className="hidden md:flex ml-2 justify-center items-center gap-2">
          <Button variant="ghost" className="text-sm">
            <Link href='/'>
              Home
            </Link>
          </Button>
          <Button variant="ghost" className="text-sm">
            <Link href='/select-quiz'>
                Get Started
            </Link>
          </Button>
        </div>

      </div>
      {/* Right Side Div */}
      <div className="flex">
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
                    <Button variant="ghost" className="text-md w-full justify-center">
                      Home
                    </Button>
                  </SheetClose>
                </Link>
                
                <Link href="/select-quiz">
                  <SheetClose asChild>
                    <Button variant="ghost" className="text-md w-full justify-center">
                      Get Started
                    </Button>
                  </SheetClose>
                </Link>

              </div>
            </SheetContent>
          </Sheet>
        </div>
        <ToggleDarkmode />
      </div>
      
    </div>
  );
};
export default Navbar;