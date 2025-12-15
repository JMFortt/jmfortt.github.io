import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Header from "./sections/Header/Header";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Footer from "./sections/Footer/Footer";
import Particles from "./common/Particles";

function App() {
  return (
    <>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
