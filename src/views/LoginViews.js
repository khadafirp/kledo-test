import { connect } from "react-redux"
import { login } from "../management/actions/LoginAction.js"
import { useState } from "react"

function LoginViews({login}) {

    var [email, setEmail] = useState(null)
    var [password, setPassword] = useState(null)

    return (
        <div class="halaman-login-q1e">
            <div class="header-mR6">
                <p class="kledo-test-gHA">KLEDO TEST</p>
                <div class="main-menu-D2C">
                <p class="profile-NQt">Profile</p>
                <div class="auto-group-kyhi-hTA">Login</div>
                </div>
            </div>
            <p class="text-7xl font-bold m-8">Login</p> {/*implementasi tailwind prototype*/}
            <div class="auto-group-ucey-uZE">
                <div class="field-email-zqa">
                <p class="email-MRE">Email</p>
                <input type="text" class="rectangle-5-J5a" onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div class="field-password-p3v">
                <p class="password-ZXJ">Password</p>
                <input class="rectangle-5-hNc text-6xl" type="text" onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <button class="auto-group-18dz-2Qt" onClick={() => login(
                    {
                        email: email,
                        password: password
                    }
                )}>Login</button>
            </div>
        </div>
    )
}

const mapState = (state) => ({
})

const mapDispatch = {
    login
}

export default connect(mapState, mapDispatch)(LoginViews)