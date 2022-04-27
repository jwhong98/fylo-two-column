import "./App.css";
import Content from "./components/Content/Content";
import EarlyAccess from "./components/EarlyAccess/EarlyAccess";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <EarlyAccess />
      <Footer />
    </>
  );
}

export default App;
