"use client";
import React from "react";
import Website from "./website/Website";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Mobile from "./mobile/Mobile";

const Layouts = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isSmallDevice } = useMediaQuery();

  return !isSmallDevice ? <Website>{children}</Website> : <Mobile />;
};

export default Layouts;
