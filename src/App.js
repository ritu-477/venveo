import './App.css';
import Hero from './components/Hero';
import Featured from './components/Featured';
import SatisfiedClients from './components/SatisfiedClients';
import DigitalMarketing from './components/DigitalMarketing';
import Outsmart from './components/Outsmart';
import GrowthPartner from './components/GrowthPartner';
import ActualResults from './components/ActualResults';
import MarketingCards from './components/MarketingCards';
import Ready from './components/Ready';
import LearnFrom from './components/LearnFrom';
import Footer from './components/Footer';
import BackToTop from './common/BackToTop';

function App() {
  return (
    <>
      <Hero />
      <Featured />
      <SatisfiedClients />
      <DigitalMarketing />
      <Outsmart />
      <GrowthPartner />
      <ActualResults />
      <LearnFrom />
      <MarketingCards />
      <Ready />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
