"use client"
import Link from "next/link"
import "./deposite.css"
import { useRouter } from "next/navigation"
export default function Page() {
  const router = useRouter();
  const PackageArray = [
    {
      img: "/package/4.png",
      title: "basic",
      price: "$41"
    },
    {
      img: "/package/10.png",
      title: "Aluminium",
      price: "$104"
    },
    {
      img: "/package/5.png",
      title: "Gallium",
      price: "$204"
    },
    {
      img: "/package/3.png",
      title: "Indium",
      price: "$306"
    },
    {
      img: "/package/8.png",
      title: "Tin",
      price: "$408"
    },
    {
      img: "/package/11.png",
      title: "Thallium",
      price: "$625"
    },
    {
      img: "/package/1.png",
      title: "Lead",
      price: "$816"
    },
    {
      img: "/package/9.png",
      title: "Bismuth",
      price: "$2040"
    },
    {
      img: "/package/6.png",
      title: "Nihonium",
      price: "$4081"
    },
    {
      img: "/package/7.png",
      title: "Platinum",
      price: "$10204"
    },
    {
      img: "/package/12.png",
      title: "Titanium",
      price: "$20408"
    },
    {
      img: "/package/2.png",
      title: "Gold",
      price: "$40816"
    }
  ]
  return (
    <div className="DepsoiteOuterDiv">
      <div>
        <h2>Buy Package</h2>
        <p><Link href="/dashboard" style={{ textDecoration: "none" }}>Dashboard</Link> / Buy Package</p>
      </div>
      <div className="cardContainer">

        {
          PackageArray.map((item) => {
            return (
              <div className="PackageCard" key={`${item.title}&${item.price}`}>
                <img src={item.img} alt="loading" width={140} height={140} />
                <h4>{item.title}</h4>
                <h4>{item.price}</h4>
                <button onClick={() => router.push(`/dashboard/transfer/deposite/${item.title}&${item.price}`)}>Purchase</button>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}
