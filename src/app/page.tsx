"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js for navigation
import logo from "../../public/images/Capture3-removebg-preview.png";
import Nav from "../components/nav";
import Body from "../components/body";
import { ModalProvider } from "styled-react-modal";
import CustomCursor from "../components/customcursor";
import ContactForm from "../components/contactform";
import Icons from "../components/icons";

const Home: React.FC = () => {
  return (
    <>
      <title>Kobe Anderson</title>
      <link rel="icon" href="/images/Capture3.png" />
      <CustomCursor />
      <div className={`flex flex-col items-center justify-between bg-url bg-contain h-svh`}>
        <ModalProvider>
          <Nav />
          <Image src={logo} alt="logo" className="w-1/3"/>
          <Icons />
          <Body />
        </ModalProvider>
      </div>
      <ContactForm />
    </>
  );
};

export default Home;
