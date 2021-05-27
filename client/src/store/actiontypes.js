const actiontypes = () => {
  return {
    productCatalog: {
      set: 'SET_PRODUCT_CATALOG',
      setProduct: 'SET_PRODUCT'
    },
    cart: {
      add: 'ADD_TO_CART',
      remove: 'REMOVE_FROM_CART',
      delete: 'DELETE_PRODUCT'
    },
    user: {
      register: 'REGISTER_USER',
      login: 'LOGIN_USER',
      set: 'SET_USER',
      check: 'CHECK_USER',
      logout: 'LOGOUT_USER'

    },
    order: {
      createOrder: 'CREATE_ORDER',
      getOrders: 'GET_ORDERS',
      adminGet: 'ADMIN_GET',
      toggleShipped: 'TOGGLE_SHIPPED'
    },
    
    admin: {
      setAdminUsers: 'SET_ADMIN_USERS',
      setAdminUser: 'SET_ADMIN_USER',
      deleteUser: 'DELETE_USER'
    }

  }
}

export default actiontypes;