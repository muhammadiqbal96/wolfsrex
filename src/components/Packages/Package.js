'use client'
import "./package.css"
export default function Package({ mode }) {

    let arr = [
        {
            fh1: "BASIC",
            sh1: "$50",
            para: "Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "ALUMINIUM",
            sh1: "$100",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "GALLIUM",
            sh1: "$150",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "INDIUM",
            sh1: "$200",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "TIN",
            sh1: "$250",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "THALLIUM",
            sh1: "$300",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "LEAD",
            sh1: "$350",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "BISMUTH",
            sh1: "$400",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "NIHONIUM",
            sh1: "$450",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "PLATINUM",
            sh1: "$500",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "TITANIUM",
            sh1: "$550",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "GOLD",
            sh1: "$600",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },

        {
            fh1: "CUSTOM PACKAGE",
            sh1: "$0 TO $1M",
            para: "Starting the production on the procedurally generated planets and the smart contract for minting.",
            li1: "Instant Referal And Team Bonus",
            li2: "Upto 1% to 3% Direct Earning",
            li3: "Get 5X On Your Investment",
            li4: "Instant Withdrawal"
        },
    ]

    const PhaseDisplay = (a) => {
        document.getElementById("phase1").style.opacity = "0.3";
        document.getElementById("phase2").style.opacity = "0.3";
        document.getElementById("phase3").style.opacity = "0.3";
        document.getElementById("phase4").style.opacity = "0.3";
        document.getElementById("phase5").style.opacity = "0.3";
        document.getElementById("phase6").style.opacity = "0.3";
        document.getElementById("phase7").style.opacity = "0.3";

        let headcolored = document.createElement("h2");
        headcolored.className = "coloredText";
        headcolored.innerHTML = arr[a].fh1;

        let PackageSubBox = document.createElement("div");
        PackageSubBox.setAttribute('data-aos', 'fade-up')
        PackageSubBox.setAttribute('data-aos-duration', '800');
        PackageSubBox.setAttribute('data-aos-easing', "ease-in-out");
        PackageSubBox.className = "packagesubBox";
        PackageSubBox.appendChild(headcolored);
        PackageSubBox.innerHTML += `<h2>${arr[a].sh1}</h2>
        <p>${arr[a].para}</p>
        <hr />
        <ul>
            <li>${arr[a].li1}</li>
            <li>${arr[a].li2}</li>
            <li>${arr[a].li3}</li>
            <li>${arr[a].li4}</li>
        </ul>`;
        document.getElementsByClassName("packageBoxes")[0].appendChild(PackageSubBox);
    }

    return (
        <div className="packagepage" id="packages">
            <h1 className="coloredText package">PACKAGES</h1>
            <div className="packageCont">

                <div className="clickables">
                    <h2 onClick={() => {
                        document.getElementsByClassName("packageBoxes")[0].innerHTML = "";
                        PhaseDisplay(0);
                        PhaseDisplay(1);
                        document.getElementById("phase1").style.opacity = "1";
                    }} id="phase1">PHASE 1</h2>
                    <h2 onClick={() => {
                        document.getElementsByClassName("packageBoxes")[0].innerHTML = "";
                        PhaseDisplay(2);
                        PhaseDisplay(3);
                        document.getElementById("phase2").style.opacity = "1";
                    }}  id="phase2">PHASE 2</h2>
                    <h2 onClick={() => {
                        document.getElementsByClassName("packageBoxes")[0].innerHTML = "";
                        PhaseDisplay(4);
                        PhaseDisplay(5);
                        document.getElementById("phase3").style.opacity = "1";
                    }}  id="phase3">PHASE 3</h2>
                    <h2 onClick={() => {
                        document.getElementsByClassName("packageBoxes")[0].innerHTML = "";
                        PhaseDisplay(6);
                        PhaseDisplay(7);
                        document.getElementById("phase4").style.opacity = "1";
                    }}  id="phase4">PHASE 4</h2>
                    <h2 onClick={() => {
                        document.getElementsByClassName("packageBoxes")[0].innerHTML = "";
                        PhaseDisplay(8);
                        PhaseDisplay(9);
                        document.getElementById("phase5").style.opacity = "1";
                    }}  id="phase5">PHASE 5</h2>
                    <h2 onClick={() => {
                        document.getElementsByClassName("packageBoxes")[0].innerHTML = "";
                        PhaseDisplay(10);
                        PhaseDisplay(11);
                        document.getElementById("phase6").style.opacity = "1";
                    }}  id="phase6">PHASE 6</h2>
                    <h2 onClick={() => {
                        document.getElementsByClassName("packageBoxes")[0].innerHTML = "";
                        PhaseDisplay(12);
                        document.getElementById("phase7").style.opacity = "1";
                    }}  id="phase7">CUSTOM</h2>
                </div>

                <div className="packageBoxes">
                    {
                        <div className="packagesubBox" data-aos="fade-up">
                            <h2 className="coloredText">{arr[0].fh1}</h2>
                            <h2>{arr[0].sh1}</h2>
                            <p>{arr[0].para}</p>
                            <hr />
                            <ul>
                                <li>{arr[0].li1}</li>
                                <li>{arr[0].li2}</li>
                                <li>{arr[0].li3}</li>
                                <li>{arr[0].li4}</li>
                            </ul>
                        </div>
                    }

                    {
                        <div className="packagesubBox" data-aos="fade-up">
                            <h2 className="coloredText">{arr[1].fh1}</h2>
                            <h2>{arr[1].sh1}</h2>
                            <p>{arr[1].para}</p>
                            <hr />
                            <ul>
                                <li>{arr[1].li1}</li>
                                <li>{arr[1].li2}</li>
                                <li>{arr[1].li3}</li>
                                <li>{arr[1].li4}</li>
                            </ul>
                        </div>
                    }
                </div>

            </div>

            <div className="package_Icons">
                <h2>
                    {
                        mode === "Dark" ?
                            <img src="metaDark.png" alt="" /> :
                            <img src="metaLight.png" alt="" />
                    }
                    METAMASK</h2>
                <h2>
                    {
                        mode === "Dark" ?
                            <img src="bitDark.png" alt="" /> :
                            <img src="bitLight.png" alt="" />
                    }
                    BitGo</h2>
                <h2>coinbase</h2>
                <h2>
                    {
                        mode === "Dark" ?
                            <img src="trustDark.png" alt="" /> :
                            <img src="trustLight.png" alt="" />
                    }
                    Trust Wallet</h2>
                <h2>
                    {
                        mode === "Dark" ?
                            <img src="exodusDark.png" alt="" /> :
                            <img src="exodusLight.png" alt="" />
                    }
                    EXODUS</h2>
            </div>

            <div className="divider" id="about">
                <img src="/divider.svg" alt="----------------" />
            </div>

        </div>
    )
}
