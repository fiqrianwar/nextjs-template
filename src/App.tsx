"use client";
import { Provider } from "react-redux";
import { Layouts } from "./components/layouts";
import { persistor, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layouts>{children}</Layouts>
      </PersistGate>
    </Provider>
  );
};

export default App;
