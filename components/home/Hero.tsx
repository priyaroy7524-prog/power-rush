"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        h-[70dvh]
        min-h-[520px]
        w-full
        overflow-hidden
        bg-black
        text-white

        sm:min-h-[460px]
        md:min-h-[600px]
        lg:min-h-[650px]
        xl:min-h-[700px]
      "
    >
      <motion.div
        className="
    absolute
    left-0
    top-0
    z-[50]
    h-full

    w-[32vw]
    max-w-[430px]
    min-w-[125px]

    min-[380px]:w-[31vw]
    min-[480px]:w-[29vw]

    sm:w-[27vw]
    sm:max-w-[430px]
    md:w-[25vw]
    lg:w-[23vw]
    xl:w-[23vw]

    max-[767px]:!left-[-7vw]
    max-[767px]:!w-[27vw]
  "
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 2.8,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* LEFT ROCK */}
        {/* LEFT ROCK */}
        <img
          src="/images/image415.png"
          alt=""
          className="
    absolute
    left-0
    top-0
    h-full
    w-full
    object-cover
    object-bottom

    max-[767px]:!left-0
    max-[767px]:!w-full
  "
        />

        {/* LEFT DESCRIPTION */}
<div
  className="
    absolute
    left-[25%]
    top-[25%]
    z-[60]

    w-[285px]
    h-[60px]
    max-w-[72vw]

    font-sf
    text-left
    text-[15px]
    font-medium
    leading-[1.1]
    tracking-[-0.01em]
    text-white

    max-[767px]:!hidden
  "
>
  Power Rush is built for those who <br />take their training seriously. Each
  
  single-<br />serving stick combines Creatine <br /> Monohydrate, Caffeine,
  
  Taurine
</div>
      </motion.div>

      <motion.div
        className="
    absolute
    right-0
    top-0
    z-[50]
    h-full

    w-[32vw]
    max-w-[430px]
    min-w-[125px]

    min-[380px]:w-[31vw]
    min-[480px]:w-[29vw]

    sm:w-[27vw]
    sm:max-w-[430px]

    md:w-[25vw]
    lg:w-[23vw]
    xl:w-[23vw]

    max-[767px]:!right-[-5vw]
    max-[767px]:!w-[27vw]
  "
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 2.8,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src="/images/image415.png"
          alt=""
          className="
    absolute
    right-0
    top-0
    h-full
    w-full
    object-cover
    object-center
    scale-x-[-1]
  "
        />

   <div
  className="
    absolute
    right-[35%]
    !top-[63%]
    z-[60]

    w-[170px]
    max-w-[72vw]

    font-sf
    text-right
    text-[14px]
    font-medium
    leading-[1.1]
    tracking-[-0.01em]
    text-white

    max-[767px]:hidden

    sm:!top-[63%]
    sm:w-[225px]
    sm:text-[12px]
    sm:leading-[1.08]

    md:!top-[63%]
    md:w-[250px]
    md:text-[14px]

    lg:right-[30%]
    lg:!top-[63%]
    lg:w-[285px]
    lg:text-[17px]

    xl:right-[30%]
    xl:!top-[63%]
    xl:w-[285px]
    xl:text-[17px]
  "
