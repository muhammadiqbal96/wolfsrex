import Footer from "@/dashboardComp/Footer";
import NavBars from "@/dashboardComp/NavBars";

export default function layout({ children }) {
  return (
    <div>
      <NavBars />
        {children}
      <Footer />
    </div>
  )
}
