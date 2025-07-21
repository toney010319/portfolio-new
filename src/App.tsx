import "./App.css";
import AboutMe from "./component/AboutMe";
import ContactUs from "./component/Contactus";
import Experience from "./component/Experience";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Services from "./component/Services";
 

import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
        <Experience />
      <Project />
      <ContactUs/>
      
    </>
  );
}

export default App;
