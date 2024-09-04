import Features from "../components/Features";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Objective from "../components/Objective";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Objective />
      <About />
      <Footer />
    </>
  );
}

export default Home;
