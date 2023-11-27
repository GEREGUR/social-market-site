import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Manufacture } from './pages/Manufacture'

function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/manufacture" element={<Manufacture/>}></Route>
      </Routes>
    </div>
    
  )
}

 export default App