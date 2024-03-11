import "./profile.css"
export default function page() {
    return (
        <div className="profileOuterDiv">
            <div className="main-body">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="/collections/01.jpg" alt="Admin" className="rounded-circle p-1 bg-primary" width={120} />
                                    <div className="mt-3">
                                        <h4 className="text-capitalize" id="UserNameText">USER NAME</h4>
                                        <form enctype="multipart/form-data">
                                            <div className="input-group" id="uploadDiv">
                                                <input type="file" name="profile_pic" className="form-control form-control-sm" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                                                <button className="btn btn-secondary btn-sm" type="submit" name="image_upload" id="inputGroupFileAddon04">Upload</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <ul className="list-group list-group-flush" id="uploadBoxUl">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Activation Fee</h6>
                                        <span className="badge bg-warning">Unpaid</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Account Status</h6>

                                        <span className="badge bg-warning">Pending</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">KYC Status</h6>

                                        <span className="badge bg-danger">Unverified</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Current Package</h6>
                                        <span className="badge bg-info">
                                            No Package												</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">Total Invest</h6>
                                        <span className="text-info">$0</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">

                                <ul className="nav nav-tabs nav-danger" role="tablist" id="tabe-list">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" data-bs-toggle="tab" role="tab" aria-selected="true">
                                            <div className="d-flex align-items-center">
                                                <div className="tab-icon"><i className="bx bx-pencil font-18 me-2"></i>
                                                </div>
                                                <div className="tab-title">Edit</div>
                                            </div>
                                        </a>
                                    </li>


                                </ul>

                                <div className="tab-content py-3">
                                    <div className="tab-pane fade show active p-3 mt-3" role="tabpanel">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Full Name</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input type="text" name="full_name" className="form-control form-control-sm" placeholder="Enter Full Name"   />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Address</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input type="text" name="address" className="form-control form-control-sm" placeholder="Street"   />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0"></h6>
                                                </div>
                                                <div className="col-sm-4 text-secondary">
                                                    <input type="text" name="city" className="form-control form-control-sm" placeholder="City"   />
                                                </div>
                                                <div className="col-sm-5 text-secondary">
                                                    <input type="text" name="state" className="form-control form-control-sm" placeholder="State"   />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0"></h6>
                                                </div>
                                                <div className="col-sm-4 text-secondary">
                                                    <input type="text" name="postal_code" className="form-control form-control-sm" placeholder="Postal Code" />
                                                </div>
                                                <div className="col-sm-5 text-secondary">
                                                    <input type="text" name="phone" className="form-control form-control-sm" placeholder="Phone"/>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Country</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <input name="country" type="text" className="form-control form-control-sm" placeholder="Country" value="pakistan" />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">2FA Code</h6>
                                                </div>
                                                <div className="col-sm-7 text-secondary">

                                                    <input name="otp_code" type="text" className="form-control form-control-sm" placeholder="Enter 2FA Code"   />
                                                    <b className="text-success emailMessageAjax"></b>
                                                </div>
                                                <div className="col-sm-2 text-secondary">

                                                    <button className="btn btn-secondary btn-sm">SEND</button>
                                                </div>

                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-sm-3"></div>
                                                <div className="col-sm-9">
                                                    <div className="d-flex ">
                                                        <input type="submit" name="edit_profile" className="btn btn-sm btn-primary text-white" value="Update" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form></div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-8">
                        <div className="card border-left-primary">
                            <div className="card-body">

                                <ul className="nav nav-tabs nav-danger" role="tablist" id="tabe-list">


                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" data-bs-toggle="tab" role="tab" aria-selected="false">
                                            <div className="d-flex align-items-center">
                                                <div className="tab-icon"><i className="bx bx-lock font-18 me-2"></i>
                                                </div>
                                                <div className="tab-title">Change Password</div>
                                            </div>
                                        </a>
                                    </li>

                                </ul>

                                <div className="tab-content py-3">



                                    <div className="tab-pane fade show active p-3" role="tabpanel">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Current Password</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <div className="input-group">
                                                        <input type="password" name="currentPassword" className="form-control form-control-sm" placeholder="Current Password"   />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">New Password</h6>
                                                </div>
                                                <div className="col-sm-9 text-secondary">
                                                    <div className="input-group" id="show_hide_password2">
                                                        <input type="password" id="pass1" name="newPassword" className="form-control form-control-sm" placeholder="New Password"   />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-sm-3">
                                                    <h6 className="mb-0">Confirm Password</h6>
                                                </div>

                                                <div className="col-sm-9 text-secondary">
                                                    <div className="input-group" id="show_hide_password3">
                                                        <input type="password" id="pass2" name="confirmPassword" className="form-control form-control-sm" placeholder="New Password"   />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-sm-3"></div>
                                                <div className="col-sm-9">
                                                    <div className="d-flex ">
                                                        <input type="submit" name="updatePassword" className="btn btn-sm btn-primary text-white" value="Update" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br />

                <div className="row">
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-8">
                        <div className="card border-left-success">
                            <div className="card-body">

                                <ul className="nav nav-tabs nav-danger" role="tablist" id="tabe-list">

                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active" data-bs-toggle="tab" role="tab" aria-selected="false">
                                            <div className="d-flex align-items-center">
                                                <div className="tab-icon"><i className="bx bx-wallet font-18 me-2"></i>
                                                </div>
                                                <div className="tab-title">USDT Address</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>


                                <div className="tab-pane fade show active p-3" role="tabpanel">
                                    <form>

                                        <p className="text-danger text-center mt-3 mb-5">Once you update USDT address you can't change next</p>

                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">USDT TRC(20) Address</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <div className="input-group" id="show_hide_password">
                                                    <input type="text" name="usdtAddress" className="form-control form-control-sm" placeholder="Enter Wallet Address"   />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">2FA Code</h6>
                                            </div>
                                            <div className="col-sm-7 text-secondary">
                                                <input type="text" name="usdtOtpCode" className="form-control form-control-sm" placeholder="Enter 2FA Code"   />
                                                <b className="text-success emailMessageAjax"></b>
                                            </div>
                                            <div className="col-sm-2 text-secondary">

                                                <button className="btn btn-sm btn-secondary text-white sendOtpEmail">SEND</button>
                                            </div>
                                        </div>

                                        <div className="row mt-3">
                                            <div className="col-sm-3"></div>
                                            <div className="col-sm-9">
                                                <div className="d-flex ">
                                                    <input type="submit" name="updateUsdtAddress" className="btn btn-sm btn-sm btn-primary text-white" value="Update" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
        </div>
    )
}
