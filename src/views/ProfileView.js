import { useNavigate } from "react-router"
import profilepic from "../assets/ellipse-1-2b6.png"
import { connect } from "react-redux"
import { login } from "../management/actions/LoginAction"
import React from "react"

function ProfileView({ nama, email, noHp, login }) {

    const navigate = useNavigate()

    React.useEffect(() => {
        if(nama === null){
            login({
                email: "me@kledo.id",
                password: "123456",
                isLogin: false
            })
        }
    })

    return (
        <div class="halaman-profile-qvC">
            <div class="header-xjv">
                <p class="kledo-test-UiG">KLEDO TEST</p>
                <div class="main-menu-c3n">
                <div class="auto-group-pwdj-y9E" >Profile</div>
                <div class="login-qx8" onClick={() => navigate("/")}>Login</div>
                </div>
            </div>
            <p class="profile-mKz">Profile</p>
            <div class="auto-group-fnzg-UkC">
                <div class="rectangle-3-zCk">
                </div>
                <p class="login-JUL">Login</p>
                <div class="field-nama-QnG">
                <p class="nama-k5S">Nama</p>
                <p class="tony-stark-V32">{ nama }</p>
                </div>
                <div class="field-nama-1XA">
                <p class="alamat-Ymz">Alamat</p>
                <p class="malybu-mansion-VBS">Malybu Mansion</p>
                </div>
                <div class="field-nama-EPv">
                <p class="no-hp-Zwz">No. HP</p>
                <p class="item-212-970-4133-6wv">{ noHp }</p>
                </div>
                <div class="field-nama-dgx">
                <p class="email-mHN">Email</p>
                <p class="starkenterprisescom-Jo6">{ email }</p>
                </div>
                <div class="field-nama-SeQ">
                <p class="motto-b1W">Motto</p>
                <p class="the-best-thing-about-a-boolean-is-even-if-you-are-wrong-you-are-only-off-by-a-bit-YBe">The best thing about a boolean is even if you are wrong, you are only off by a bit.</p>
                </div>
                <img class="ellipse-1-SXv" src={profilepic} alt="profile_pic"/>
            </div>
            </div>
    )
}

const mapState = (state) => ({
    nama: state.login.nama,
    email: state.login.email,
    noHp: state.login.noHp
})

const mapDispatch = {
    login
}

export default connect(mapState, mapDispatch)(ProfileView)