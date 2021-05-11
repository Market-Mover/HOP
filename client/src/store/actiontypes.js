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

    }

  }
}

export default actiontypes;