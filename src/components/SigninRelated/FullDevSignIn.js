"use client"
import { useState, useEffect } from "react"
import Login from "./Login"
import "./signin.css"
import Cookies from "js-cookie"
import styles from "@/app/page.module.css";

export default function FullDevSignIn() {

    const [mode, setmode] = useState("");
    const cookieRes = Cookies.get("SiteTheme");
    useEffect(() => {
        setmode(cookieRes);
    }, [cookieRes])
 
    const showSignUp = () => {

    }

    return (
        <div className={mode === "Dark" ? styles.dark_bg : styles.light_bg} id="FullDevSigninCont">

            <div className='middelDivBtnCont' id="contofSignUpIn">

                <div className="textbtnCont" id="SigInPortion">

                    <h3>Register Now</h3>
                    <p>If you are not member of this website then create your account for successfull login</p>
                    <button onClick={showSignUp} style={{color:mode==="Dark"?"white":"0f051d",border:mode==="Dark"?"2px solid white":"2px solid #0f051d"}}>SIGN UP</button>

                </div>
            </div>

            <div id="loginContainer">
                <Login />
            </div>

        </div>
    )
}
