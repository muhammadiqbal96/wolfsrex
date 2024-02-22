'use client'
import "./teamquestion.css"
import Link from "next/link";
import cookie from "js-cookie"
import { useState } from "react";
export default function Teamquestion({mode}) {

  const closeAllParas = () => {
    let paragraphs = document.getElementsByClassName("paras");
    let spans = document.getElementsByClassName("clickableSpans_questions");

    Array.from(paragraphs).forEach((e) => {
      e.style.display = "none";
    })
    Array.from(spans).forEach((e) => {
      e.innerHTML = "+";
    })
  }

  const showpara = (Index) => {
    let paragraphs = document.getElementsByClassName("paras");
    let spans = document.getElementsByClassName("clickableSpans_questions");

    console.log(spans[Index].innerHTML === "-");
    console.log(paragraphs[Index + 1].style.display);

    if (spans[Index].innerHTML === "-") {
      paragraphs[Index + 1].style.display = "none";
      spans[Index].innerHTML = "+";
    } else {
      closeAllParas();
      paragraphs[Index + 1].style.display = "block";
      spans[Index].innerHTML = "-";
    }
  }

  return (
    <div>
      <div className="team" id="team">
        <h1>MEET<span className="coloredText"> OUR TEAM</span></h1>
        <div className="teamimgtextCont">
          <span>Credit to our team to develope this website</span>
          <div className="teamimgcont" data-aos="fade-left">
            <img src="/collections/17.jpg" alt="" />
            <span style={{ opacity: "0.6" }}>Artist</span>
            <h1>IQBAL</h1>
          </div>
        </div>
      </div>

      <div className="divider" id="about">
        <img src="/divider.svg" alt="----------------" />
      </div>

      <div className="question" id="question">
        <h1>ASKED <span className="coloredText">QUESTIONS</span></h1>

        <div className="accordian">
          <ul>
            <li>
              <h3>What is Wolfsrex? <span className="clickableSpans_questions" onClick={() => { showpara(0) }}>+</span></h3>
              <div>
                <p className="paras">Wolf rex  is an investment company which trades on your funds and give you 7% profit monthly, the investment is 100% safe and secure</p>
              </div>
            </li>
            <hr />
            <li>
              <h3>What is CryptoCurrency? <span className="clickableSpans_questions" onClick={() => { showpara(1) }}>+</span></h3>
              <div>
                <p className="paras">Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It's a peer-to-peer system that can enable anyone anywhere to send and receive payments.</p>
              </div>
            </li>
            <hr />
            <li>
              <h3>What are NFTs? <span className="clickableSpans_questions" onClick={() => { showpara(2) }}>+</span></h3>
              <div>
                <p className="paras">A NFT (non-fungible token) is data added to a file that creates a unique signature. It can be an image file, a song, a tweet, a text posted on a website, a physical item, and various other digital formats.</p>
              </div>
            </li>
            <hr />
            <li>
              <h3>What is bitcoin? <span className="clickableSpans_questions" onClick={() => { showpara(3) }}>+</span></h3>
              <div>
                <p className="paras">Bitcoin is the world's first successful decentralized cryptocurrency and payment system, launched in 2009 by a mysterious creator known only as Satoshi Nakamoto. </p>
              </div>
            </li>
            <hr />
            <li>
              <h3>What is USDT? <span className="clickableSpans_questions" onClick={() => { showpara(4) }}>+</span></h3>
              <div>
                <p className="paras">Tether (USDT) is what's known as a “Stablecoin” - a cryptocurrency designed to provide a stable price point at all times. </p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div className="divider" id="about">
        <img src="/divider.svg" alt="----------------" />
      </div>

      <div className="endofFrontPage">

        <div className="starDiv sd1 teamquestionstardiv">
          <img src="/star-01.svg" alt="" />
          <img src="/star-01.svg" alt="" />
        </div>

        <h1>JOIN US VIA</h1>
        <h1 className="coloredText" style={{ marginTop: "-15px" }}>WHATSAPP</h1>
        <div className="starDiv sd2 teamquestionstardiv2">
          <img src="/star-01.svg" alt="" />
          <img src="/star-01.svg" alt="" />
        </div>
        <div className="joinwhatsappbtnDiv">
          <button className="joinwhatsappbtn">Join via Whatsapp</button>
        </div>

        <div className="pageendallLinksCont">

          <div className="pageendLinksFBTW">
            <li><Link href="/"><i className="fa-brands fa-square-x-twitter" style={{ color: mode === "Dark" ? "white" : "black" }}></i></Link></li>
            <li><Link href="/"><i className="fa-brands fa-square-facebook" style={{ color: mode === "Dark" ? "white" : "black" }}></i></Link></li>
          </div>

          <div className="pageendLinksPrivacyTerms">
            <li><Link href="/">Privacy</Link></li>
            <li style={{ width: "140px" }}><Link href="/">Terms of use</Link></li>
          </div>

          <div className="pageendLinkscopyreserved">
            © 2022 Wolfsrex. All rights reserved.
          </div>

        </div>
      </div>
    </div>
  )
}
