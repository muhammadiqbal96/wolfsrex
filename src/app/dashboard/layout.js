"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import NavBars from "@/dashboardComp/NavComp/NavBars";

export default function layout({ children }) {

  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  if (sessionStatus === "unauthenticated") {
    router.replace("/signin");
  }

  if (sessionStatus === "loading") {
    return <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#0f051d" }}>
      <div className="spinner-border text-info"></div>
    </div>;
  }

  return (
    sessionStatus === "authenticated" && (<div>
      <NavBars />
      {children}
      <footer className="d-flex align-items-center justify-content-center fs-md-6" style={{ background: "#4d0d74", width: "100%", color: "white", height: "12vh", fontSize: "smaller" }}>
        Copyright &copy; Your Website 2021
      </footer>
    </div>)
  )
}
