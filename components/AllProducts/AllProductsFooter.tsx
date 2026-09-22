
"use client";

import FinalStage from "@/components/home/FinalStage";
import Footer from "../home/Footer ";

export default function AllProductsFooter() {
  return (
    <section className="relative w-full overflow-hidden bg-black">

  
      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          z-[5]
          h-[160px]
          bg-gradient-to-b
          from-black
          via-black/70
          to-transparent
        "
      />

  
      <div className="relative z-[10]">
        <FinalStage />
      </div>

    
      <div
        className="
          pointer-events-none
          absolute
          bottom-[180px]
          left-0
          right-0
          z-[30]
          h-[220px]
          bg-gradient-to-b
          from-transparent
          via-black/80
          to-black
        "
      />

    
      <div className="relative z-[40]">
        <Footer />
      </div>

    </section>
  );
}