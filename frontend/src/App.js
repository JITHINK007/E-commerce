
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Fans_banner from './Components/Assets/banner_Fans.png'
import Stabilizers_banner from './Components/Assets/banner_Stabilizers.png'
import Waterheater_banner from './Components/Assets/banner_Waterheater.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Fans' element={<Shopcategory banner={Fans_banner} category="Fans"/>}/>
        
        <Route path='/Stabilizers' element={<Shopcategory banner={Stabilizers_banner} category="Stabilizers"/>}/>
        <Route path='/Waterheater' element={<Shopcategory banner={Waterheater_banner} category="Waterheater"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>

        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>


      </Routes>
      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
