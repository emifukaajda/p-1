import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cpsign from './pages/sign';
import XHm from './pages/home';
import XArtikel from './pages/artikel';
import Art2 from './pages/artikel-page';
import ForDashb from './pages/dashbiard';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/sign' element={<Cpsign />} />
    </Routes>
    <Routes>
      <Route path='/artikel' element={<XArtikel />} />
    </Routes>
    <Routes>
      <Route path='/home' element={<XHm />} />
    </Routes>
    <Routes>
      <Route path='/blog' element={<Art2 />} />
    </Routes>
    <Routes>
      <Route path='/dash' element={<ForDashb />} />
    </Routes>
  </Router>
  );
}

export default App;
