import { Route, Routes } from 'react-router';
import './App.css';
import { Home, Public } from './page/public';
import path from './utils/path'

function App() {
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />} >
          <Route path={path.HOME} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
