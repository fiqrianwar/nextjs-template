import React from "react";

const AuthLayouts = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default AuthLayouts;
