import './App.css';
import Navbar from "./Component/Navbar"
import FirstHeading from './Component/FirstHeading';
import CME1 from './Component/CME1';
import CME2 from './Component/CME2';
import CME3 from './Component/CME3';
import CME4 from './Component/CME4';
import SecondLastFooter from './Component/SecondLastFooter';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstHeading/>
      <CME1/>
      <CME2/>
      <CME3/>
      <CME4/>
      <SecondLastFooter/>
      <Footer/>
    </div>
  );
}

export default App;
