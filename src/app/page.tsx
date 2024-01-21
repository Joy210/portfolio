import { getDribbbleShots } from "@/utils/getDribbbleShots";
import Navabar from "../../components/navbar/Navabar";

const Home = async () => {
  const shots = await getDribbbleShots();
  console.log(shots);

  return (
    <main className="wrapper">
      <Navabar />

      {shots && shots.map((shot: any) => <p key={shot.id}> {shot.title} </p>)}

      {/* <HeroBanner />
      <Marquee />

      <SelectedWork />

      <ClientsFeedback />

      <BigTextMarquee />

      <GlobalWork />

      <About />

      <RecentExploration />

      <Contact /> */}
    </main>
  );
};

export default Home;
