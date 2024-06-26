
import './App.css';
import Home from './components/Home/Home';
// home.jsx ni file ne import karva
import Signin from './components/Signin/Signin';
// signin.jsx ni file ne import karva
import Signup from './components/Signup/Signup';
// signup.jsx ni file ne import karva
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Header from './components/Home/Header';

function App() {
  return(
    
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/Signin" element={ <Signin/> } />
          <Route path="/Signup" element={ <Signup/> } />
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;