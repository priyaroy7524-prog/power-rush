"use client";

import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "OPEN &\nPREPARE",
    description:
      "Tear open one Power Rush stick and get it ready to mix. Pour the entire sachet into the shaker.",
    image: "/images/powoe2.png",
  },
  {
    number: "02",
    title: "MIX &\nSHAKE",
    description:
      "Mix the entire sachet with 200–250 ml of cold water. Shake well until completely dissolved.",
    image: "/images/POWERRUSS.png",
  },
  {
    number: "03",
    title: "DRINK DAILY",
    description:
      "Shake or stir until fully mixed. Consume 20–30 minutes before your workout for best results.",
    image: "/images/shaker.png",
  },
];

export default function RoutineSection() {
  return (
    <section
      className="
        relative
        z-[10]
        min-h-screen
        w-full
        overflow-x-hidden
        overflow-y-visible
        bg-black
        text-white
      "
    >
   
      <div
        className="
    pointer-events-none
    absolute
    left-0
    top-0
    z-[1]
    h-full
    w-[18vw]
    max-w-[280px]
    overflow-hidden
  "
      >
        <Image
          src="/images/image415.png"
          alt=""
          fill
          priority
          className="
      object-contain
      object-left-top
      scale-[1.15]
    "
        />

        <div
          className="
      pointer-events-none
      absolute
      left-0
      top-0
      h-[180px]
      w-full
      bg-[linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0.85)_25%,rgba(0,0,0,0.45)_55%,transparent_100%)]
      md:h-[210px]
      lg:h-[240px]
    "
        />
      </div>

   
      <div
        className="
    pointer-events-none
    absolute
    right-0
    top-0
    z-[1]
    h-full
    w-[18vw]
    max-w-[280px]
    overflow-hidden
  "
      >
        <Image
          src="/images/image415.png"
          alt=""
          fill
          priority
          className="
      scale-x-[-1]
      object-contain
      object-right-top
      scale-[1.15]
    "
        />

      
        <div
          className="
      pointer-events-none
      absolute
      left-0
      top-0
      h-[180px]
      w-full
      bg-[linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0.85)_25%,rgba(0,0,0,0.45)_55%,transparent_100%)]
      md:h-[210px]
      lg:h-[240px]
    "
        />
      </div>

      <div
        className="
          relative
          z-[10]
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1600px]
          flex-col
          items-center
          overflow-visible
          px-[24px]
          pb-[150px]
          md:px-[50px]
          lg:px-[80px]
        "
      >
      
        <div
          className="
            relative
            z-[20]
            flex
            w-full
            flex-col
            items-center
            pt-[72px]
            text-center
          "
        >
          <p
            className="
    font-dm-mono
    text-[30px]
    font-[500]
    leading-[97%]
    tracking-[0%]
    text-[#9D9D9D]
    md:text-[38px]
  "
          >
            HOW TO USE
          </p>

          <h2
            className="
    mt-[22px]
    max-w-[1200px]
    bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
    bg-clip-text
    font-tactic-exd
    text-[10px]
    font-normal
    uppercase
    leading-[89%]
    tracking-[0%]
    text-transparent
    md:text-[40px]
    lg:text-[46.58px]
  "
          >
            SIMPLE ROUTINE. CONSISTENT RESULTS.
          </h2>
          <p
            className="
    mt-[22px]
    max-w-[850px]
    font-sf
    text-[12px]
    font-normal
    leading-[120%]
    tracking-[0%]
    text-[#C5C5C5]
    md:text-[20px]
    lg:text-[22px]
  "
          >
            Just one scoop a day is all it takes to support strength, recovery,
            and long-term
            <br className="hidden md:block" />
            performance. No complicated routine required.
          </p>
        </div>

        <div
          className="
            relative
            z-[20]
            mt-[65px]
            grid
            w-full
            grid-cols-1
            gap-[20px]
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`
      relative
      flex
      h-[330px]
      w-full
      items-center
      overflow-hidden
      rounded-[4px]
      bg-[#050505]
      px-[20px]

      ${index === 0 ? "lg:-translate-x-[50px]" : ""}
      ${index === 2 ? "lg:translate-x-[50px]" : ""}
    `}
            >
              <div
                className={`
    relative
    shrink-0
    ${index === 1 ? "h-[350px] w-[52%]" : "h-[320px] w-[48%]"}
  `}
              >
                <Image
                  src={step.image}
                  alt=""
                  fill
                  className="object-contain object-center"
                />
              </div>

              <div
                className="
                  flex
                  h-full
                  w-[52%]
                  flex-col
                  justify-center
                  pl-[10px]
                "
              >
                <span
                  className="
                    font-dm-mono
                    text-[18px]
                    font-medium
                    leading-none
                    text-[#C5C5C5]
                  "
                >
                  {step.number}
                </span>

                <h3
                  className="
    mt-[20px]
    whitespace-pre-line
    font-tactic-exd
    text-[27.66px]
    font-normal
    uppercase
    leading-[101%]
    tracking-[0%]
    text-white
  "
                >
                  {step.title}
                </h3>

                <p
                  className="
    mt-[22px]
    max-w-[250px]
    font-sf
    text-[13px]
    font-bold
    leading-[110%]
    tracking-[0%]
    text-[#9D9D9D]
  "
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="
            absolute
            bottom-[45px]
            left-0
            z-[30]
            w-full
            overflow-hidden
          "
        >
          <div className="flex w-max">
            <div className="flex shrink-0 animate-marquee">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="
                    relative
                    h-[55px]
                    w-[180px]
                    shrink-0
                    md:h-[65px]
                    md:w-[215px]
                    lg:h-[75px]
                    lg:w-[250px]
                  "
                >
                  <Image
                    src="/images/image423.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex shrink-0 animate-marquee">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="
                    relative
                    h-[55px]
                    w-[180px]
                    shrink-0
                    md:h-[65px]
                    md:w-[215px]
                    lg:h-[75px]
                    lg:w-[250px]
                  "
                >
                  <Image
                    src="/images/image423.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
