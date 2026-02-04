
import './App.css';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LatestRelease from './components/LatestRelease';
import Navbar from './components/Navbar';
import PodcastShow from './components/PodcastShow';
import UpcomingShows from './components/UpcomingShows';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <UpcomingShows/>
      <LatestRelease/>
      <PodcastShow/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
