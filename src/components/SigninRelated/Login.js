"use client"
import Link from "next/link";
import "./Loginstyle.css"
import cookie from "js-cookie";
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

export default function Login() {

  const [mode, setmode] = useState("");
  const cookieRes = cookie.get("SiteTheme");

  useEffect(() => {
    setmode(cookieRes);
  }, [cookieRes]);

  return (
    <>
      <div className={mode === "Dark" ? `container d-flex flex-column justify-content-center align-items-center vh-100 ${styles.dark_bg}` : `container d-flex flex-column justify-content-center align-items-center vh-100 ${styles.light_bg}`} id='loginmain'>
        <h1>LogIn</h1>
        <form>
          
          {/* <p style={{ color: errorcolor, marginBottom: "-5px", alignSelf: "flex-start", fontFamily: "ubuntu", fontWeight: "600", cursor: "pointer" }} onClick={() => seterror("")}>{error && error}</p> */}
          {/* <input type="text" placeholder='email / username' value={username} onChange={(e) => setusername(e.target.value)} required /> */}
          {/* <input type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} required /> */}

          <input type="text" placeholder='email / username' required />
          <input type="password" placeholder='Password' required />
          <Link href="/" id='forget'>Forget Password</Link>
          <button type="submit">Login</button>
        </form>
        <div id='or'>
          -OR-
        </div>
        <div id='end'>
          Don't have account? <Link href="/signup">Register here</Link>
        </div>
      </div>
    </>
  )
}
