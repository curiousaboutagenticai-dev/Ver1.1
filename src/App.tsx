import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import AyushmanCaseStudy from './components/AyushmanCaseStudy';
import MarqueeProjects from './components/MarqueeProjects';
import Projects from './components/Projects';
import CareerTimeline from './components/CareerTimeline';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Sitemap from './components/Sitemap';
import Footer from './components/Footer';
import GDPRDialog from './components/GDPRDialog';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutMe />
      <AyushmanCaseStudy />
      <MarqueeProjects />
      <Projects />
      <CareerTimeline />
      <Certifications />
      <Skills />
      <Contact />
      <Sitemap />
      <Footer />
      <GDPRDialog />
      <CookieConsent />
    </div>
  );
}

export default App;
