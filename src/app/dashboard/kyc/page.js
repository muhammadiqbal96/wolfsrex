import "./kyc.css"
export default function page() {
    return (
        <div className="kycOuterDiv">
            <form enctype="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="documentType">Select Document Type</label>
                    <select id="documentType" className="form-control form-control-rounded single-select" name="select_type">
                        <option value="">Select Document Type</option>
                        <option value="national_id">National Id</option>
                        <option value="driving_licence">Driving Licence</option>
                        <option value="passport">Passport</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="personalPic">Personal Picture</label>
                    <small style={{color: "#9d63c1"}}>(Only jpg and png files are allowed)</small>
                    <input type="file" className="form-control form-control-rounded" id="personalPic" name="fileToUpload"/>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="frontSide">Front Side</label>
                    <small style={{color: "#9d63c1"}}>(Only jpg and png files are allowed)</small>
                    <input type="file" className="form-control form-control-rounded" id="frontSide" name="fileToUpload1"/>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="backSide">Back Side</label>
                    <small style={{color: "#9d63c1"}}>(Only jpg and png files are allowed)</small>
                    <input type="file" className="form-control form-control-rounded" id="backSide" name="fileToUpload2"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="backSide">Contract Image</label>
                    <small style={{color: "#9d63c1"}}>(Only jpg and png files are allowed)</small>
                    <input type="file" className="form-control form-control-rounded" id="contract" name="fileToUpload3"/>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="idNumber">Enter ID Number</label>
                    <input type="text" className="form-control form-control-rounded" id="idNumber" name="id_no" placeholder="Enter Document ID"/>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="issuanceDate ">Issuance Date</label>
                    <input type="date" className="form-control form-control-rounded datepicker" id="issuanceDate" name="issuence_date" placeholder="Select Date.."/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input type="date" className="form-control form-control-rounded datepicker" id="expiryDate" name="expire_date" placeholder="Select Date.."/>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="pass">Password</label>
                    <input type="password" className="form-control form-control-rounded" id="pass" name="pass" placeholder="Enter Password"/>
                </div>
                <div className="form-group mt-3 text-center">
                    <button type="submit" className="btn text-white btn-round px-5 my-4" name="kyc_submit"><i className="icon-lock"></i> Submit Request</button>
                </div>
            </form>
        </div>
    )
}
