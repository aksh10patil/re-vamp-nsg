"use client";
// import Sidebar from "./Sidebar";
import TopAnalytics from "./TopAnalytics";
import ProductSalesCard from "./ProductSalesCard";
import NewClients from "./NewClients";
import Image from "next/image";

export default function DashboardSection() {
  return (
      <div className="flex min-h-screen relative">

          <Image
  src="/images/main/bg-north2.png"
  alt="dashboard background"
  fill
  quality={100}
  className="
    object-cover 
    object-center 
    opacity-[0.22]
    mix-blend-screen
    pointer-events-none"
/>
      

<div className="absolute inset-0 -z-10 overflow-hidden">

  



  {/* Dark wash (not too strong) */}
  <div className="absolute inset-0 bg-[#050505]/70" />

  {/* Main purple atmospheric glow */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,70,255,0.45),transparent_60%)] blur-[140px]" />

  {/* Deep purple depth glow */}
  <div className="absolute top-1/3 left-1/4 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(90,30,200,0.28),transparent_75%)] blur-[180px]" />

  {/* Yellow accent glow (for chart theme) */}
  <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(255,220,140,0.12),transparent_80%)] blur-[140px]" />

</div>




      {/* <Sidebar /> */}

      <main className="flex-1 p-4 sm:p-6 lg:p-10">
  <div className="max-w-7xl mx-auto flex flex-col gap-8">
    <TopAnalytics />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <ProductSalesCard />
      </div>
      <NewClients />
    </div>
  </div>
</main>
    </div>
  );
}
