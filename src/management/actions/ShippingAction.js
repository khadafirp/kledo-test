import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { basicDialogs } from "../../components/Dialogs/BasicDialogs"
import axios from 'axios'
import microservices from '../microservices/Microservices'
import { push, replace } from 'connected-react-router'
import { back } from 'redux-first-history/build/es6/actions'

export const getList = () => {
    return async (dispatch) => {
        try {
            axios.get(
                microservices.base_api + "finance/shippingComps",
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }
            ).then((response) => {
                if(response.data.success){
                    dispatch({
                        type: "get-list",
                        action: response.data.data
                    })
                } else {
                    basicDialogs({
                        title: "Gagal memuat data !",
                        text: response.data.message,
                        icon: "error",
                        confirmButtonText: "Tutup"
                    })
                }
            })
        } catch (error) {
            basicDialogs({
                title: "Error !",
                text: error.message,
                icon: "error",
                confirmButtonText: "Tutup"
            })
        }
    }
}

export const addList = (payload) => {
    return async (dispatch) => {
        if(payload.name === null){
            basicDialogs({
                title: "Perhatian !",
                text: "Form harus diisi.",
                icon: "error",
                confirmButtonText: "Tutup"
            })
        } else {
            Swal.showLoading()
            try {
                axios.post(
                    microservices.base_api + "finance/shippingComps",
                    payload,
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                ).then((response) => {
                    if(response.data.success){
                        dispatch({
                            type: "add-list",
                            action: response.data.data.name
                        })
                        basicDialogs({
                            title: "Berhasil !",
                            text: response.data.message,
                            icon: "success",
                            confirmButtonText: "OK"
                        })
                        setTimeout(() => {
                            dispatch(push("/admin-shipping-comps", replace))
                        }, 2000)
                    } else {
                        basicDialogs({
                            title: "Gagal memuat data !",
                            text: response.data.message,
                            icon: "error",
                            confirmButtonText: "Tutup"
                        })
                    }
                })
            } catch (error) {
                basicDialogs({
                    title: "Error !",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "Tutup"
                })
            }
        }
    }
}