import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./App.css";
import Footer from "./components/Footer";
// import Service from "./components/Service";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <Service /> */}
      <Footer/>
    </>
  );
}