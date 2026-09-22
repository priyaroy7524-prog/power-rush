"use client";

import { motion } from "framer-motion";

export default function FinalStage() {
  return (
    <section
      className="
       relative
    min-h-[550px]
    w-full
    overflow-hidden
    bg-black

    sm:min-h-[700px]
    md:min-h-[800px]
    lg:min-h-[900px]
    xl:min-h-[1000px]
    2xl:min-h-[1100px]
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-0
          w-full
          overflow-visible
        "
      >
        <img
          src="/images/footer.png"
          alt=""
          className="
            block
            h-auto
            w-full
            max-w-none
            object-contain

            /* PHONE */
            max-[639px]:w-[125%]
            max-[639px]:-ml-[12.5%]

            /* SMALL TABLET */
            sm:w-[115%]
            sm:-ml-[7.5%]

            /* TABLET */
            md:w-[110%]
            md:-ml-[5%]

            /* IPAD / 1024 */
            lg:w-full
            lg:ml-0

            /* LAPTOP */
            xl:w-full
            xl:ml-0

            /* DESKTOP */
            2xl:w-full
            2xl:ml-0
          "
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-10

          h-[55px]
          sm:h-[65px]
          md:h-[80px]
          lg:h-[110px]
          xl:h-[140px]
          2xl:h-[170px]

          bg-gradient-to-b
          from-black
          via-black/35
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10

          h-[55px]
          sm:h-[65px]
          md:h-[80px]
          lg:h-[100px]
          xl:h-[120px]
          2xl:h-[150px]

          bg-gradient-to-t
          from-black
          via-black/40
          to-transparent
        "
      />

      <motion.div
        className="
          absolute
          left-1/2
          top-[45%]
          z-20
          -translate-x-1/2
          -translate-y-1/2
        "
        initial={{
          opacity: 0,
          y: 180,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.img
          src="/images/powoe 1.png"
          alt="Power Rush"
          className="
            block
            w-[160px]
            max-w-[55vw]
            object-contain

            sm:w-[180px]
            md:w-[220px]
            lg:w-[260px]
            xl:w-[290px]
            2xl:w-[320px]
          "
          animate={{
            y: [-14, 14, -14],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
