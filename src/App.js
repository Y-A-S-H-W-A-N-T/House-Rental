import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Rental from './components/rental'
import Rents from './components/rents'
import Display from './components/display'
import Room from './components/room'
import Navbar from './components/navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path='/' element={<Rents/>}/>
          <Route exact path='/rental' element={<Rental/>}/>
          <Route exact path='/display' element={<Display/>}/>
          <Route exact path='/room/:id' element={<Room/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
