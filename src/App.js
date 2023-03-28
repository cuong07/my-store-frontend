import { Route, Routes } from 'react-router';
import './App.css';
import { Products, ProductDetail } from './component';
import { Home, Public } from './page/public';
import path from './utils/path'

function App() {
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />} >
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.MENS} element={<Products />} />
          <Route path={path.WOMENS} element={<Products />} />
          <Route path={path.TOPS} element={<Products />} />
          <Route path={path.BOTTOMS} element={<Products />} />
          <Route path={path.OUTERWEARS} element={<Products />} />
          <Route path={path.ACCESSORIES} element={<Products />} />
          <Route path={path.PRODUCTDETAIL} element={<ProductDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
