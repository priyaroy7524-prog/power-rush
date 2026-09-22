"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const animationEase = [0.16, 0.8, 0.2, 1] as const;

export default function About() {
  const animationDuration = 0.85;
  const router = useRouter();

  return (
    <section
      className="
  relative
  h-[500px]
  w-full
  overflow-hidden
  bg-black

  sm:min-h-[570px]
  md:min-h-[620px]
  lg:min-h-[90dvh]
"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/images/image423.png"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            select-none
            object-cover
            object-center
          "
        />

        <div
          className="
            absolute
            left-0
            top-0
            h-[100px]
            w-full
            bg-gradient-to-b
            from-black
            via-black/70
            to-transparent

            sm:h-[120px]
            md:h-[145px]
            lg:h-[170px]
            xl:h-[180px]
            2xl:h-[200px]
          "
        />

        <div
          className="
            absolute
            inset-0
            z-[1]
            bg-black/50
          "
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            z-[2]
            h-[90px]
            w-full
            bg-gradient-to-t
            from-black
            via-black/40
            to-transparent

            sm:h-[110px]
            md:h-[130px]
            lg:h-[150px]
          "
        />
      </div>

      <motion.div
        className="
          absolute
          left-0
          z-20
          w-full
          text-center
          font-dm-mono
          !font-medium
          !leading-none
          !tracking-[0.02em]
          !text-[#888888]

          top-[15%]
          !text-[22px]

          min-[375px]:top-[16%]
          min-[375px]:!text-[23px]

          sm:top-[17%]
          sm:!text-[28px]

          md:top-[18%]
          md:!text-[31px]

          lg:top-[18%]
          lg:!text-[34px]

          xl:top-[18%]
          xl:!text-[38px]

          2xl:top-[18%]
          2xl:!text-[38px]

          max-[767px]:hidden
        "
        initial={{
          opacity: 0,
          y: -120,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: animationDuration,
          ease: animationEase,
        }}
      >
        ABOUT US
      </motion.div>

      {/* ================= PHONE ONLY ================= */}
      <motion.div
        className="
          absolute
          left-0
          top-[22%]
          z-[9999]
          block
          w-full
          text-center
          font-dm-mono
          !font-medium
          !leading-none
          !tracking-[0.02em]
          !text-[22px]
          !text-[#888888]

          min-[375px]:top-[18%]
          min-[375px]:!text-[23px]

          min-[768px]:hidden
        "
        initial={{
          opacity: 0,
          y: -40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: animationDuration,
          ease: animationEase,
        }}
      >
        ABOUT US
      </motion.div>

      <div
        className="
          pointer-events-none
          absolute
          left-0
          z-20
          flex
          w-full
          justify-center

          top-[31%]
          px-[12px]

          min-[375px]:top-[32%]
          min-[375px]:px-[14px]

          sm:top-[29%]
          sm:px-[30px]

          md:top-[29%]
          md:px-[45px]

          lg:top-[28%]
          lg:px-[60px]

          xl:top-[28%]
          xl:px-[80px]

          2xl:top-[28%]
          2xl:px-[100px]
        "
      >
        <motion.h2
          className="
            m-0
            block
            w-full
            max-w-full
            text-center
            font-[TacticSans-Med]
            !font-normal
            !tracking-[0.01em]
            whitespace-normal
            break-words

            max-[374px]:max-w-[300px]
            max-[374px]:!text-[10px]
            max-[374px]:!leading-[1.45]

            min-[375px]:max-[639px]:max-w-[350px]
            min-[375px]:max-[639px]:!text-[11px]
            min-[375px]:max-[639px]:!leading-[1.42]

            sm:max-w-[600px]
            sm:!text-[14px]
            sm:!leading-[1.38]

            md:max-w-[800px]
            md:!text-[16px]
            md:!leading-[1.32]

            lg:max-w-[1000px]
            lg:!text-[18px]
            lg:!leading-[1.28]

            xl:max-w-[1250px]
            xl:!text-[21px]
            xl:!leading-[1.25]

            2xl:max-w-[1400px]
            2xl:!text-[21px]
          "
          initial={{
            opacity: 0,
            x: -70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: animationDuration,
            ease: animationEase,
          }}
        >
          <span className="block">
            WE’RE FOCUSED ON CREATING PERFORMANCE-DRIVEN PRODUCTS INTO REAL
          </span>

          <span className="mt-[4px] block">
            TRAINING, REAL ROUTINES, AND REAL GOALS. FROM INTENSE GYM SESSIONS
            TO THE FINAL REP, OUR FORMULAS ARE DESIGNED FOR PEOPLE WHO SHOW UP,
            PUT IN THE WORK, AND KEEP PUSHING WHEN THINGS GET DIFFICULT.
          </span>
        </motion.h2>
      </div>

      <motion.button
        type="button"
        onClick={() => router.push("/readmore")}
        className="
          absolute
          left-1/2
          z-30
          flex
          -translate-x-1/2
          cursor-pointer
          items-center
          justify-center
          bg-[#f4f4f4]
          font-['TacticSans-Reg']
          font-normal
          tracking-[0.08em]
          text-[#111]

          top-[58%]
          left-[55.5%]
          h-[43px]
          w-[145px]
          !text-[15px]

          min-[380px]:top-[59%]
          min-[380px]:left-[55.5%]
          min-[380px]:h-[46px]
          min-[380px]:w-[160px]
          min-[380px]:!text-[16px]

          sm:top-[52%]
          sm:h-[48px]
          sm:w-[195px]
          sm:!text-[18px]

          md:top-[51%]
          md:h-[50px]
          md:w-[205px]
          md:!text-[20px]

          /* LAPTOP */
lg:top-[50%]
lg:left-1/2
lg:h-[51px]
lg:w-[215px]
lg:!text-[21px]

/* DESKTOP */
xl:top-[50%]
xl:left-1/2
xl:h-[52px]
xl:w-[220px]
xl:!text-[22px]

/* LARGE DESKTOP */
2xl:top-[50%]
2xl:left-1/2
        "
        initial={{
          opacity: 0,
          y: 120,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.45,
        }}
        transition={{
          duration: animationDuration,
          ease: animationEase,
        }}
      >
        <i
          className="
            absolute
            top-0
            left-[-43px]
            flex
            items-center
            justify-center
            border
            border-white
            bg-black
            p-0
            font-normal
            not-italic
            leading-none
            text-white

            h-[43px]
            w-[43px]
            !text-[28px]

            min-[380px]:left-[-46px]
            min-[380px]:h-[46px]
            min-[380px]:w-[46px]
            min-[380px]:!text-[30px]

            sm:left-[-48px]
            sm:h-[48px]
            sm:w-[48px]
            sm:!text-[32px]

            md:left-[-50px]
            md:h-[50px]
            md:w-[50px]
            md:!text-[34px]

            lg:left-[-52px]
            lg:h-[51px]
            lg:w-[51px]
            lg:!text-[35px]

            xl:left-[-58px]
            xl:h-[52px]
            xl:w-[52px]
            xl:!text-[38px]
          "
        >
          <span
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-[68%]
            "
          >
            →
          </span>
        </i>
        READ MORE
      </motion.button>
    </section>
  );
}
