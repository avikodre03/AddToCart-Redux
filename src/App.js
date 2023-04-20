import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';

import Nav from './Component/NavBar/Nav';
import Product from './Component/Product/Product';
import Cart from './Component/Cart/Cart';


function App() {
  return (
    <div className="App">
      <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
     
    </Routes>
    </div>
  );
}

export default App;
