import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CadItem from './pages/CadItem';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateItem from './pages/UpdateItem';
import CadVendor from './pages/CadVendor';
import UpdateVendor from './pages/UpdateVendor';
import SearchItem from './pages/SearchItem';
import SearchVendor from './pages/SearchVendor';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <div className="body-app">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<CadItem />} />
            <Route path="/produto/:id" element={<UpdateItem />} />
            <Route path="/buscar-item" element={<SearchItem />} />
            <Route path="/fornecedor" element={<CadVendor />} />
            <Route path="/buscar-fornecedor" element={<SearchVendor />} />
            <Route path="/fornecedor/:id" element={<UpdateVendor />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
