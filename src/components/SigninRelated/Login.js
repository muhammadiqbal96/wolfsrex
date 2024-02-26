"use client"
import Link from "next/link";
import "./Loginstyle.css"
import cookie from "js-cookie";
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {

  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  const [errorcolor, seterrorcolor] = useState("red");
  const [error, seterror] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  
  const [isLoading, setisLoading] = useState(false);
  const [mode, setmode] = useState("");
  const cookieRes = cookie.get("SiteTheme");

  useEffect(() => {
    setmode(cookieRes);
  }, [cookieRes]);

  const signinUser = async (e) => {
    e.preventDefault();
    setisLoading(true);
    let res = await signIn("credentials", {
      redirect: false,
      username,
      password
    })
    setisLoading(false);
    if (res?.error) {
      seterrorcolor("red");
      seterror("✘ Inavlid email or password.");
    } else {
      seterrorcolor("green")
      seterror("✔ Loging in please wait...");
      setTimeout(() => {
        if (res?.url) router.push("/dashboard")
      }, 1000);
    }
  }

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);


  if (sessionStatus === "loading") {
    return <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: mode === "Dark" ? "#0f051d" : "white" }}>
        <div className="spinner-border text-info"></div>
    </div>;
  }

  return (
    sessionStatus === "unauthenticated" && (<>
      <div className={mode === "Dark" ? `container d-flex flex-column justify-content-center align-items-center vh-100 ${styles.dark_bg}` : `container d-flex flex-column justify-content-center align-items-center vh-100 ${styles.light_bg}`} id='loginmain'>
        <h1>Sign In</h1>
        <form onSubmit={signinUser}>

          <p style={{ color: errorcolor, marginBottom: "-5px", alignSelf: "flex-start", fontFamily: "ubuntu", fontWeight: "600", cursor: "pointer" }} onClick={() => seterror("")}>{error && error}</p>
          <input type="text" placeholder='email / username' value={username} onChange={(e) => setusername(e.target.value)} required />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} required />

          <Link href="/" id='forget'>Forget Password</Link>
          <button type="submit">{
            isLoading===true ? <div class="spinner-border spinner-border-sm text-info"></div>:"Login"}</button>
        </form>
        <div id='or'>
          -OR-
        </div>
        <div id='end'>
          Don't have account? <Link href="/signup">Register here</Link>
        </div>
      </div>
    </>)
  )
}
