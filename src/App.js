import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cpsign from './pages/sign';


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/sign' element={<Cpsign />} />
    </Routes>
  </Router>
  );
}

export default App;
