import './index.css';
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Rooms from './components/Rooms';
import Islider from './components/Islider';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Offers/>
        <Plan/>
        <Rooms/> 
        <Islider/>
        <Footer/>
      
      
    </div>
  );
}

export default App;
