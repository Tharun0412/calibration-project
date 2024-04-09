import './App.css';
// import Loginpage from './components/Loginpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home'
import Rpt1 from './components/reports/CalibrationInfoRpt'

function App() {
  return (
    <BrowserRouter>
            <Routes>
               {/* <Route path='/' element={<Loginpage />} /> */}
               {/* <Route path='/' element={<Home />} /> */}

                <Route path='/' element={<Rpt1 />} /> 

           </Routes>
           </BrowserRouter>
  );
}

export default App;
