import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  return (
    <header className="py-8 xl:py-8 text-white bg-gradient-to-l from-gray-700 to-gray-500 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <h1 className="text-4xl text-accent">
            Destinyyy
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop Nav */}
        <div className="hidden xl:flex item-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
