import LoginFormContainer from './Components/LoginFormContainer';
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRouter'
import Products from './Components/Products'
import Cart from './Components/Cart'
import  NotFound from './Components/NotFound'
import CartContext from './Components/CartContext'
import ProductItemDetails from './Components/ProductItemDetails';
import { useState ,useEffect} from 'react';

function App() {

   const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

 


  const addToCart=(product)=>{

    setCartItems((prevState)=>[...prevState,product])
    
  }

  const removeFromCart=(productId)=>{

     setCartItems((prevState)=>prevState.filter(item=>item.id!==productId))

  }

useEffect(() => {ls
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
 
  
  return (

    <CartContext.Provider value={{cartItems,addToCart,removeFromCart}}>

    <BrowserRouter>
    <div className="App">
     
      <Routes>
      <Route path='/login' element = { <LoginFormContainer/>}/> 
       
      <Route path='/' element = { 

        <ProtectedRoute>
        <>
        <Header/>
        <Home/>

        </>
        </ProtectedRoute>
        }/>

        

        <Route path="/products" element ={
          
          <ProtectedRoute>
            <Header/>
          <Products/>
          </ProtectedRoute>
          }/>

          <Route path="/cart" element={

            <ProtectedRoute>
            <Header/>
            <Cart/>
            </ProtectedRoute>

          }/>

          <Route path="/products/:id" element={

            <ProtectedRoute>
            <Header/>
            <ProductItemDetails/>
            </ProtectedRoute>

          }/>



          <Route path="*" element = {<NotFound/>}/>
         
     
      </Routes>
      
    </div>
    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
