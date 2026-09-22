
"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  "ALL",
  "PRE-WORKOUT GUIDE",
  "RACKET SUPPLEMENTS",
  "WORKOUT PERFORMANCE",
  "CAFFEINE & FOCUS",
];

export default function BlogPosts() {
  return (
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
    z-20
    flex
    w-full
    flex-wrap
    items-center
    gap-[6px]
    min-[480px]:gap-[7px]
    sm:gap-[8px]
  "
>
  {categories.map((category, index) => (
    <button
      key={category}
      type="button"
      style={{
        fontFamily: "TacticSans-Reg",
        fontSize: "17.24px",
        fontWeight: 400,
        fontStyle: "normal",
      }}
      className={`
        flex
        min-h-[34px]
        items-center
        justify-center
        border
        border-[#555]
        px-[15px]
        py-[8px]

        leading-[88%]
        tracking-[0%]
        text-center
        uppercase

        transition-all
        duration-200

        min-[380px]:px-[12px]

        min-[480px]:min-h-[36px]
        min-[480px]:px-[14px]

        sm:min-h-[38px]
        sm:px-[16px]

        md:px-[17px]

        lg:px-[18px]

        ${
          index === 0
            ? "border-white bg-white text-black"
            : "bg-black text-white hover:border-white"
        }
      `}
    >
      {category}
    </button>
  ))}
</div>


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
              mt-[18px]
              flex
              w-full
              items-center
              gap-[5px]

              min-[480px]:mt-[20px]

              sm:mt-[21px]

              md:mt-[22px]
            "
          >
            
            
<Link
  href="/readmore"
  className="
    relative
    z-[10]
    flex
    h-[40px]
    w-[170px]
    items-center
    justify-center
    bg-white
    px-[10px]

    font-tactic-reg
    text-[15px]
    font-normal
    uppercase
    leading-[88%]
    tracking-[0%]

    !text-black

    transition-opacity
    duration-200
    hover:opacity-80

    min-[380px]:w-[180px]
    min-[380px]:text-[16px]

    min-[480px]:h-[41px]
    min-[480px]:w-[190px]
    min-[480px]:text-[17px]

    sm:h-[42px]
    sm:w-[200px]
    sm:text-[18px]

    md:text-[19px]

    lg:text-[19.97px]
  "
>
  <span className="!text-black">
    KNOW MORE...
  </span>
</Link>



         
            <button
              type="button"
              aria-label="Read more"
              className="
                flex
                h-[40px]
                w-[46px]
                shrink-0
                items-center
                justify-center
                border
                border-[#555]
                bg-black
                font-tactic-reg
                text-[17px]
                font-normal
                leading-[88%]
                text-white
                transition-all
                duration-200
                hover:bg-white
                hover:text-black

                min-[380px]:h-[40px]
                min-[380px]:w-[48px]

                min-[480px]:h-[41px]
                min-[480px]:w-[50px]

                sm:h-[42px]
                sm:w-[52px]

                md:w-[55px]
                md:text-[19px]
              "
            >
              →
            </button>
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
  );
}
