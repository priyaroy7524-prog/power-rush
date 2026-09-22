"use client";

import Image from "next/image";
import Link from "next/link";

import FinalStage from "@/components/home/FinalStage";
import Footer from "@/components/home/Footer ";



export default function ReadMorePage() {
  return (
    <main
      className="
        min-h-screen
        w-full
        overflow-hidden
        bg-black
        text-white
        pt-[90px]
        sm:pt-[95px]
        md:pt-[100px]
        lg:pt-[105px]
      "
    >
    
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-black
          px-[16px]
          pb-[60px]
          pt-[12px]
          text-white

          min-[380px]:px-[18px]

          min-[480px]:px-[22px]
          min-[480px]:pb-[65px]

          sm:px-[30px]
          sm:pb-[70px]
          sm:pt-[15px]

          md:px-[40px]
          md:pb-[75px]

          lg:px-[29px]
          lg:pb-[80px]
        "
      >
      

        <div
          className="
            relative
            z-10
            mt-[32px]
            flex
            w-full
            flex-col
            items-stretch
            gap-[28px]

            min-[480px]:mt-[36px]
            min-[480px]:gap-[30px]

            sm:mt-[38px]
            sm:gap-[35px]

            md:mt-[42px]
            md:gap-[30px]

            lg:flex-row
            lg:items-center
            lg:gap-[20px]
          "
        >
          <div
            className="
              relative
              aspect-[356/300]
              w-full
              overflow-hidden
              rounded-[3px]

              sm:mx-auto
              sm:w-[90%]

              md:w-[75%]

              lg:mx-0
              lg:w-[48%]
            "
          >
            <Image
              src="/images/blogPost.png"
              alt="Blog post"
              fill
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 75vw,
                48vw
              "
              className="
                object-cover
                object-center
              "
            />
          </div>

          <div
            className="
              flex
              w-full
              translate-x-0
              flex-col
              items-start
              justify-center

              sm:mx-auto
              sm:w-[90%]

              md:w-[75%]

              lg:mx-0
              lg:w-[52%]
              lg:translate-x-[25px]

              xl:translate-x-[40px]

              2xl:translate-x-[60px]
            "
          >
            <h2
              className="
                w-full
                max-w-[650px]
                font-tactic-exd
                text-[23px]
                font-[600]
                uppercase
                leading-[112%]
                tracking-[0%]
                text-white

                min-[380px]:text-[25px]

                min-[480px]:text-[27px]

                sm:text-[29px]

                md:text-[31px]

                lg:text-[28px]

                xl:text-[30px]

                2xl:text-[32px]
              "
            >
              HOW TO PREPARE YOUR BODY FOR
              <br className="hidden sm:block" /> A BETTER TRAINING SESSION
            </h2>

            <p
              className="
                mt-[14px]
                w-full
                max-w-[650px]
                font-sf
                text-[13px]
                font-[510]
                leading-[125%]
                tracking-[0%]
                text-[#999999]

                min-[380px]:mt-[15px]
                min-[380px]:text-[13.5px]

                min-[480px]:mt-[17px]
                min-[480px]:text-[14px]

                sm:mt-[18px]
                sm:text-[15px]
                sm:leading-[120%]

                md:mt-[20px]
                md:text-[17px]
                md:leading-[112%]

                lg:mt-[20px]
                lg:text-[18px]

                xl:mt-[22px]
                xl:text-[19px]

                2xl:text-[20.54px]
              "
            >
              A great workout starts before you enter the gym. The right
              pre-workout routine can help you feel energized, focused, and
              ready to train with intensity.
            </p>

          <div
  className="
    !ml-[100px]
    mt-[5%]
    flex
    h-[40px]
    min-w-[120px]
    shrink-0
    items-center
    justify-center
    px-[10px]
    font-tactic-exd
    !text-[25px]
    font-[600]
    leading-[125%]
    tracking-[0%]
    text-[#999999]

    min-[380px]:h-[40px]
    min-[380px]:min-w-[125px]

    min-[480px]:h-[41px]
    min-[480px]:min-w-[135px]
    min-[480px]:text-[12px]

    sm:h-[42px]
    sm:min-w-[145px]
    sm:text-[13px]

    md:min-w-[155px]
    md:text-[14px]
  "
>
  BUILT FOR PERFORMANCE
</div>
          </div>
        </div>

      

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            h-full
            w-[1px]
            bg-[#19ff75]/40
          "
        />
      </section>

    
      <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden px-5 py-24 sm:px-8 md:px-12 lg:px-20">
       
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1300px] text-center">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500 sm:text-xs">
            RUSH POWER
          </p>

          <h1
            className="
              mx-auto
              max-w-[1100px]
              text-[48px]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.04em]
              sm:text-[70px]
              md:text-[90px]
              lg:text-[115px]
              xl:text-[135px]
            "
          >
            Built For
            <span className="block text-neutral-500">
              The Rush.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-[700px] text-sm leading-7 text-neutral-400 sm:text-base md:text-lg">
            Rush Power is created for people who refuse to slow down.
            Every formula, every ingredient and every detail is designed
            around performance, energy and the mindset to keep pushing.
          </p>
        </div>
      </section>

      <FinalStage />
      <Footer />

    
    </main>
  );
}