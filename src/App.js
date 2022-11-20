import Articles from "./components/arcticles/Articles";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Articles />
      </div>
</>
  );
}

export default App;
