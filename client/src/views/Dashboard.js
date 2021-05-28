import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getOrders} from '../store/actions/orderActions'
import OrderList from '../components/products/OrderList'
// import CartProduct from '../components/shoppingCart/CartProduct'


const Dashboard = () => {

    const dispatch = useDispatch()
    const userId = sessionStorage.getItem('userId')
    const orders = useSelector(state => state.order.orders)
    let shipped = orders? orders.filter(order => order.shipped):0  
    console.log(shipped,'hej')
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
            
    </div>
    
      {<div className="history">
        
        


        </div>}

        </div>

        </div>
    )
}

export default Dashboard
