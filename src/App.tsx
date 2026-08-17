import { Builder } from "./components/Builder";
import { Creative } from "./components/Creative";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Impact } from "./components/Impact";
import { Marquee } from "./components/Marquee";
import { Navigation } from "./components/Navigation";
import { Timeline } from "./components/Timeline";
import { WorkSystems } from "./components/WorkSystems";
import { Works } from "./components/Works";
import { useI18n } from "./i18n/i18n";

function App() {
  const { t } = useI18n();

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t("跳到主要内容")}
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Marquee />
        <Impact />
        <Works />
        <WorkSystems />
        <Builder />
        <Creative />
        <Timeline />
      </main>
      <Footer />
      <div className="noise" aria-hidden="true" />
    </>
  );
}

export default App;
