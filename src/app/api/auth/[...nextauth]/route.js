import { connectionStr } from "@/utils/db";
import { User } from "@/utils/model/scchema";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { SendEmail } from "@/Nodemailer/Nodemailer";

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await mongoose.connect(connectionStr);

                try {
                    let IsExistingByUserName = await User.findOne({ username: credentials.username });
                    if (IsExistingByUserName) {
                        let IsPasswordCorrectU = await bcrypt.compare(credentials.password, IsExistingByUserName.password);
                        if (IsPasswordCorrectU) {

                            SendEmail(IsExistingByUserName.email, "Wolfsrex-Login Update", "You're receiving this message because of a successful sign-in.If you're aware of this sign-in, please disregard this notice.\n\nThanks,\n\nWolfsrex Team");

                            return IsExistingByUserName;
                        }
                    }

                    let IsExistingByEmail = await User.findOne({ email: credentials.username });
                    if (IsExistingByEmail) {
                        let IsPasswordCorrectE = await bcrypt.compare(
                            credentials.password,
                            IsExistingByEmail.password
                        );
                        if (IsPasswordCorrectE) {

                            SendEmail(IsExistingByEmail.email, "Wolfsrex-Login Update", "You're receiving this message because of a successful sign-in.If you're aware of this sign-in, please disregard this notice.\n\nThanks,\n\nWolfsrex Team");

                            return IsExistingByEmail;
                        }
                    }

                } catch (error) {
                    throw new Error(error)
                }

            }
        })

    ],
}

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }