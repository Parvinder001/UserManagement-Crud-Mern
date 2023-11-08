
import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Dashboard from './components/Dashboard';

import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/all-user' element={<AllUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
