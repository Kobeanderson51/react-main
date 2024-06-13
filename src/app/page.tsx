"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/Capture3-removebg-preview.png";
import Nav from "../components/nav";
import Body from "../components/body";

export default function Home() {
  return (
    <main className="flex h-fit flex-col items-center justify-between bg-red-800">
      <Nav />
      <Image src={logo} alt="logo" />
      <Body />
    </main>
  );
}
