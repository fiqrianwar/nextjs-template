"use client";
import React from "react";
import Website from "./website/Website";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Layouts = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isSmallDevice } = useMediaQuery();

  console.log(isSmallDevice);

  return <Website>{children}</Website>;
};

export default Layouts;
