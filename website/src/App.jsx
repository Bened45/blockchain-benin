import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import MissionVision from './components/MissionVision';
import Pillars from './components/Pillars';
import Programs from './components/Programs';
import UpcomingEvents from './components/UpcomingEvents';
import Partners from './components/Partners';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <MissionVision />
        <Pillars />
        <Programs />
        <UpcomingEvents />
        <Partners />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
