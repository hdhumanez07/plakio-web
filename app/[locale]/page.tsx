import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AppShowcase from "../components/AppShowcase";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="apps">
          <AppShowcase />
        </div>
      </main>
      <Footer />
    </>
  );
}
