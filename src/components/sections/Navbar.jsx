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
import GithubButton from "../ui/GithubButton";
import { Separator } from "../ui/separator";
import GithubSmallBtn from "../ui/GithubSmallBtn";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 right-0 bg-background">
      <div className="flex justify-between items-center p-5">
        <div className="flex justify-center items-center">
          <Title />
          {/* Visible on bigger devices */}
          <div className="hidden md:flex ml-2 justify-center items-center gap-2">
            <Button variant="ghost" className="text-sm text-foreground">
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
        <div className="flex items-center gap-2">
          <GithubButton className="hidden sm:block" />
          {/* Small device toggle */}
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
          {/* Smaller github Button for small screens */}
          <div className="md:hidden block">
            <GithubSmallBtn />
          </div>
          <ToggleDarkmode />
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;