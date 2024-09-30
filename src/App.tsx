import React from "react";
import { Layouts } from "./components/layouts";

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Layouts>{children}</Layouts>
    </div>
  );
};

export default App;
