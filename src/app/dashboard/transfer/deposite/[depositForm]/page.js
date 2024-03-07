import Image from "next/image";
import "./depositeFrom.css"
export default function page({ params }) {

    let id = params.depositForm;
    let indexOfTitle = id.indexOf("4");
    let price = id.slice(indexOfTitle + 1, id.length);
    price = parseInt(price);
    let activationFee = (price/100)*2;
    let TotalFee = price + activationFee;
    let title = id.slice(0, indexOfTitle - 5);

    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let date = d.getDate();


    return (
        <div className="DepositeFormOutterDiv">
            <div className="FormContainerOfDeposite">

                <h2>Buy with USDT (TRC20)</h2>
                <div className="FormDetailsOfDeposite">

                    <p>You have selected a package: <button>WOLFSREX{price}</button></p>

                    <div className="ToDateCont">
                        <div>
                            <h6>To</h6>
                            <h6>Date</h6>
                        </div>
                        <div>
                            <h6>Wolfsrex</h6>
                            <h6>{year}-{month}-{date}</h6>
                        </div>
                    </div>

                    <div className="PackageDetails">
                        <div>
                            <p>Invoice Title</p>
                            <h6>New Package</h6>
                            <h6>Activation Fee</h6>
                            <h6>Total Amount:</h6>
                        </div>
                        <div>
                            <p>Amount</p>
                            <h6>${price}</h6>
                            <h6>${activationFee}</h6>
                            <h6>${TotalFee}</h6>
                        </div>
                    </div>

                    <div className="SedndingAdress">
                        <p>Please send your payment to the following address</p>
                        <Image src="/QR.png" alt="Loading..." width={200} height={200} style={{ backgroundColor: "white", padding: "10px" }} />
                        <div>
                            <h4>Address</h4>
                            <h6>TNrwZFxFTNJFX6mcitYxSKFH672BCdHMAe</h6>
                        </div>
                        <div>
                            <h4>Amount To Pay</h4>
                            <h6>${TotalFee}</h6>
                        </div>
                    </div>

                    <div className="bankDetails">
                        <h6>Bank Name : Alfalah</h6>
                        <h6>Account Name : Wolfsrex</h6>
                        <h6>Account Number : 992929181818</h6>
                    </div>

                    <form>
                        <label htmlFor="TransactionId">*Pay Exact Amount And Enter Transaction Id Here</label>
                        <input type="text" id="TransactionId" placeholder="Enter Transaction ID" required />
                        <button type="submit">Make Payment As Sent</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
