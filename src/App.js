import Articles from "./components/arcticles/Articles";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss"

function App() {
  return (
    <>
      <div className="app">
        <Navbar home="active" />
        <Hero />
        <h1 className="title-article">The Blogs</h1>
        <div className="frame">
          <Articles />
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default App;
