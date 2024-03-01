"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import cookie from "js-cookie"
import Image from "next/image";
import "./DashboardFront.css"

export default function DashboardFront() {

    const { data: session, status: sessionStatus } = useSession();
    const router = useRouter();

    const [mode, setmode] = useState("");
    const cookieRes = cookie.get("SiteTheme");

    useEffect(() => {
        setmode(cookieRes)
    }, [cookieRes]);

    if (sessionStatus === "unauthenticated") {
        router.replace("/signin");
    }

    if (sessionStatus === "loading") {
        return <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: mode === "Dark" ? "#0f051d" : "white" }}>
            <div className="spinner-border text-info"></div>
        </div>;
    }

    return (
        sessionStatus === "authenticated" && (<>
            <div className="DasboardOuterDiv">

                <div className="dashboardWelcome">
                    <h3>
                        Welcome,
                        <span> Iqbal jutt</span>
                    </h3>
                    <h3>
                        Dashboard
                    </h3>
                </div>

                <div className="d-flex justify-content-center align-items-center">

                    <div className="boxesContainer">
                        <div className="box">
                            <h5>CURRENT BALANCE</h5>
                            <h5>$70</h5>
                        </div>

                        <div className="box">
                            <h5>TOTAL INCOME</h5>
                            <h5>$2.3</h5>
                        </div>

                        <div className="box">
                            <h5>ROI TODAY</h5>
                            <h5>$70</h5>
                        </div>

                        <div className="box">
                            <h5 style={{ width: "150px" }}>ACTIVE INVESTMENT</h5>
                            <h5>0.000</h5>
                        </div>

                        <div className="box">
                            <h5>DIRECT BONUS</h5>
                            <h5>0.000</h5>
                        </div>

                        <div className="box">
                            <h5>LEVEL BONUS</h5>
                            <h5>$70</h5>
                        </div>

                        <div className="box">
                            <h5>TEAM SALES</h5>
                            <h5>0.000</h5>
                        </div>

                        <div className="box">
                            <h5>DIRECT SALES</h5>
                            <h5>0.000</h5>
                        </div>

                    </div>

                </div>

                <div className="boxesContainer2">
                    <div className="box3">
                        <div>
                            <h5>MY INVESTMENT</h5>
                            <h5>$10,000</h5>
                        </div>
                        <Image src="/chart2.png" alt="chart" width={100} height={100} />
                    </div>

                    <div className="box3">
                        <div>
                            <h5>ROI THIS MONTH</h5>
                            <h5>0.000</h5>
                        </div>
                        <Image src="/chart1.png" alt="chart" width={100} height={100} />
                    </div>
                    <div className="box3">
                        <div>
                            <h5>ROI TOTAL</h5>
                            <h5>$70</h5>
                        </div>
                        <Image src="/chart4.png" alt="chart" width={100} height={100} />
                    </div>
                </div>

                <div className="pacakgeActivity">
                    <div className="currentPackage">
                        <h3>Current Package</h3>
                        <img src="/wolfsrex-logo3.png" alt="Wolfsrex" width={100} height={100} />
                        <h3>No Package</h3>
                    </div>

                    <div className="PackageStatus">
                        <Image src="/impact.png" alt="Wolfsrex" width={100} height={100} />
                        <h4>Package Activity Status</h4>
                        <section>
                            <h6>
                                <span>Max Income</span>
                                <span>Received Income</span>
                                <span>Remaining</span>
                            </h6>

                            <h6>
                                <span>$0.00</span>
                                <span>$0.00</span>
                                <span>$0.00</span>
                            </h6>
                        </section>
                    </div>
                </div>

                <div className="WithdrawlsTeamGroupBox">
                    <div className="WithdrawlsBox">
                        <h4>Withdrawls</h4>
                        <section>
                            <h6>
                                <span>Approved</span>
                                <span>Pending</span>
                            </h6>
                            <h6>
                                <span>$0</span>
                                <span>$0</span>
                            </h6>
                        </section>
                    </div>

                    <div className="TeamSalesBox">
                        <h4>Team Sales</h4>
                        <section>
                            <h6>
                                <span>Direct Team</span>
                                <span>Total Team</span>
                            </h6>
                            <h6>
                                <span>$0</span>
                                <span>$0</span>
                            </h6>
                        </section>
                    </div>

                    <div className="GroupBox">
                        <h4>Group</h4>
                        <section>
                            <h6>
                                <span>Direct Team</span>
                                <span>Total Team</span>
                            </h6>
                            <h6>
                                <span>$0</span>
                                <span>$0</span>
                            </h6>
                        </section>
                    </div>
                </div>
            </div>
        </>)
    )
}
