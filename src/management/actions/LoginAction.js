import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { basicDialogs } from "../../components/Dialogs/BasicDialogs"
import axios from "axios"
import microservices from '../microservices/Microservices'
import { replace } from 'connected-react-router'

export const login = (payload) => {
    return async (dispatch) => {
        if(payload.email === null || payload.password === null){
            basicDialogs({
                title: "Perhatian !",
                text: "Form harus diisi.",
                icon: "error",
                confirmButtonText: "Tutup"
            })
        } else {
            try {
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
                    } else {
                        basicDialogs({
                            title: "Login Gagal !",
                            text: response.data.message,
                            icon: "error",
                            confirmButtonText: "OK"
                        })
                    }
                    
                })
            }catch(e){
                basicDialogs({
                    title: "Error !",
                    text: e.message,
                    icon: "error",
                    confirmButtonText: "OK"
                })
            }
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        localStorage.clear()
        dispatch(replace('/'))
    }
}