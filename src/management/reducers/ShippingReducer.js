const initialState = {
    listData: [],
    namadata: null
}

const ShippingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "get-list":
            return {
                ...state,
                listData: action.action
            }
    
        case "add-list":
            return {
                ...state,
                namadata: action.action
            }
        default:
            return state
    }
}

export default ShippingReducer