import { connectionStr } from "@/utils/db";
import { User } from "@/utils/model/scchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function GET() {
    await mongoose.connect(connectionStr);
    let data = ["Nothing to show"];
    let success = false;
    let status = 500;

    try {
        data = await User.find();
        success = true;
        status = 200;
        return NextResponse.json({ result: data, success }, { status });
    } catch (error) {
        return NextResponse.json({ result: error, success }, { status });
    }
}

export async function POST(request) {

    const { refral_code, username, email, mobile_number, password } = await request.json();
    await mongoose.connect(connectionStr);
    let data = [];
    let success = true;
    let status = 200;

    const existingUsername = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });
    const existingMobile_Number = await User.findOne({ mobile_number });

    if (existingUsername) {
        data = "Username already exists.";
        success = false;
        status = 400;
        return NextResponse.json({ result: data, success: success }, { status: status });
    }
    if (existingEmail) {
        data = "Email already exists.";
        success = false;
        status = 400;
        return NextResponse.json({ result: data, success: success }, { status: status });
    }
    if (existingMobile_Number) {
        data = "Mobile number already exists.";
        success = false;
        status = 400;
        return NextResponse.json({ result: data, success: success }, { status: status });
    }

    const hashPassword = await bcrypt.hash(password,5)
    const newUser = new User({ refral_code, username, email, mobile_number, password: hashPassword });

    try {
        data = await newUser.save();
    } catch (error) {
        success = false;
        status = 500;
        return NextResponse.json({ result: error, success: success }, { status: status });
    }
    return NextResponse.json({ result: data, success: success }, { status: status });

}