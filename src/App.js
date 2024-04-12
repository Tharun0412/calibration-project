import './App.css';
// import Loginpage from './components/Loginpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home'
// import Rpt1 from './components/MeterTestRpt'
import Rpt2 from './components/testreport/Metertestr1'

function App() {
  return (
    <BrowserRouter>
            <Routes>
               {/* <Route path='/' element={<Loginpage />} /> */}
               {/* <Route path='/' element={<Home />} />
                <Route path='/Rpt1' element={<Rpt1 />} />  */}
                <Route path='/' element={<Rpt2 />} /> 

           </Routes>
           </BrowserRouter>
  );
}

export default App;

