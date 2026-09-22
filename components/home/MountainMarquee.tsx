"use client";

import { motion } from "framer-motion";

export default function MountainMarquee() {
  return (
    <section
      className="
        relative
        h-[100px]
        w-full
        overflow-x-clip
        overflow-y-visible
        bg-black
        p-0
        z-[30]

        sm:mt-[105px]
        sm:h-[330px]

        md:mt-[150px]
        md:h-[390px]

        lg:mt-[180px]
        lg:h-[420px]

        xl:mt-[200px]
        xl:h-[440px]

        2xl:h-[470px]
      "
    >
      <motion.div
        className="
          absolute
          left-0
          top-[42%]
          z-[1]
          flex
          w-max
          -translate-y-1/2
          whitespace-nowrap
        "
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span
          className="
            shrink-0
            px-4
            text-[clamp(38px,9vw,50px)]
            font-tactic-exd
            font-normal
            uppercase
            leading-none
            tracking-[0%]
            text-transparent
            bg-clip-text
            [-webkit-background-clip:text]
            [-webkit-text-fill-color:transparent]
            [-webkit-text-stroke:1.2px_currentColor]
            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]

            sm:text-[clamp(65px,8.5vw,150px)]
            md:text-[clamp(75px,8vw,150px)]
          "
        >
          POWER RUSH&nbsp; POWER RUSH&nbsp;POWER RUSH&nbsp; POWER RUSH&nbsp;
        </span>

        <span
          className="
            shrink-0
            px-4
            text-[clamp(38px,9vw,50px)]
            font-tactic
            uppercase
            leading-none
            tracking-[0.01em]
            text-transparent
            bg-clip-text
            [-webkit-background-clip:text]
            [-webkit-text-fill-color:transparent]
            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]

            sm:text-[clamp(62px,7.5vw,140px)]
            md:text-[clamp(70px,7vw,140px)]
          "
        >
          POWER RUSH&nbsp;&nbsp;&nbsp; POWER RUSH&nbsp;&nbsp;&nbsp; POWER
          RUSH&nbsp;&nbsp;&nbsp; POWER RUSH&nbsp;&nbsp;&nbsp;
        </span>
      </motion.div>

      <div
        className="
          pointer-events-none
          absolute
          left-0
          bottom-0
          z-[20]
          h-[250px]
          w-full
          overflow-visible

          sm:h-[275px]
          md:h-[330px]
          lg:h-[360px]
          xl:h-[380px]
          2xl:h-[400px]
        "
      >
        <img
          src="/images/mount.png"
          alt="Mountain texture"
          className="
            absolute
            left-[-70px]
            bottom-0
            block
            h-auto
            w-[calc(100%+70px)]
            max-w-none

            sm:left-[-85px]
            sm:w-[calc(100%+85px)]

            md:left-[-100px]
            md:w-[calc(100%+100px)]

            lg:left-[-120px]
            lg:w-[calc(100%+120px)]

            xl:left-[-135px]
            xl:w-[calc(100%+135px)]

            2xl:left-[-150px]
            2xl:w-[calc(100%+150px)]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-1px]
            left-0
            z-[30]
            h-[120px]
            w-full
            bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.05)_12%,rgba(0,0,0,0.18)_28%,rgba(0,0,0,0.42)_48%,rgba(0,0,0,0.72)_68%,rgba(0,0,0,0.94)_88%,#000_100%)]

            sm:h-[140px]
            md:h-[190px]
            lg:h-[210px]
            xl:h-[220px]
            2xl:h-[230px]
          "
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-[25]
          h-[65px]
          w-full
          bg-[linear-gradient(to_bottom,transparent_0%,#000_100%)]

          sm:h-[75px]
          md:h-[90px]
          lg:h-[90px]
        "
      />
    </section>
  );
}
