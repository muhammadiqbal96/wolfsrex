"use client"
import { useEffect, useState } from 'react'
import cookies from "js-cookie"
export default function Loader() {

    const cookieRes = cookies.get("SiteTheme")
    const [mode, setmode] = useState();

    useEffect(() => {
        setmode(cookieRes)
    }, [cookieRes]);

    return <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: mode === "Dark" ? "#0f051d" : "white",width:"100%" }}>
        <div className="spinner-border text-info"></div>
    </div>;
}
