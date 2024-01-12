import Contact from "../../components/Contact";
import GlobalWork from "../../components/GlobalWork";
import HeroBanner from "../../components/HeroBanner";
import Marquee from "../../components/Marquee";
import Navabar from "../../components/Navabar";
import SelectedWork from "../../components/SelectedWork";

export default function Home() {
  return (
    <main className="wrapper">
      <Navabar />

      <HeroBanner />
      <Marquee />

      <SelectedWork />

      <GlobalWork />

      <Contact />
    </main>
  );
}
