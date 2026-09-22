"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DisciplineSection() {
  return (
    <section
      className="
        relative
        min-h-[300px]
        lg:min-h-[100dvh]
        w-full
        overflow-hidden
        bg-black
      "
    >
     
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            relative
            h-[250px]
            w-full

            min-[380px]:h-[260px]
            min-[480px]:h-[275px]

            sm:h-[290px]
            md:h-[320px]

            lg:h-full
          "
        >
          <Image
            src="/images/ag 1.png"
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="
              object-contain
              object-center
            "
          />
        </div>
      </motion.div>

    
      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          z-[2]
          h-[65px]
          bg-gradient-to-b
          from-black
          via-black/70
          to-transparent

          min-[380px]:h-[70px]
          min-[480px]:h-[75px]

          sm:h-[90px]
          md:h-[110px]

          lg:h-[180px]
          xl:h-[200px]
          2xl:h-[220px]
        "
      />

     
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-[2]
          h-[75px]
          bg-gradient-to-t
          from-black
          via-black/75
          to-transparent

          min-[380px]:h-[85px]
          min-[480px]:h-[95px]

          sm:h-[110px]
          md:h-[135px]

          lg:h-[220px]
          xl:h-[240px]
          2xl:h-[260px]
        "
      />

     
    </section>
  );
}