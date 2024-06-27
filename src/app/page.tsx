"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/Capture3-removebg-preview.png";
import Nav from "../components/nav";
import Body from "../components/body";
import { ModalProvider } from "styled-react-modal";
import CustomCursor from "../components/customcursor";

const Home: React.FC = () => {
  return (
    <>
      <title>Kobe Anderson</title>
      <link rel="icon" href="/images/Capture3.png" />
      <CustomCursor />
      <div className={`flex flex-col items-center justify-between bg-url bg-contain h-fit`}>
        <ModalProvider>
          <Nav />
          <Image src={logo} alt="logo" width={350} height={350} />
          <Body />
        </ModalProvider>
      </div>
    </>
  );
};

export default Home;
