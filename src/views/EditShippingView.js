import gambarsatu from "../assets/ellipse-1.png"
import gambardua from "../assets/log-out-1-S2Y.png"
import gambartiga from "../assets/home-1-t76.png"
import gambarempat from "../assets/truck-1-CBv.png"
import gambarlima from "../assets/group-8-Msi.png"

import { connect } from "react-redux"
import React, { useState } from "react"
import { editList, hapusList, getList } from "../management/actions/ShippingAction"

function EditShippingView({ isLoading, nama, id, editList, hapusList, getList, listData }) {

    const [namaData, setNamaData] = useState(null)
    const [idData, setIdData] = useState(null)

    const changeVal = (event) => {
        setNamaData(event)
    }

    React.useEffect(() => {
        if(namaData === null){
            getList({
                name: localStorage.getItem("nama")
            })
            setNamaData(listData.length === 0 ? null : listData[0].name)
            setIdData(listData.length === 0 ? null : listData[0].id)
        }
    }, [setNamaData, setIdData, id, nama, namaData, getList, listData])

    return (
        <div class="halaman-edit-shipping-comps-JnQ">
            <div class="header-3tQ">
                <p class="kledo-test-admin-8Rz">KLEDO TEST ADMIN</p>
                <div class="group-1-u5N">
                <img class="ellipse-1-cEg" src={gambarsatu} alt="gambarsatu"/>
                <p class="tony-stark-6fe">Tony Stark</p>
                </div>
            </div>
            <div class="auto-group-hp9a-jTi">
                <div class="rectangle-4-D7z">
                </div>
                <div class="group-3-4PW">
                <div class="group-4-uf2">
                    <img class="log-out-1-d5E" src={gambardua} alt="gambardua"/>
                    <p class="log-out-icU">Log Out</p>
                </div>
                </div>
                <div class="group-2-nsE">
                <div class="group-3-ePe">
                    <img class="home-1-6Fe" src={gambartiga} alt="gambartiga"/>
                    <p class="dashboard-MBa">Dashboard</p>
                </div>
                </div>
                <div class="group-2-zVS">
                <div class="group-3-5Wt">
                    <img class="truck-1-ayS" src={gambarempat} alt="gambarempat"/>
                    <p class="shipping-comps-hYG">Shipping Comps</p>
                </div>
                </div>
                <div class="rectangle-6-L5S">
                </div>
                <div class="rectangle-7-2yr">
                </div>
                <p class="nama-GNQ">Nama</p>
                {
                    namaData === null || namaData === "" ?
                    <p class="nama-harus-diisi-XZE">Nama harus diisi</p>
                    :
                    <p></p>
                }
                <p class="edit-shipping-comps-aGc">Edit Shipping Comps</p>
                <input class="rectangle-8-Spc"type="text" defaultValue={isLoading ? "Sedang memuat ..." : namaData} onChange={(event) => changeVal(event.target.value)} />
                <button class="group-5-Fn4" onClick={() => editList({
                    id: idData,
                    nama: namaData
                })}>Simpan</button>
                <img class="group-8-he4" src={gambarlima} alt="gambarlima" onClick={() => hapusList({id: idData})}/>
            </div>
            </div>
    )
}

const mapState = (state) => ({
    nama: state.shipping.namadata,
    id: state.shipping.id,
    listData: state.shipping.listData,
    isLoading: state.shipping.isLoading
})

const mapDispatch = {
    editList,
    hapusList,
    getList
}

export default connect(mapState, mapDispatch)(EditShippingView)