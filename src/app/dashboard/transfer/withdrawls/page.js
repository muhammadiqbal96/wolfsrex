import Link from "next/link"
import "./withdrawls.css"
export default function page() {
  return (
    <div className="WithdrawlsOuterDiv">
      <div>
        <h2>Withdrawal Request</h2>
        <p><Link href="/dashboard" style={{ textDecoration: "none" }}>Dashboard</Link> / Withdrawal Request</p>
      </div>
      
    </div>
  )
}
