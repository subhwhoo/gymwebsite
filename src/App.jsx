import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./Components/About/About.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
