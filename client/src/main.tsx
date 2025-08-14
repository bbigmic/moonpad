import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { RecoilRoot } from "recoil";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <BrowserRouter>
      <TonConnectUIProvider
        manifestUrl="https://safeton.fun/manifest.json"
        uiPreferences={{ theme: THEME.DARK }}
        actionsConfiguration={{
          twaReturnUrl: "https://safeton.fun",
        }}
      >
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </TonConnectUIProvider>
    </BrowserRouter>
  </RecoilRoot>
);
