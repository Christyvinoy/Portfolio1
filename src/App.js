import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Main from './Components/Main'


function App() {
  return (
    <div className='bg-black'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
