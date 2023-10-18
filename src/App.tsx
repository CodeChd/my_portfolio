import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <main className="max-xl:max-w-[90vw]  max-w-[80vw] mx-auto font-grotesk relative ">
        <Header />
        <Hero />
        <Skills />
        <Project />
      </main>
      <Footer />
    </>
  );
}

export default App;
