import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-orange-500/30">
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
