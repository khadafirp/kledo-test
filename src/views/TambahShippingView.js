import gambarsatu from "../assets/ellipse-1-hQ8.png"
import gambardua from "../assets/log-out-1-idA.png"
import gambartiga from "../assets/home-1-61A.png"
import gambarempat from "../assets/truck-1-2iY.png"

import { connect } from "react-redux"
import { addList } from "../management/actions/ShippingAction"
import { useState } from "react"

import { logout } from "../management/actions/LoginAction"

function TambahShippingView({ addList, logout }) {

    const [nama, setNama] = useState(null)

    const tambah = (value) => {
        addList({name: value})
    }

    return (
        <div class="halaman-tambah-shipping-comps-xDr">
            <div class="header-gvY">
                <p class="kledo-test-admin-QrY">KLEDO TEST ADMIN</p>
                <div class="group-1-jP2">
                <img class="ellipse-1-UrQ" src={gambarsatu} alt="gambarsatu"/>
                <p class="tony-stark-chi">Tony Stark</p>
                </div>
            </div>
            <div class="auto-group-edkj-k3E">
                <div class="rectangle-4-GnG">
                </div>
                <div class="group-3-zTN">
                <div class="group-4-i8U" onClick={() => logout()}>
                    <img class="log-out-1-fJc" src={gambardua} alt="gambardua"/>
                    <p class="log-out-bi4">Log Out</p>
                </div>
                </div>
                <div class="group-2-8CC">
                <div class="group-3-ewE">
                    <img class="home-1-apt" src={gambartiga} alt="gambartiga"/>
                    <p class="dashboard-huW">Dashboard</p>
                </div>
                </div>
                <div class="group-2-R4p">
                <div class="group-3-9Fi">
                    <img class="truck-1-VaU" src={gambarempat} alt="gambarempat"/>
                    <p class="shipping-comps-2qJ">Shipping Comps</p>
                </div>
                </div>
                <div class="rectangle-6-Yoe">
                </div>
                <div class="rectangle-7-6KN">
                </div>
                <p class="nama-z9r">Nama</p>
                <p class="nama-harus-diisi-VcQ">Nama harus diisi</p>
                <p class="tambah-shipping-comps-bvL">Tambah Shipping Comps</p>
                <input class="rectangle-8-W1i" type="text" onChange={(event) => setNama(event.target.value)}/>
                <div class="group-5-zha" onClick={() => tambah(nama)}>Simpan</div>
            </div>
            </div>
    )
}

const mapState = (state) => ({
    namadata: state.shipping.namadata
})

const mapDispatch = {
    addList,
    logout
}

export default connect(mapState, mapDispatch)(TambahShippingView)