import "./App.css";
import Profile from "./sections/Profile/Profile";
import Projects from "./sections/Projects/Projects";
import Header from "./sections/Header/Header";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
