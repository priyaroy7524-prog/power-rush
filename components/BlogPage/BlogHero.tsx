
"use client";

import Image from "next/image";

export default function BlogHero() {
  return (
<section
  className="
    relative
    z-10
    mx-auto
    flex
    min-h-[440px]
    w-full
    max-w-[1500px]
    items-end
    px-[16px]
    pb-[40px]

    min-[380px]:min-h-[455px]
    min-[380px]:px-[18px]
    min-[380px]:pb-[42px]

    min-[480px]:min-h-[475px]
    min-[480px]:px-[22px]
    min-[480px]:pb-[48px]

    sm:min-h-[500px]
    sm:px-[30px]
    sm:pb-[55px]

    md:min-h-[560px]
    md:px-[45px]
    md:pb-[65px]

    lg:px-[65px]
    lg:pb-[80px]
    lg:min-h-[100dvh]

    xl:px-[80px]
    xl:pb-[90px]

    2xl:px-[100px]
    2xl:pb-[100px]
  "
>
  

  <div className="absolute inset-0 z-0">
    <Image
  src="/images/bloghome.png"
  alt=""
  fill
  priority
  sizes="100vw"
  className="
    object-fill
    object-center

    max-[639px]:scale-[0.75]
    max-[639px]:origin-top

    lg:scale-100
  "
/>
  </div>

   

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-10
          h-[100px]
          w-full
          bg-gradient-to-b
          from-transparent
          via-black/60
          to-black

          min-[380px]:h-[115px]

          min-[480px]:h-[130px]

          sm:h-[145px]

          md:h-[165px]

          lg:h-[190px]

          xl:h-[210px]

          2xl:h-[230px]
        "
      />

   

      <div
        className="
          absolute
          left-[16px]
          top-[27%]
          z-20
          w-[calc(100%-32px)]

          min-[380px]:left-[18px]
          min-[380px]:w-[calc(100%-36px)]

          min-[480px]:left-[22px]
          min-[480px]:w-[calc(100%-44px)]

          sm:left-[7%]
          sm:top-[31%]
          sm:w-[75%]

          md:left-[8%]
          md:top-[34%]
          md:w-[68%]

          lg:left-[10%]
          lg:top-[38%]
          lg:w-[70%]

          xl:left-[12%]
          xl:top-[40%]
          xl:w-[92%]
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[650px]
            flex-col
            items-start
          "
        >
          {/* =========================
              RUSH POWER
          ========================= */}

          <span
            className="
              max-w-full
              bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
              bg-clip-text
              font-tactic-exd
              text-[25px]
              font-[600]
              uppercase
              leading-[89%]
              tracking-[-0.03em]
              text-transparent

              min-[380px]:text-[27px]

              min-[480px]:text-[31px]

              sm:text-[35px]

              md:text-[40px]

              lg:text-[43px]

              xl:text-[45.67px]
            "
          >
            RUSH POWER
          </span>

          {/* =========================
              BLOGS
          ========================= */}

          <h1
            className="
              max-w-full
              bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
              bg-clip-text
              font-tactic-exd
              text-[52px]
              font-normal
              uppercase
              leading-[89%]
              tracking-[-0.02em]
              text-transparent

              min-[380px]:text-[57px]

              min-[480px]:text-[64px]

              sm:mt-[1px]
              sm:text-[70px]

              md:text-[78px]

              lg:text-[86px]

              xl:mt-[2px]
              xl:text-[90px]
            "
          >
            BLOGS
          </h1>

          {/* =========================
              DESCRIPTION
          ========================= */}

          <p
            className="
              mt-[16px]
              w-full
              max-w-[650px]
              whitespace-normal
              font-sf
              text-[13px]
              font-[510]
              leading-[125%]
              tracking-[0%]
              text-white

              min-[380px]:mt-[17px]
              min-[380px]:text-[13.5px]

              min-[480px]:mt-[18px]
              min-[480px]:text-[14px]

              sm:mt-[20px]
              sm:text-[15px]
              sm:leading-[120%]

              md:mt-[22px]
              md:text-[17px]
              md:leading-[118%]

              lg:mt-[25px]
              lg:text-[19px]
              lg:leading-[116%]

              xl:mt-[28px]
              xl:text-[20.54px]
              xl:leading-[115%]
            "
          >
            Discover practical insights on strength, energy, focus, workout
            performance, and sports nutrition. From understanding creatine and
            caffeine to improving your pre-workout routine.
          </p>

          {/* =========================
              SEARCH
          ========================= */}

          <div
            className="
              mt-[18px]
              flex
              h-[40px]
              w-full
              max-w-[300px]

              min-[380px]:mt-[19px]
              min-[380px]:h-[41px]
              min-[380px]:max-w-[315px]

              min-[480px]:mt-[20px]
              min-[480px]:h-[42px]
              min-[480px]:max-w-[330px]

              sm:mt-[22px]
              sm:h-[43px]
              sm:max-w-[350px]

              md:mt-[24px]
              md:h-[45px]
              md:max-w-[365px]

              lg:mt-[26px]
              lg:h-[47px]
              lg:max-w-[380px]

              xl:mt-[28px]
              xl:h-[48px]
              xl:max-w-[390px]
            "
          >
            {/* INPUT */}
            <input
              type="text"
              placeholder="SEARCH..."
              aria-label="Search blogs"
              className="
                h-full
                min-w-0
                flex-1
                border
                border-white
                bg-white
                px-[10px]
                font-tactic-reg
                text-[14px]
                font-normal
                uppercase
                leading-[88%]
                text-[#000000]
                outline-none
                placeholder:text-black

                min-[380px]:px-[11px]
                min-[380px]:text-[15px]

                min-[480px]:text-[16px]

                sm:px-[12px]
                sm:text-[17px]

                md:text-[18px]

                lg:text-[19px]

                xl:text-[20px]
              "
            />

            {/* SEARCH BUTTON */}
            <button
              type="button"
              aria-label="Search"
              className="
                ml-[4px]
                flex
                h-full
                w-[40px]
                shrink-0
                items-center
                justify-center
                border
                border-[#777]
                bg-black
                font-tactic-reg
                text-[16px]
                font-normal
                leading-[88%]
                text-white
                transition-all
                duration-200
                hover:bg-white
                hover:text-black

                min-[380px]:w-[41px]

                min-[480px]:w-[42px]

                sm:ml-[5px]
                sm:w-[43px]
                sm:text-[17px]

                md:w-[45px]
                md:text-[18px]

                lg:w-[47px]

                xl:w-[48px]
              "
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
