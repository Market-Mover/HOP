import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getOrders} from '../store/actions/orderActions'
import OrderList from '../components/products/OrderList'
// import CartProduct from '../components/shoppingCart/CartProduct'


const Dashboard = () => {

    const dispatch = useDispatch()
    const userId = sessionStorage.getItem('userId')
    const orders = useSelector(state => state.order.orders)

    useEffect(() => {
        
        dispatch(getOrders(userId))
    }, [dispatch, userId])

    return (
        <div>
            
            <div>
            
            <div>
        {
        orders && orders.map(order => (
            <OrderList key={order._id} order={order} />
        )) 
        }
      

      {/* <div className="dropdown-divider"></div>

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
        
      </div> */}
      
    </div>

        </div>

        </div>
    )
}

export default Dashboard
