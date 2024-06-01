import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Infographics from "./components/Infographics";
import Profile from "./components/Profile";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Infographics />
        <Profile />
        <Maps />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;
