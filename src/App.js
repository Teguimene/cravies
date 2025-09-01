import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/product/ProductDetailPage';
import { Footer } from './layouts/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/product/:id/details' element={<ProductDetailPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
