import Hero from "../components/Hero";
import Nav from "../components/Nav";
import WhyChooseUs from "../components/WhyChooseUs";
import PowerfulSolution from "../components/PowerfulSolution";
import HowItWorksAndSolutions from "../components/HowItWorks";
 

function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <WhyChooseUs />
      <PowerfulSolution/>
      <HowItWorksAndSolutions/>
      </>
    
  );
}

export default Home;