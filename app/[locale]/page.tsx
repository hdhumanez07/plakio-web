import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import VideoTutorial from "../components/VideoTutorial";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VideoTutorial />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
