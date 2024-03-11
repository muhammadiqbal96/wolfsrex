"use client";
import Link from "next/link"
import "./withdrawls.css"
export default function page() {
  return (
    <div className="WithdrawlsOuterDiv">
      <div>
        <h2>Withdrawal Request</h2>
        <p><Link href="/dashboard" style={{ textDecoration: "none" }}>Dashboard</Link> / Withdrawal Request</p>
      </div>
      <div className="WithddrawlsFormContainer">
        <p>To Request Your Withdrawal, Please fill the following form.</p>
        <form>

          <label htmlFor="AvailableBalance">Available Balance</label>
          <input type="text" id="AvailableBalance" placeholder="0"/>
          <label htmlFor="DesiredBalance">Desired Amount</label>
          <input type="text" id="DesiredBalance" placeholder="e.g. 40" />
          <label htmlFor="RecievedBalance">Receive Amount <span style={{ color: "red" }}>5% Tax</span></label>
          <input type="text" id="RecievedBalance" placeholder="$0" />

          <div>
            <p>Your address is not set <button>Click here</button> to set address</p>
            <label htmlFor="2FA">2FA Code</label>
            <input type="text" placeholder="Enter 2FA Code" />
            <button type="submit">Send Code</button>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
