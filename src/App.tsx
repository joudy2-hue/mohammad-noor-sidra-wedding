import { IntroScreen } from "./components/IntroScreen";
import { Navbar } from "./components/Navbar";
import { MusicButton } from "./components/MusicButton";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Couple } from "./sections/Couple";
import { Countdown } from "./sections/Countdown";
import { Details } from "./sections/Details";
import { Venue } from "./sections/Venue";
import { Notes } from "./sections/Notes";
import { RSVP } from "./sections/RSVP";

export default function App() {
  return (
    <>
      <IntroScreen />
      <Navbar />
      <main>
        <Hero />
        <Couple />
        <Countdown />
        <Details />
        <Venue />
        <Notes />
        <RSVP />
      </main>
      <Footer />
      <MusicButton />
    </>
  );
}
