import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import history from "../histories"

import LoginReducer from "../reducers/LoginReducer"
import ShippingReducer from "../reducers/ShippingReducer"

const rootReducers = combineReducers({
    router: connectRouter(history),
    login: LoginReducer,
    shipping: ShippingReducer
})

export default rootReducers