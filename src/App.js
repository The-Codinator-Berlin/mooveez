import { Route, Routes } from 'react-router-dom';
import './App.css';
import './views/Page404'
import Home from "./views/Home"
import Mooveez from './views/Mooveez';
import About from './views/About';
import Page404 from './views/Page404';
import Navigation from './components/Navigation';
import LoginRegister from './views/LoginRegister';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mooveez" element={<Mooveez />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="*" element={<Page404 />} />
      </Routes>


    </div>
  );
}

export default App;
