import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mens from './Components/Mens';
import { createContext, useState } from 'react';
import { MensProduct } from './Components/MensProduct';
import Home from './Components/Home';
import { WomensProduct } from './Components/WomensProduct';
import Womens from './Components/Womens';
import { KidsProduct } from './Components/KidsProduct';
import Kids from './Components/Kids';
import Cart from './Components/Cart';
import { Product } from './Components/Product';
import Loginpage from './Components/Loginpage';
import SingleProductPage from './Components/SingleProductPage';
import Signuppage from './Components/Signuppage';
import Demo from './Components/Demo';
import Search from './Components/Search';

export const productContext = createContext()

function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [searchFocus, setSearchFocus] = useState(false)
  const [singleProduct, setSingleProduct] = useState({})

  const [Products, setProducts] = useState([...WomensProduct, ...KidsProduct, ...MensProduct])
  const [filter, setFilter] = useState([...WomensProduct, ...KidsProduct, ...MensProduct])



  const HandleSingleProduct = (id) => {
    setSingleProduct(Products.find((x) => x.id === id))

  }
  function addtocart(id) {

    const obj = Products.find((i) => i.id === id)
    if (cart.includes(obj)) {
      alert('You are already selected this item.')
    } else {
      setCart([...cart, obj])
      setTotal(total + obj.price)
    }
  }

  function Increaseqty(id) {
    const obj = Products.find((i) => i.id === id)

    obj.qty++
    setCart([...cart])
    setTotal(total + obj.price)


  }
  function Decreaseqty(id) {
    const obj = Products.find((i) => i.id === id)
    if (obj.qty > 1) {
      obj.qty--
      setCart([...cart])
      setTotal(total - obj.price)

    }

  }
  const focusFilter = (e) => {
    setSearchFocus(true)
  }
  const BlurFilter = (e) => {
    e.target.value = ''
    // setSearchFocus(false)

  }
  const ChangeFilter = (e) => {
    const val = e.target.value;
    let objArr = Products.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()))
    setFilter(objArr)
  }

  return (
    <>
      <BrowserRouter>
        <productContext.Provider value={{ setSearchFocus, filter, ChangeFilter, BlurFilter, searchFocus, focusFilter, SingleProductPage, Increaseqty, Decreaseqty, HandleSingleProduct, total, setTotal, singleProduct, Product, MensProduct, WomensProduct, KidsProduct, cart, setCart, addtocart }}>
          <Navbar />
         
              <Routes>

                <Route path='/' element={<Home />}></Route>
                <Route path='Mens' element={<Mens />}></Route>
                <Route path='Womens' element={<Womens />}></Route>
                <Route path='Kids' element={<Kids />}></Route>
                <Route path='Cart' element={<Cart />}></Route>
                <Route path='Loginpage' element={<Loginpage />}></Route>
                <Route path='Loginpage/Signuppage' element={<Signuppage />}></Route>


                <Route path='singleproduct' element={<SingleProductPage />}></Route>
                <Route path='search/singleproduct' element={<SingleProductPage />}></Route>
                <Route path='search' element={<Search />}></Route>



              </Routes>
        





        </productContext.Provider>

      </BrowserRouter>

    </>
  );
}

export default App;
