"use client"
import "./Registerstyle.css";
import Link from "next/link";
import cookie from "js-cookie";
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { SendEmail } from "@/Nodemailer/Nodemailer";

export default function Signup() {

  const { data: session, status: sessionStatus } = useSession();

  const [mode, setmode] = useState("");
  const cookieRes = cookie.get("SiteTheme");
  const router = useRouter();

  useEffect(() => {
    setmode(cookieRes);
  }, [cookieRes]);

  const [errorcolor, seterrorcolor] = useState("red");
  const [error, seterror] = useState();
  const [refral_code, setrefral_code] = useState();
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [mobile_number, setmobile_number] = useState();
  const [password, setpassword] = useState();

  const [isLoading, setisLoading] = useState(false);

  const RegisterUser = async (e) => {
    e.preventDefault();
    setisLoading(true);
    let data = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        refral_code,
        username,
        email,
        mobile_number,
        password
      })
    });
    data = await data.json();
    setisLoading(false)
    if (data.success === true) {

      SendEmail(email, "Wolfsrex-Sign Up", "You're receiving this message because of a successful sign-up.If you're aware of this sign-up, please disregard this notice.\n\nThanks,\n\nWolfsrex Team");

      seterrorcolor("green")
      seterror("✔ User created sucessfully.");
      router.push("/signin");
    }

    if (data.success === false) {
      seterror(`✘ ${data.result}`);
    }
  }

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  if (sessionStatus === "loading") {
    return <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: mode === "Dark" ? "#0f051d" : "white" }}>
      <div className="spinner-border"></div>
    </div>;
  }

  return (
    sessionStatus === "unauthenticated" && (<>
      <div className={mode === "Dark" ? `container d-flex flex-column justify-content-center align-items-center vh-100 ${styles.dark_bg}` : `container d-flex flex-column justify-content-center align-items-center vh-100 ${styles.light_bg}`} id='registermain'>
        <h1>Register</h1>

        <form onSubmit={RegisterUser}>

          <p style={{ color: errorcolor, marginBottom: "-5px", alignSelf: "flex-start", fontFamily: "ubuntu", fontWeight: "600", cursor: "pointer" }} onClick={() => seterror("")}>{error && error}</p>

          <input type="text" placeholder='Referral Code' pattern="[0-9]{5}" title="Must contain 5 numbers" value={refral_code} onChange={(e) => setrefral_code(e.target.value)} required />

          <input type="text" placeholder='Username' value={username} onChange={(e) => setusername(e.target.value)} required />

          <input type="text" placeholder='email@example.com' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" value={email} onChange={(e) => setemail(e.target.value)} required />

          <input type="tel" placeholder='Mobile Number' pattern="[0][3][0-9]{9}" title="It must be like pattern 03123456789" value={mobile_number} onChange={(e) => setmobile_number(e.target.value)} required />

          <input type="password" placeholder='Password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" value={password} onChange={(e) => setpassword(e.target.value)} required />

          <button type="submit">{
            isLoading === true ? <div class="spinner-border spinner-border-sm text-info"></div> : "Register"
          }</button>
        </form>
        <div id='or'>
          -OR-
        </div>
        <div id='end'>
          Already have account? <Link href="/signin" style={{ fontFamily: "monospace" }}>LogIn</Link>
        </div>
      </div>
    </>)
  )
}
