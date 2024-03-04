import NavBars from "@/dashboardComp/NavComp/NavBars";
import NextAuthProvider from "@/utils/SessionProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function layout({ children }) {
  const session = await getServerSession();

  if (session === null) {
    redirect("/signin")
  }

  if (session === "loading") {
    return <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#0f051d" }}>
      <div className="spinner-border text-info"></div>
    </div>;
  }

  return (
    session !== null && (<NextAuthProvider session={session}>
      <div>
        <NavBars />
        {children}
        <footer className="d-flex align-items-center justify-content-center fs-md-6" style={{ background: "#4d0d74", width: "100%", color: "white", height: "12vh", fontSize: "smaller" }}>
          Copyright &copy; Your Website 2021
        </footer>
      </div>
    </NextAuthProvider>)
  )
}
