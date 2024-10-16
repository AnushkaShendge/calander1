import { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/signup';
import axios from 'axios';
import Calendar from './pages/Calendar'; // Ensure the component name matches the file name

function App() {
  // Correct the base URL for Axios
  axios.defaults.baseURL = 'http://localhost:4000'; // Added the missing slash
  axios.defaults.withCredentials = true;

  return ( 
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/home' element={<Calendar />} />
    </Routes>
  );
}

export default App;
