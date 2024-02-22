"use client"
import styles from "@/app/page.module.css";
import Navbar from "./Navbar/Navbar";
import cookie from "js-cookie";
import { useEffect, useState } from "react";
import "./front.css"
import InvestChoose from "./InvestChoose.js/InvestChoose";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Package from "./Packages/Package";
import Teamquestion from "./TeamQuestion/Teamquestion";

export default function Front() {

  const [mode, setmode] = useState("");
  const cookieRes = cookie.get("SiteTheme");

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  useEffect(() => {
    setmode(cookieRes);
  }, []);
  
  if (cookieRes == undefined) {
    cookie.set("SiteTheme", "Dark", { expires: 24 })
  }

  const setMode = () => {
    if (cookieRes === "Dark") {
      cookie.set("SiteTheme", "Light", { expires: 24 })
    } else {
      cookie.set("SiteTheme", "Dark", { expires: 24 })
    }
    setmode(cookie.get("SiteTheme"));
  }

  return (
    <div className={mode === "Dark" ? styles.dark_bg : styles.light_bg} id="outermostDivFront">
      <div className="container-xxl">
        <Navbar mode={mode} />
        <div className="toggle_btn" style={{zIndex:"1"}}>
          <span className="material-symbols-outlined" onClick={setMode} style={{ backgroundColor: mode === "Light" ? "#0f051d" : "white", color: mode === "Light" ? "white" : "black" }}>{mode === "Light" ? "dark_mode" : "light_mode"}</span>
        </div>
        <div className="inestCont">
          <InvestChoose mode={mode}/>
        </div>
        <Package mode={mode}/>
        <Teamquestion mode={mode}/>
      </div>
    </div >
  );
}
