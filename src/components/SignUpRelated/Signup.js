import "./Registerstyle.css";
import Link from "next/link";
export default function Signup() {
  return (
    <>
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100" id='registermain'>
      <h1>Register</h1>

      <form>

        {/* <p style={{ color: errorcolor, marginBottom: "-5.5px", alignSelf: "flex-start", fontFamily: "ubuntu", fontWeight: "600", cursor: "pointer" }} onClick={() => seterror("")}>{error && error}</p> */}

        {/* <input type="text" placeholder='Referral Code' pattern="[0-9]{5}" title="Must contain 5 numbers" value={referral_code} onChange={(e) => setreferral_code(e.target.value)} required />

        <input type="text" placeholder='Username' value={username} onChange={(e) => setusername(e.target.value)} required />

        <input type="text" placeholder='email@example.com' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" value={email} onChange={(e) => setemail(e.target.value)} required />

        <input type="tel" placeholder='Mobile Number' pattern="[0][3][0-9]{9}" title="It must be like pattern 03123456789" value={mobile_number} onChange={(e) => setmobile_number(e.target.value)} required />

        <input type="password" placeholder='Password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" value={password} onChange={(e) => setpassword(e.target.value)} required /> */}

        <input type="text" placeholder='Referral Code' pattern="[0-9]{5}" title="Must contain 5 numbers" required />

        <input type="text" placeholder='Username' required />

        <input type="text" placeholder='email@example.com' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required />

        <input type="tel" placeholder='Mobile Number' pattern="[0][3][0-9]{9}" title="It must be like pattern 03123456789" required />

        <input type="password" placeholder='Password' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" required />

        <button type="submit">Register</button>
      </form>
      <div id='or'>
        -OR-
      </div>
      <div id='end'>
        Already have account? <Link href="/" style={{ fontFamily: "monospace" }}>LogIn</Link>
      </div>
    </div>
  </>
  )
}
