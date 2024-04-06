import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cpsign from './pages/sign';
import XHm from './pages/home';
import XArtikel from './pages/artikel';
import Art2 from './pages/artikel-page';


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
  </Router>
  );
}

export default App;
