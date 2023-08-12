import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from './components/home'
import Rental from './components/rental'
import Rents from './components/rents'
import Display from './components/display'
import Room from './components/room'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/rental' element={<Rental/>}/>
          <Route exact path='/rents' element={<Rents/>}/>
          <Route exact path='/display' element={<Display/>}/>
          <Route exact path='/room/:id' element={<Room/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
