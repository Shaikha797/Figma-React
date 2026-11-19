import Hero from "../components/Hero";
import Nav from "../components/Nav";
import WhyChooseUs from "../components/WhyChooseUs";
import PowerfulSolution from "../components/PowerfulSolution";
import HowItWorksAndSolutions from "../components/HowItWorks";
 import ClientMarquee from "../components/ClientMarquee";
 import OurSolutions from "../components/OurSolutions";
import HomierPlatform from "../components/HomierPlatform";
import WhyHomier from "../components/WhyHomier";
import CustomerStories from "../components/CustomerStories";
import FaqSection from "../components/FaqSection";
import CtaFooter from "../components/CtaFooter";

function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <ClientMarquee />
      <WhyChooseUs />
      <PowerfulSolution/>
      <HowItWorksAndSolutions/>
      <OurSolutions />
      <HomierPlatform />
      <WhyHomier />
      <CustomerStories />
      <FaqSection/>
      <CtaFooter/>
      </>
    
  );
}

export default Home;