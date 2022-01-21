import Extension from "./extension/Extension";
import Feature from "./feature/Feature";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";
import Navbar from "./navbar/Navbar";
import Question from "./question/Question";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Feature/>
      <Extension/>
      <Question/>
      <Footer/>
    </div>
  );
}

export default App;
