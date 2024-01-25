import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { basicDialogs } from "../../components/Dialogs/BasicDialogs"
import axios from 'axios'
import microservices from '../microservices/Microservices'
import { push, replace } from 'connected-react-router'

export const getList = (payload) => {
    return async (dispatch) => {
        try {
            if(localStorage.getItem("token") === null){
                dispatch(replace("/"))
            } else {
                dispatch({
                    type: "get-loader",
                    action: true
                })
                setTimeout(() => {
                    axios.get(
                        microservices.base_api + "finance/shippingComps",
                        {
                            headers: {
                                'Authorization': `Bearer ${localStorage.getItem("token")}`
                            },
                            params: payload
                        }
                    ).then((response) => {
                        if(response.data.success){
                            dispatch({
                                type: "get-list",
                                action: response.data.data
                            })
                            dispatch({
                                type: "get-loader",
                                action: false
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
                }, 500)
            }
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

export const editList = (payload) => {
    return async (dispatch) => {
        if(payload.nama === null || payload.nama === ""){
            basicDialogs({
                title: "Perhatian !",
                text: "Form harus diisi.",
                icon: "error",
                confirmButtonText: "Tutup"
            })
        } else {
            Swal.showLoading()
            try {
                axios.put(
                    microservices.base_api + "finance/shippingComps/" + payload.id,
                    {
                        name: payload.nama
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                ).then((response) => {
                    console.log("data = " + JSON.stringify(response.data))
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

export const hapusList = (payload) => {
    return async (dispatch) => {
        if(payload.id === null || payload.id === ""){
            basicDialogs({
                title: "Perhatian !",
                text: "Maaf ID kosong.",
                icon: "error",
                confirmButtonText: "Tutup"
            })
        } else {
            basicDialogs(
                {
                    title: "Yakin ?",
                    text: "Hapus data ?",
                    icon: "question",
                    confirmButtonText: "Hapus"
                },
                true,
                () => {
                    Swal.showLoading()
                    try {
                        axios.delete(
                            microservices.base_api + "finance/shippingComps/" + payload.id,
                            {
                                headers: {
                                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                                }
                            }
                        ).then((response) => {
                            if(response.data.success){
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
            )
        }
    }
}

export const navigateEdit = (payload) => {
    return async (dispatch) => {
        localStorage.setItem("nama", payload.nama)
        dispatch({
            type: "simpan-data",
            action: payload
        })
        dispatch(push("/admin-edit-shipping"))
    }
}