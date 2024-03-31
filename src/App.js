import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main">
      <Header/>
      <h1>-----------</h1>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      <h1>-----------</h1>
      <Footer/>
    </div>
  );
}

export default App;
