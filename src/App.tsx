import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="max-w-[80vw] mx-auto font-grotesk relative">
      <Header />
      <Hero />
      <Skills />
      <Project />
    </main>
  );
}

export default App;
