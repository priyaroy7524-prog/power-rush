"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PowerRushProductShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.35,
  });

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-black

        h-[540px]
        min-[380px]:h-[570px]
        min-[480px]:h-[600px]
        sm:h-[650px]
        md:h-[750px]
        lg:h-[850px]
        xl:h-[950px]
        2xl:h-[1050px]
      "
    >
      
      <img
        src="/images/Frame1168.png"
        alt=""
        className="
          absolute
          inset-0
          z-[1]
          h-full
          w-full
          object-cover
          object-center
          select-none
        "
      />

      <img
        src="/images/Frame1168.png"
        alt=""
        className="
          pointer-events-none
          absolute
          inset-0
          z-[15]
          h-full
          w-full
          object-cover
          object-center
          select-none

          [clip-path:polygon(78%_48%,100%_43%,100%_100%,68%_100%,72%_70%)]

          min-[380px]:[clip-path:polygon(76%_50%,100%_45%,100%_100%,66%_100%,70%_72%)]

          min-[480px]:[clip-path:polygon(75%_50%,100%_45%,100%_100%,65%_100%,69%_72%)]

          sm:[clip-path:polygon(73%_48%,100%_43%,100%_100%,64%_100%,68%_70%)]

          md:[clip-path:polygon(72%_46%,100%_41%,100%_100%,63%_100%,67%_68%)]

          lg:[clip-path:polygon(70%_44%,100%_39%,100%_100%,61%_100%,65%_66%)]

          xl:[clip-path:polygon(69%_43%,100%_38%,100%_100%,60%_100%,64%_65%)]
        "
      />

      
      <motion.div
        className="
          absolute
          left-1/2
          top-[12%]
          z-[10]
          -translate-x-1/2

          min-[380px]:top-[18%]
          min-[480px]:top-[17%]
          sm:top-[16%]
          md:top-[15%]
          lg:top-[14%]
        "
        initial={{
          opacity: 0,
          y: 550,
          scale: 0.82,
          rotate: 0,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }
            : {
                opacity: 0,
                y: 550,
                scale: 0.82,
                rotate: 0,
              }
        }
        transition={{
          duration: 1.4,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src="/images/prsticks.png"
          alt="Power Rush box"
          className="
            block
            h-auto
            w-[255px]
            max-w-[70vw]
            object-contain
            select-none

            min-[380px]:w-[275px]
            min-[380px]:max-w-[68vw]

            min-[480px]:w-[300px]
            min-[480px]:max-w-[66vw]

            sm:w-[350px]
            sm:max-w-[58vw]

            md:w-[420px]
            md:max-w-[54vw]

            lg:w-[500px]
            lg:max-w-[52vw]

            xl:w-[560px]
            xl:max-w-none

            2xl:w-[600px]
          "
        />
      </motion.div>

     
      <motion.div
        className="
          absolute
          left-[8%]
          top-[14%]
          z-[11]

          min-[380px]:left-[9%]
          min-[380px]:top-[25%]

          min-[480px]:left-[11%]
          min-[480px]:top-[24%]

         sm:left-[15%]
sm:top-[25%]

md:left-[19%]
md:top-[23%]

lg:left-[25%]
lg:top-[20%]

xl:left-[29%]
xl:top-[19%]
        "
        initial={{
          opacity: 0,
          x: -180,
          y: 180,
          scale: 0.75,
          rotate: -10,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 1,
              }
            : {
                opacity: 0,
                x: -180,
                y: 180,
                scale: 0.75,
                rotate: -10,
              }
        }
        transition={{
          duration: 1.2,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
   <img
  src="/images/powoe 1.png"
  alt="Power Rush stick"
  className="
    block
    h-auto
    w-[120px]
    max-w-[25vw]
    object-contain
    select-none

    scale-y-[1.08]

    min-[380px]:w-[110px]
    min-[380px]:scale-y-[1.08]

    min-[480px]:w-[125px]
    min-[480px]:scale-y-[1.08]

  sm:w-[145px]
sm:scale-y-[1.20]

md:w-[155px]
md:scale-y-[1.20]

lg:w-[175px]
lg:scale-y-[1.20]

xl:w-[195px]
xl:scale-y-[1.20]

2xl:w-[210px]
2xl:scale-y-[1.20]
  "
/>
      </motion.div>

      
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[22]
          h-[8%]
          bg-gradient-to-b
          from-transparent
          via-black/40
          to-black

          min-[380px]:h-[9%]
          min-[480px]:h-[10%]
          sm:h-[11%]
          md:h-[12%]
          lg:h-[13%]
        "
      />
    </section>
  );
}