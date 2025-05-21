import { useContext } from 'react' 
import CartContext from '../CartContext'
import SimilarProductItem from '../SimilarProductItem'
import './index.css'

const Cart = () => {

  const {cartItems,removeFromCart} = useContext(CartContext)
  // const storedCartItems=JSON.parse(localStorage.getItem("cartItems"))
  return (
    <div className='CartContainer'>

    <h1> Your Cart</h1>
    <ul>
    {cartItems.map(each=>(
      <>
      
      <SimilarProductItem similarItemDetails={each}/>
      <button onClick={()=>removeFromCart(each.id)}> Remove </button>
      </>
    ))}

    

    </ul>

</div>
  )
}

export default Cart