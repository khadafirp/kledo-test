import gambarsatu from "../assets/ellipse-1-mxg.png"
import gambardua from "../assets/log-out-1.png"
import gambartiga from "../assets/home-1.png"
import gambarempat from "../assets/truck-1.png"
import gambarlima from "../assets/group-8.png"

import { connect } from "react-redux"
import { getList, navigateEdit } from "../management/actions/ShippingAction"
import React, { useState } from "react"
import { useNavigate } from "react-router"

function ShippingComps({ isLoading, listData, getList, navigateEdit }) {

    const [list, setList] = useState([])
    const navigate = useNavigate()

    const pencarian = (value) => {
            getList({name: value})
        setList(listData)
    }

    React.useEffect(() => {
        if(list.length === 0){
            getList({name: ""})
            setList(listData)
        }
    }, [getList, listData, list])

    return (
        <div class="halaman-shipping-comps-Z1E">
            <div class="header-hNL">
                <p class="kledo-test-admin-QXe">KLEDO TEST ADMIN</p>
                <div class="group-1-wGg">
                <img class="ellipse-1-hme" src={gambarsatu} alt="gambarsatu"/>
                <p class="tony-stark-3Ki">Tony Stark</p>
                </div>
            </div>
            <div class="auto-group-3shz-Zor">
                <div class="rectangle-4-h9N">
                </div>
                <div class="group-3-cn8">
                <div class="group-4-Li8">
                    <img class="log-out-1-6BW" src={gambardua} alt="gambardua"/>
                    <p class="log-out-q96">Log Out</p>
                </div>
                </div>
                <div class="group-2-MNL">
                <div class="group-3-gQc">
                    <img class="home-1-QLc" src={gambartiga} alt="gambartiga"/>
                    <p class="dashboard-8XW">Dashboard</p>
                </div>
                </div>
                <div class="group-2-rCc">
                <div class="group-3-mKa" >
                    <img class="truck-1-ugg" src={gambarempat} alt="gambarempat"/>
                    <p class="shipping-comps-Eyr">Shipping Comps</p>
                </div>
                </div>
                <div class="rectangle-6-9qv">
                </div>
                <div class="rectangle-7-Hx8">
                </div>
                <p class="shipping-comps-sfS">Shipping Comps</p>
                <div class="rectangle-9-n1i">
                </div>
                <p class="nama-73z">Nama</p>
                {
                    isLoading ?
                    <div className="group-5-1QG">Sedang memuat data ...</div>
                    :
                    list.length === 0 ?
                    <div class="group-5-1QG">Data tidak ada</div>
                    :
                    list.map((value, index) =>
                            <div className="group-5-1QG" key={index} onClick={() => navigateEdit({
                                nama: value.name,
                                id: value.id
                            })}>{ value.name }</div>
                    )
                }
                <img class="group-8-M6k" src={gambarlima} alt="gambarlima" onClick={() => navigate("/admin-tambah-shipping")}/>
            </div>
            <input class="rectangle-8-gep" placeholder="Cari" onChange={(event) => pencarian(event.target.value)}>
            </input>
            </div>
    )
}

const mapState = (state) => ({
    listData: state.shipping.listData,
    isLoading: state.shipping.isLoading
})

const mapDispatch = {
    getList,
    navigateEdit
}

export default connect(mapState, mapDispatch)(ShippingComps)