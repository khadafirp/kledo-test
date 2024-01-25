const initialState = {
    listData: [],
    namadata: null,
    id: null,
    isLoading: false
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

        case "simpan-data":
            return {
                ...state,
                namadata: action.action.nama,
                id: action.action.id
            }

        case "edit-list":
            return {
                ...state,
                namadata: action.action.nama,
                id: action.action.id
            }
        case "get-loader":
            return {
                ...state,
                isLoading: action.action
            }
        default:
            return state
    }
}

export default ShippingReducer