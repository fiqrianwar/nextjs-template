"use client";
import { Provider } from "react-redux";
import { Layouts } from "./components/layouts";
import { store } from "./redux/store/store";

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <Layouts>{children}</Layouts>
    </Provider>
  );
};

export default App;
