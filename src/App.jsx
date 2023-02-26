import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
