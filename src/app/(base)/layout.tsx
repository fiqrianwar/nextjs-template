import React from "react";

const BaseLayouts = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default BaseLayouts;
