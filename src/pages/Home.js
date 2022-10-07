import Hero from "../components/Hero";
import Section2 from "../components/Section2";
import Modules from "../components/Modules";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section8 from "../components/Section8";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import ImpModule from "../components/ImpModule";
import Section6 from "../components/Section6";
import Social from "../components/Social";
import Bonus from "../components/Bonus";
import ProgramFor from "../components/ProgramFor";
import TimeLine from "../components/TimeLine";
import Companies from "../components/Companies";
import VideoReviews from "../components/VideoReviews";

const Home = () => {
  return (
    <div className="background">
      <Hero />
      <Section8 />
      <Section2 />
      <TimeLine />
      <Modules />
      <ImpModule />
      <ProgramFor />
      <Section4 />
      <Social />
      <Companies />
      <Section5 />
      <Section6 />
      <Bonus />
      <VideoReviews />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
