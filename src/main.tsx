import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/noto-sans-sc";
import "@fontsource-variable/noto-serif-sc";
import { MotionConfig } from "motion/react";
import App from "./App";
import { I18nProvider } from "./i18n/i18n";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </I18nProvider>
  </React.StrictMode>,
);
