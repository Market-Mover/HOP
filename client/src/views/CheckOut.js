import React from 'react'
import { useSelector } from 'react-redux';
import CartProduct from '../components/shoppingCart/CartProduct';


const CheckOut = () => {

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity)

    return (
        <div>
            
            <div>
      {
        shoppingCart && shoppingCart.map(product => (
          <CartProduct key={product._id} product={product} />
        ))
      }
      {/* {
        shoppingCart.length < 1 && empty
      } */}

      <div className="dropdown-divider"></div>

      <div className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Total Price: <span>{totalCartAmount}</span>
          </div>
          <div>
            Items <span>{totalCartQuantity} st</span>
          </div>
          <small className="text-muted">tax free FTW</small>
        </div>
        <button className="btn btn-info">Checkout</button>
      </div>
      
    </div>

        </div>
    )
}

export default CheckOut
