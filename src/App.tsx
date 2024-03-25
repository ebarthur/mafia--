import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Features from './assets/components/Features';
import Addons from './assets/components/Addons';
import Gameplay from './assets/components/Gameplay';
import Account from './assets/components/Account';
import Bonuses from './assets/components/Bonuses';
import Footer from './assets/components/Footer';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Addons />
      <Gameplay />
      <Account />
      <Bonuses />
      <Footer />
    </main>
  );
};

export default App;
