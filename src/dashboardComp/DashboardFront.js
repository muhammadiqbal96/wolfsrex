"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardFront() {

    const { data: session, status: sessionStatus } = useSession();
    const router = useRouter();

    if (sessionStatus === "unauthenticated") {
        router.replace("/signin");
    }

    if (sessionStatus === "loading") {
        return <div>Loading...</div>
    }

    return (
        sessionStatus === "authenticated" && (<>
            <div>
                Dasboard
            </div>
        </>)
    )
}
