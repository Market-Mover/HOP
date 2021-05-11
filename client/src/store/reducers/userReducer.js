import actiontypes from '../actiontypes'

const initState = {
    loggedIn: false,
    userID: null,
    token: null
}

const userReducer = (state = initState, action) => {

    switch(action.type) {


        default: 
         return state 
    }
}

export default userReducer 