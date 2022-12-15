
import './App.css';
import {  Routes,Route } from 'react-router-dom';

import LoginRegister from './components/LoginRegister';
import Home from './Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login'element={  <LoginRegister/>}/>
        <Route path='/home'element={  <Home/>}/>
  
    </Routes>
    </div>
  );
}

export default App;
