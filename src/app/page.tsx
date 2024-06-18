"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/Capture3-removebg-preview.png";
import Nav from "../components/nav";
import Body from "../components/body";
import { ModalProvider } from "styled-react-modal";



export default function Home() {
  return (
    <main className="flex h-fit flex-col items-center justify-between bg-red-800">
      <ModalProvider>
      <Nav />
      <Image src={logo} alt="logo" width={350} height={350}/>
      <Body />
      </ModalProvider>
    </main>
  );
}