>
          Power Rush is built for those who take their training seriously. Each
          single-serving stick combines Creatine Monohydrate, Caffeine, and
          Taurine
        </div>
      </motion.div>

      <motion.div
        className="
    absolute
    left-1/2
    top-[72%]
    z-[60]
    hidden
    w-[280px]
    max-w-[90vw]
    -translate-x-1/2
    text-center

    font-sf
    text-[12px]
    font-medium
    leading-[1.1]
    tracking-[-0.01em]
    text-white

    max-[767px]:block
  "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Power Rush is built for those who take their training seriously. Each
        single-serving stick combines Creatine Monohydrate, Caffeine, and
        Taurine
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/2
          z-[5]
          w-full
          -translate-y-1/2
          overflow-hidden
           max-[639px]:top-[41%]
        "
        initial={{
          opacity: 0,
          scale: 0.45,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 1.2,
          ease: [0.16, 0.8, 0.2, 1],
        }}
      >
        <motion.div
          className="
            flex
            w-max
            whitespace-nowrap
            
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* MARQUEE 1 */}
          <span
            className="
              shrink-0
              px-2

              font-tactic-exd
              text-[45px]
              font-600
              uppercase
              leading-[78%]
              tracking-[0%]

              text-transparent
              bg-clip-text
              [-webkit-background-clip:text]
              [-webkit-text-fill-color:transparent]
              [-webkit-text-stroke:0.7px_currentColor]

              bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]

              min-[380px]:text-[50px]

              min-[480px]:text-[58px]

              sm:px-3
              sm:text-[68px]
              sm:[-webkit-text-stroke:0.8px_currentColor]

              md:text-[82px]

              lg:text-[100px]
              lg:[-webkit-text-stroke:1px_currentColor]

              xl:px-4
              xl:text-[134.81px]
              xl:[-webkit-text-stroke:1.2px_currentColor]
            "
          >
            POWER RUSH&nbsp; POWER RUSH&nbsp;POWER RUSH&nbsp; POWER RUSH&nbsp;
          </span>

          {/* MARQUEE 2 */}
          <span
            className="
              shrink-0
              px-2

              font-tactic-exd
              text-[45px]
              font-600
              uppercase
              leading-[78%]
              tracking-[0%]

              text-transparent
              bg-clip-text
              [-webkit-background-clip:text]
              [-webkit-text-fill-color:transparent]

              bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]

              min-[380px]:text-[50px]

              min-[480px]:text-[58px]

              sm:px-3
              sm:text-[68px]

              md:text-[82px]

              lg:text-[100px]

              xl:px-4
              xl:text-[134.81px]
            "
          >
            POWER RUSH&nbsp; POWER RUSH&nbsp;POWER RUSH&nbsp; POWER RUSH&nbsp;
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          z-[10]
          -translate-x-1/2
          -translate-y-1/2
           max-[639px]:top-[43%]
        "
        initial={{
          opacity: 0,
          scale: 1,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: "easeOut",
        }}
      >
        <motion.div
          animate={{
            y: [0, -25, 0, 22, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/images/power1.png"
            alt="Power Rush product"
            className="
    h-[280px]
    w-[200px]
    max-w-[50vw]
    object-contain

    min-[380px]:h-[230px]
    min-[380px]:w-[170px]

    min-[480px]:h-[260px]
    min-[480px]:w-[150px]

    sm:h-[480px]
    sm:w-[285px]

    md:h-[480px]
    md:w-[275px]

    lg:h-[550px]
    lg:w-[340px]

    xl:h-[610px]
    xl:w-[380px]

    2xl:h-[660px]
    2xl:w-[410px]
  "
          />
        </motion.div>
      </motion.div>

      <div
        className="
    absolute
    bottom-[14px]
    left-0
    z-[90]
    flex
    w-full
    items-end
    font-dm-mono
    text-[#9D9D9D]

    min-[380px]:bottom-[16px]

    min-[480px]:bottom-[18px]

    sm:bottom-[22px]

    md:bottom-[25px]

    lg:bottom-[28px]

    xl:bottom-[30px]
  "
      >
        <motion.div
          className="
            flex
            w-1/3
            flex-col
            items-center
            justify-center
            px-1
            text-center
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 0.5,
          }}
        >
          <b
            className="
              text-[19px]
              leading-none

              min-[380px]:text-[18px]

              min-[480px]:text-[18px]

              sm:text-[13px]

              md:text-[15px]

              lg:text-[17px]
            "
          >
            3G
          </b>

          <span
            className="
              mt-[4px]
              text-[6px]
              tracking-[0.05em]

              min-[380px]:text-[10.2px]
              min-[380px]:font-[550]

              min-[480px]:text-[10.2px]
              min-[480px]:font-[500]


              sm:text-[19px]

              md:text-[11px]

              lg:text-[16px]
            "
          >
            CREATINE MONOHYDRATE
          </span>
        </motion.div>

        <motion.div
          className="
            flex
            w-1/3
            flex-col
            items-center
            justify-center
            px-1
            text-center
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.6,
            duration: 0.5,
          }}
        >
          <b
            className="
              text-[19px]
              leading-none

              min-[380px]:text-[18px]

              min-[480px]:text-[18px]

              sm:text-[23px]

              md:text-[15px]

              lg:text-[17px]
            "
          >
            125 MG
          </b>

          <span
            className="
              mt-[4px]
              text-[6px]
              tracking-[0.05em]

              min-[380px]:text-[12.5px]

              min-[480px]:text-[7px]

              sm:text-[15px]

              md:text-[11px]

              lg:text-[16px]
            "
          >
            CAFFEINE
          </span>
        </motion.div>

        <motion.div
          className="
            flex
            w-1/3
            flex-col
            items-center
            justify-center
            px-1
            text-center
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.7,
            duration: 0.5,
          }}
        >
          <b
            className="
              text-[19px]
              leading-none

              min-[380px]:text-[18px]

              min-[480px]:text-[18px]

              sm:text-[23px]

              md:text-[15px]

              lg:text-[17px]
            "
          >
            500MG
          </b>

          <span
            className="
              mt-[4px]
              text-[6px]
              tracking-[0.05em]

              min-[380px]:text-[12.5px]
              min-[380px]:gap-0

              min-[480px]:text-[7px]

              sm:text-[19px]

              md:text-[11px]

              lg:text-[16px]
            "
          >
            BETA-ALANINE
          </span>
        </motion.div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-[80]
          h-[100px]
          w-full
          bg-gradient-to-t
          from-black
          via-black/70
          to-transparent

          min-[380px]:h-[105px]

          min-[480px]:h-[115px]

          sm:h-[125px]

          md:h-[145px]

          lg:h-[165px]

          xl:h-[180px]
        "
      />
    </section>
  );
}
