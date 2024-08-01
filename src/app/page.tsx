"use client";
import React from "react";
import Link from "next/link"; // Import Link from Next.js for navigation
import Nav from "../components/nav";
import Body from "../components/body";
import { ModalProvider } from "styled-react-modal";
import CustomCursor from "../components/customcursor";
import Icons from "../components/icons";
import dotenv from "dotenv";

const Home: React.FC = () => {
  dotenv.config();

  return (
    <>
      <title>Kobe Anderson</title>
      <link rel="icon" href="/images/Capture3.png" />
      <CustomCursor />
      <div
        className="flex flex-col items-center justify-between bg-[url('/images/cool-background.png')] bg-cover bg-center min-h-screen text-white p-4"
      >
        <ModalProvider>
          <Nav />
          <div className="flex flex-col items-center mt-10">
            <video autoPlay loop muted playsInline className="w-auto h-48 bg-transparent">
              <source src="../images/Kobe-Anderson.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Icons />
          </div>
          <Body />
        </ModalProvider>
      </div>
    </>
  );
};

export default Home;
