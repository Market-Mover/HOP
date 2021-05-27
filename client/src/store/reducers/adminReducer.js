import actiontypes from '../actiontypes'

const initState = {
    adminUser: null,
    adminUsers: null
}

const adminReducer = (state = initState, action) => {
    switch(action.type) {
        default:
            return state
    } 
}

export default adminReducer