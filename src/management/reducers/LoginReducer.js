const initialState = {
    email: null,
    password: null,
    nama: null,
    noHp: null
}

const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case "masuk":
            return {
                ...state,
                email: action.action.email,
                nama: action.action.name,
                noHp: action.action.phone_number
            }
        default:
            return state
    }
}

export default LoginReducer