import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './components/home'
import Rental from './components/rental'
import Rents from './components/rents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/rental' element={<Rental/>}/>
          <Route exact path='/rents' element={<Rents/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
