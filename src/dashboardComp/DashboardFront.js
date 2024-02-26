"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import cookie from "js-cookie"

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
        return <div class="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: mode === "Dark" ? "#0f051d" : "white" }}>
        <div className="spinner-border text-info"></div>
    </div>;
    }

    return (
        sessionStatus === "authenticated" && (<>
            <div>
                Dasboard
            </div>
        </>)
    )
}
