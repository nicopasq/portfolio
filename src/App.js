import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Route, Routes } from 'react-router';
import About from './About';
import Contact from './Contact';
import Home from './Home';

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
