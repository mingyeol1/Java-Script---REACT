import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Info from './components/Info';

function App() {
  return (
   <Routes>
    <Route path='/' Component={Home} />
    <Route path='/user/:username' element={<User />} />
    <Route path='/info/:num' element={<Info />} />


   </Routes>
  );
}

export default App;
