import { connectionStr } from "@/utils/db";
import { User } from "@/utils/model/scchema";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

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