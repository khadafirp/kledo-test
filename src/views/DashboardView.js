import gambarsatu from "../assets/ellipse-1-5kY.png"
import gambardua from "../assets/log-out-1-f3r.png"
import gambartiga from "../assets/home-1-1bA.png"
import gambarempat from "../assets/truck-1-Qzg.png"
import { useState } from "react"
import React from "react"
import { useNavigate } from "react-router"
import { logout } from "../management/actions/LoginAction"
import { connect } from "react-redux"
import { getList } from "../management/actions/ShippingAction"

function DashboardView({logout, getList}) {

    const [nama, setNama] = useState(null)

    const navigate = useNavigate()

    React.useEffect(() => {
        setNama(localStorage.getItem("name"))
        getList({name: ""})
    }, [setNama, getList])

    return (
        <div class="halaman-admin-dashboard-RvU">
            <div class="header-Nqi">
                <p class="kledo-test-admin-VfS">KLEDO TEST ADMIN</p>
                <div class="group-1-RJC">
                <img class="ellipse-1-yqW" src={gambarsatu} alt="gambarsatu"/>
                <p class="tony-stark-vEx">{nama}</p>
                </div>
            </div>
            <div class="auto-group-kkny-FHE">
                <div class="rectangle-4-BRn">
                </div>
                <div class="group-3-iAp">
                <div class="group-4-pje" onClick={() => logout()}>
                    <img class="log-out-1-y6k" src={gambardua} alt="gambardua"/>
                    <p class="log-out-WMa">Log Out</p>
                </div>
                </div>
                <div class="group-2-36c">
                <div class="group-3-9vL">
                    <img class="home-1-srL" src={gambartiga} alt="gambartiga"/>
                    <p class="dashboard-c3E">Dashboard</p>
                </div>
                </div>
                <div class="group-2-vZi">
                <div class="auto-group-eisn-Snx" onClick={() => navigate("/admin-shipping-comps")}>
                    <img class="truck-1-Py6" src={gambarempat} alt="gambarempat"/>
                    <p class="shipping-comps-7u6">Shipping Comps</p>
                </div>
                </div>
                <div class="rectangle-6-qKJ">
                </div>
                <div class="rectangle-7-Na8">
                </div>
                <p class="dashboard-Vue">Dashboard</p>
                <div class="rectangle-10-D4x">
                </div>
                <div class="group-5-8hi">
                <p class="selamat-datang-4bN">Selamat Datang </p>
                <p class="tony-stark-b5W">{nama}</p>
                </div>
            </div>
        </div>
    )
}

const mapState = (state) => ({

})

const mapDispatch = {
    logout,
    getList
}

export default connect(mapState, mapDispatch)(DashboardView)