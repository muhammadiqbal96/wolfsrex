"use client"
import Link from "next/link"
import './style.css'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react";
export default function Navbar({ mode }) {
    const { data: session, status: sessionStatus } = useSession();
    const router = useRouter();

    const [e, sete] = useState("100%");
    return (
        <div style={{ position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: "2" }}>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <nav className="full-nav" style={{ backgroundColor: mode === "Dark" ? "#0f051d" : "white" }}>
                <div className="flogoimg">
                    <img src="/wolfsrexlogo.png" alt="Wolfsrex" />
                </div>

                <ul className="ful1">
                    <li><Link href="#about" style={{ color: mode === "Dark" ? "white" : "#0f051d" }}>About</Link></li>
                    <li><Link href="#packages" style={{ color: mode === "Dark" ? "white" : "#0f051d" }} >Packages</Link></li>
                    <li><Link href="#team" style={{ color: mode === "Dark" ? "white" : "#0f051d" }}>Team</Link></li>
                    <li><Link href="#question" style={{ color: mode === "Dark" ? "white" : "#0f051d" }}>Faqs</Link></li>
                </ul>

                <ul className="ful2">
                    {
                        sessionStatus === "authenticated" && <li><span className="material-symbols-outlined" title="Dashboard" style={{ cursor: "pointer", fontSize: "32px" }} onClick={()=>router.push("/dashboard")}>dashboard_customize</span></li>
                    }
                    <li><i className="fa-brands fa-square-x-twitter"></i></li>
                    <li><i className="fa-brands fa-square-facebook"></i></li>
                    <li>
                        {
                            sessionStatus === "unauthenticated" ?
                                <button onClick={() => router.push("/signin")}>Sign In</button> :
                                <button onClick={() => signOut()}>Sign Out</button>
                        }
                    </li>
                </ul>
            </nav>

            <nav className="ham-nav" style={{ backgroundColor: mode === "Light" ? "white" : "#0f051d" }}>
                <div className="flogoimg">
                    <img src="/wolfsrexlogo.png" alt="Wolfsrex" />
                </div>

                <i className="fa-solid fa-bars" onClick={() => sete("0%")}></i>
            </nav>

            <div className="slider" style={{ top: "0px", right: e, background: mode === "Light" ? "white" : "#0f051d" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <i className="fa-solid fa-arrow-left" onClick={() => sete("100%")}></i>
                    <h4 style={{ marginTop: "25px", paddingRight: "20px" }}>Navigation</h4>
                </div>
                <hr />
                <ul className="ful1">
                    <li><Link href="#about" style={{ color: mode === "Dark" ? "white" : "#0f051d" }} onClick={() => sete("100%")}>About</Link></li>
                    <li><Link href="#packages" style={{ color: mode === "Dark" ? "white" : "#0f051d" }} onClick={() => sete("100%")}>Packages</Link></li>
                    <li><Link href="#team" style={{ color: mode === "Dark" ? "white" : "#0f051d" }} onClick={() => sete("100%")}>Team</Link></li>
                    <li><Link href="#question" style={{ color: mode === "Dark" ? "white" : "#0f051d" }} onClick={() => sete("100%")}>Faqs</Link></li>
                </ul>

                <div className="btnLinkCont">
                    {
                        sessionStatus === "unauthenticated" ?
                            <button onClick={() => router.push("/signin")}>Sign In</button> :
                            <button onClick={() => signOut()}>Sign Out</button>
                    }
                    <ul className="ful2">
                        {
                            sessionStatus === "authenticated" && <li><span className="material-symbols-outlined" title="Dashboard" style={{ cursor: "pointer", fontSize: "40px" }} onClick={()=>router.push("/dashboard")}>dashboard_customize</span></li>
                        }
                        <li><Link href="/" style={{ color: mode === "Dark" ? "white" : "black" }}><i className="fa-brands fa-square-x-twitter"></i></Link></li>
                        <li><Link href="/" style={{ color: mode === "Dark" ? "white" : "black" }}><i className="fa-brands fa-square-facebook"></i></Link></li>
                    </ul>
                </div>

            </div>

        </div>
    )
}