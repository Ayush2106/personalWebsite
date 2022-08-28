import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home1 from "./Components/Home1/Home1";
// import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About"
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import End from "./Components/END/index";
function App() {
  return (
    <div
      className="App" >
      <Navbar />
      <Home1/>
      {/* <Project/> */}
      <About/>
      <Portfolio/>
      <Resume/>
      <Footer/>
      <End/>
    </div>
  );
}

export default App;
