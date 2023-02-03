import Detail from './component/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='detail/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<h1>error page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
