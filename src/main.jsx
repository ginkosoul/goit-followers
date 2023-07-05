import React from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Global styles={GlobalStyles} />
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
