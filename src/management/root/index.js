import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import history from "../histories"

import LoginReducer from "../reducers/LoginReducer"

const rootReducers = combineReducers({
    router: connectRouter(history),
    login: LoginReducer
})

export default rootReducers