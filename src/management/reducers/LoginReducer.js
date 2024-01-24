const initialState = {
    email: null,
    password: null,
    nama: "Khadafi Rohman Prihanda"
}

const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case "masuk":
            return {
                ...state,
                email: action.email,
                password: action.password
            }
        default:
            return state
    }
}

export default LoginReducer