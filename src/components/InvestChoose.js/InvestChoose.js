import "./invest.css"
export default function InvestChoose({ mode }) {
    return (
        <div className="investChooseCont">

            <div className="starDiv sd1">
                <img src="/star-01.svg" alt="" />
                <img src="/star-01.svg" alt="" />
            </div>

            <div className="investText">
                <h1>INVEST & EARN</h1>
                <h1 className="coloredText" style={{ marginTop: "-27px" }}>WOLFSREX</h1>
            </div>

            <div className="starDiv sd2">
                <img src="/star-01.svg" alt="" />
                <img src="/star-01.svg" alt="" />
            </div>

            <div className="imgcontainer">

                <div className="imgcont_1" data-aos="fade-up-right">
                    <img src="/collections/05.jpg" alt="" style={{ borderColor: mode === "Light" ? "#eee7e7" : "#312741" }} />
                </div>

                <div className="imgcont_2" data-aos="fade-up-right">
                    <img src="/collections/18.jpg" alt="" style={{ borderColor: mode === "Light" ? "#eee7e7" : "#312741" }} />
                    <img src="/collections/04.jpg" alt="" style={{ borderColor: mode === "Light" ? "#eee7e7" : "#312741" }} />
                </div>

                <div className="imgcont_3" data-aos="zoom-out-up">
                    <img src="/collections/01.jpg" alt="" style={{ borderColor: mode === "Light" ? "#eee7e7" : "#312741" }} />
                </div>

                <div className="imgcont_4" data-aos="fade-up-left">
                    <img src="/collections/07.jpg" alt="" style={{ borderColor: mode === "Light" ? "#eee7e7" : "#312741" }} />
                    <img src="/collections/19.jpg" alt="" style={{ borderColor: mode === "Light" ? "#eee7e7" : "#312741" }} />
                </div>

                <div className="imgcont_5" data-aos="fade-up-left">
                    <img src="/collections/10.jpg" alt="" style={{ borderColor: mode === "Light" ? "#eee7e7" : "#312741" }} />
                </div>

            </div>
            <div className="divider" >
                <img src="/divider.svg" alt="----------------" />
            </div>

            <div className="whytext">
                <h1>WHY <span className="coloredText">CHOOSE US?</span></h1>
            </div>

            <div className="starDiv sd3">
                <img src="/star-01.svg" alt="" />
                <img src="/star-01.svg" alt="" />
            </div>

            <div className="whyboxcontainer">

                <div className="whybox_1">

                    <div className="whysubbox_1 subbox">
                        <i className="fa-solid fa-wallet"></i>
                        <div>
                            <h5>CONNECT YOUR WALLET</h5>
                            <p>You can connect your trust wallet or any Trc20 wallet</p>
                        </div>
                    </div>

                    <div className="whysubbox_2 subbox">
                        <span className="material-symbols-outlined">stylus_note</span>
                        <div>
                            <h5>SELECT YOUR PACKAGE</h5>
                            <p>You can choose any of our package for your investment.</p>
                        </div>
                    </div>

                    <div className="whysubbox_3 subbox">
                        <span className="material-symbols-outlined">flash_on</span>
                        <div>
                            <h5>FAST TRANSACTION</h5>
                            <p>You can send or receive payments now in seconds with us. </p>
                        </div>
                    </div>

                </div>

                <div className="whybox_2">
                    <img src="/land_cta.png" alt="" />
                </div>

                <div className="whybox_3">

                    <div className="whysubbox_1 subbox">
                        <i className="fa-solid fa-spray-can"></i>
                        <div>
                            <h5>CREATE YOUR OWN PACKAGE</h5>
                            <p>You can create your own package so you can start investment.</p>
                        </div>
                    </div>

                    <div className="whysubbox_2 subbox">
                        <i className="fa-solid fa-chess-knight"></i>
                        <div>
                            <h5>INSTANT WITHDRAWAL</h5>
                            <p>You can get instant withdrawal as soon as your profit is generated.</p>
                        </div>
                    </div>

                    <div className="whysubbox_3 subbox">
                        <i className="fa-solid fa-cubes"></i>
                        <div>
                            <h5>ENCRYPTED NETWORK</h5>
                            <p>Our network is totally encrypted with Trons smart network</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="divider" id="about">
                <img src="/divider.svg" alt="----------------" />
            </div>

            <div className="aboutCont">

                <div className="aboutimgtextCont">


                    <div className="aboutimg" data-aos="fade-right">
                        <img src="/collection.png" alt="" />
                    </div>

                    <div className="aboutTextCont">

                        <div className="aboutText">
                            <h1>ABOUT </h1>
                            <h1 className="coloredText" style={{ marginTop: "-20px" }}>WOLFSREX</h1>
                        </div>

                        <div className="paras">
                            <p className="para1">A decentralized networking platform based on smart contracts, together with NFT technology, which brings people together from all over the world and opens up endless possibilities new economic financial systems</p>
                            <p className="para2">The Wolfsrex ecosystem is built around the technology of smart contracts and NFTs, which are completely autonomous and exclude the influence of the human factor.</p>
                        </div>

                        <div className="aboutBox">

                            <div className="aboutBox1">
                                <h1 className="coloredText">100%</h1>
                                <span>Security</span>
                            </div>

                            <div className="aboutBox2">
                                <h1 className="coloredText">3X</h1>
                                <span>Profit</span>
                            </div>

                            <div className="aboutBox3">
                                <h1 className="coloredText">50K+</h1>
                                <span>Of members</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="aboutEnd">
                    <section>

                        <div className="aboutEndBox1">
                            <i className="fa-solid fa-shield-halved coloredText"></i>
                            <h1>100%</h1>
                            <span>Security</span>
                        </div>

                        <div className="aboutEndBox2">
                            <i className="fa-solid fa-people-group coloredText"></i>
                            <h1>50K+</h1>
                            <span>Of members</span>
                        </div>

                    </section>
                    <section>

                        <div className="aboutEndBox3">
                            <i className="fa-solid fa-masks-theater coloredText"></i>
                            <h1>3X</h1>
                            <span>Profit</span>
                        </div>

                        <div className="aboutEndBox4">
                            <i className="fa-solid fa-rocket coloredText"></i>
                            <h1>7%</h1>
                            <span>Monthly profit</span>
                        </div>

                    </section>
                </div>
            </div>

            <div className="divider">
                <img src="/divider.svg" alt="----------------" />
            </div>

        </div>
    )
}
