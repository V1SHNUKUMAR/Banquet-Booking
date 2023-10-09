import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
