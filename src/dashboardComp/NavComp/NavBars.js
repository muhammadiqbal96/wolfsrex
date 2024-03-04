"use client"
import Image from "next/image";
import Link from "next/link";
import "./dashboardNav.css"
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function NavBars() {
    const [left, setleft] = useState();

    const [transferOptionsleft, settransferOptionsleft] = useState("-200px");
    const [networkOptionsleft, setnetworkOptionsleft] = useState("-200px");
    const [summaryOptionsleft, setsummaryOptionsleft] = useState("-200px");
    const [supportOptionsleft, setsupportOptionsleft] = useState("-200px");

    const hideAllOptions = () => {
        settransferOptionsleft("-200px");
        setnetworkOptionsleft("-200px");
        setsummaryOptionsleft("-200px");
        setsupportOptionsleft("-200px");
    }

    const links = document.getElementsByTagName("a");
    Array.from(links).forEach((e) => {
        e.addEventListener("click", hideAllOptions);
    });
    
    const showOptions = (value, setValue) => {

        if (value === "-200px") {
            hideAllOptions();
            setValue("105px");
        } else {
            setValue("-200px");
        }
    }

    return (
        <div>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            <nav className="UpperNavbarOfDashboard">

                <div className="dashboardNavLogo">
                    <Image src="/wolfsrexlogo.png" alt="Wolfsrex" width={60} height={60} />
                    <span>WOLFSREX</span>
                </div>

                <div className="dashboardNavbtnUserCont">
                    <button>Add Funds</button>
                    <div>
                        <span className="userNText">iqbaljutt96</span>
                        <Image src="/collections/01.jpg" alt="Profile" width={34} height={34} />
                    </div>
                </div>

            </nav>


            <div className="side_Nav_Opener" onClick={() => setleft("0px")} style={{ left: left === "0px" ? "-100px" : "0px" }}>
                Show Menue
            </div>

            <div className="transferOptions navEleOptions" style={{ top: "140px", left: transferOptionsleft }}>
                <Link href="/dashboard/transfer/withdrawls">Withdrawals</Link>
                <Link href="/dashboard/transfer/deposite">Deposit</Link>
            </div>

            <div className="networkOptions navEleOptions" style={{ top: "199px", left: networkOptionsleft }}>
                <Link href="/">Referral Team</Link>
                <Link href="/">Tree Structure</Link>
            </div>

            <div className="summaryOptions navEleOptions" style={{ top: "255px", left: summaryOptionsleft }}>
                <Link href="/">Package Summary</Link>
                <Link href="/">Bonuses</Link>
                <Link href="/">Level Report</Link>
                <Link href="/">ROI Income</Link>
                <Link href="/">Cash Wallet</Link>
                <Link href="/">Withdrawals</Link>
            </div>

            <div className="supportOptions navEleOptions" style={{ top: "380px", left: supportOptionsleft }}>
                <Link href="/">Submit Ticket</Link>
                <Link href="/">Summary</Link>
            </div>

            <nav className="SideNavbarOfDashboard" style={{ left: left }}>

                <ul>

                    <li><Link href="/dashboard">
                        <span className="material-symbols-outlined">dashboard_customize</span>
                        <span>Dashboard</span>
                    </Link></li>

                    <li><button onClick={() => showOptions(transferOptionsleft, settransferOptionsleft)}>
                        <i className="fa-solid fa-money-bill-transfer"></i>
                        <span>Transfer</span>
                    </button>
                    </li>


                    <li><button onClick={() => showOptions(networkOptionsleft, setnetworkOptionsleft)}>
                        <span className="material-symbols-outlined">group</span>
                        <span>Network</span>
                    </button>
                    </li>

                    <li><button onClick={() => showOptions(summaryOptionsleft, setsummaryOptionsleft)}>
                        <span className="material-symbols-outlined">folder</span>
                        Summary
                    </button>
                    </li>

                    <li><Link href="/">
                        <span className="material-symbols-outlined">photo_library</span>
                        <span>KYC</span>
                    </Link></li>

                    <li><button onClick={() => showOptions(supportOptionsleft, setsupportOptionsleft)}>
                        <span className="material-symbols-outlined">help</span>
                        <span>Support</span>
                    </button>
                    </li>

                    <li><button onClick={() => signOut()}>
                        <span className="material-symbols-outlined">logout</span>
                        <span>Logout</span>
                    </button></li>

                </ul>
                <hr style={{ background: "gray", height: "2.5px", width: "90%", marginTop: "-0px" }} />
                <button className="sidenavbarcontroller" id="sidenavbarcontroller" onClick={() => { setleft("-100px"); hideAllOptions(); }}>&lt;</button>
            </nav>
        </div>
    )
}
