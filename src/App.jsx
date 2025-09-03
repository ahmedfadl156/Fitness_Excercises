import { useState } from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Excercises from './Pages/Excercises'
import ExcerciseDetails from './Pages/ExcerciseDetails'

function App() {
  const [excercises , setExcercises] = useState([]);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/excercises' element={<Excercises excercises={excercises} setExcercises={setExcercises}/>}/>
          <Route path='/excercises/:id' element={<ExcerciseDetails excercises={excercises}/>}/>
          <Route path='/category/:category' element={<Excercises excercises={excercises} setExcercises={setExcercises}/>}/>        
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
