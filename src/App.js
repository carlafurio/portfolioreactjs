import "./style.css";
import BtnTopo from './components/btn_topo';
import MenuMobile from './components/menu_mobile';
import Footer from './components/footer';
import Banner from './components/banner';
import About from './components/about';
import Projects from './components/projects';
import Contacts from "./components/contacts";
import Maps from "./components/maps";





function App() {
  return (
    <div className="App">
      
      <BtnTopo/>
      <MenuMobile/>
      <main className="page">
        <Banner/>
        <About/>
        <Projects/>
        <Contacts/>
        <Maps/>
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;
