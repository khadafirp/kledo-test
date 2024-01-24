import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { basicDialogs } from "../../components/Dialogs/BasicDialogs"
import axios from "axios"
import microservices from '../microservices/Microservices'
import { replace } from 'connected-react-router'

export const login = (payload) => {
    return async (dispatch) => {
        Swal.showLoading()
        axios.post(microservices.base_api + "authentication/login", payload).then((response) => {
            if(response.data.success){
                basicDialogs({
                    title: "Login Berhasil !",
                    text: "Selamat, anda berhasil masuk.",
                    icon: "success",
                    confirmButtonText: "OK"
                })
                localStorage.setItem("token", response.data.data.data.access_token)
                localStorage.setItem("name", response.data.data.user.name)
                dispatch({
                    type: "masuk",
                    action: payload
                })
                dispatch(replace("/admin-dashboard"))
            }
        })
    }
}

export const logout = () => {
    return async (dispatch) => {
        localStorage.clear()
        dispatch(replace('/'))
    }
}