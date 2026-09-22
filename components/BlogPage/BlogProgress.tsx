"use client";

export default function BlogProgress() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div
        className="
          relative
          z-[30]
          mt-[75px]
          flex
          w-full
          flex-col
          items-center
          px-[16px]
          text-center

          min-[380px]:mt-[85px]
          min-[480px]:mt-[95px]

          sm:mt-[105px]
          sm:px-[24px]

          md:mt-[115px]
          md:px-[40px]

          lg:mt-[120px]
          lg:px-[60px]

          xl:mt-[120px]
          xl:px-[80px]

          2xl:px-[100px]
        "
      >
        <h2
          className="
            w-full
            max-w-[1100px]

            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
            bg-clip-text

            font-tactic-exd
            font-normal
            uppercase
            leading-[89%]
            tracking-[0%]
            text-transparent

            text-[32px]

            min-[380px]:text-[35px]
            min-[480px]:text-[40px]

            sm:text-[46px]

            md:text-[55px]

            lg:text-[64px]

            xl:text-[75.92px]

            2xl:text-[80px]
          "
        >
          START YOUR PROGRESS
        </h2>

        <p
          className="
            mt-[14px]
            w-full
            max-w-[390px]

            font-sf
            text-[13px]
            font-[510]
            leading-[110%]
            tracking-[0%]
            text-center
            text-[#CECECE]

            min-[380px]:mt-[15px]
            min-[380px]:text-[13.5px]

            min-[480px]:mt-[16px]
            min-[480px]:max-w-[430px]
            min-[480px]:text-[14px]

            sm:mt-[17px]
            sm:max-w-[520px]
            sm:text-[16px]
            sm:leading-[106%]

            md:mt-[18px]
            md:max-w-[620px]
            md:text-[18px]

            lg:max-w-[680px]
            lg:text-[20px]

            xl:max-w-[700px]
            xl:text-[23.2px]
            xl:leading-[104%]
          "
        >
          Join the{" "}
          <span className="font-sf font-bold text-white">POWER RUSH</span>{" "}
          community for exclusive offers, product updates, and early access to
          future releases.
        </p>

        <div
          className="
    mt-[22px]
    flex
    h-[50px]
    w-full
    max-w-[500px]
    overflow-hidden

    sm:mt-[25px]
    sm:h-[54px]

    md:mt-[28px]
    md:h-[58px]
  "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
      h-full
      min-w-0
      flex-1
      border
      border-[#5A5A5A]
      bg-[#000000]
      px-[13px]
      font-sf
      text-[18px]
      font-normal
      leading-[104%]
      tracking-[0%]
      text-[#CECECE]
      outline-none
      placeholder:text-[#CECECE]

      sm:px-[16px]
      sm:text-[19px]

      md:px-[20px]
      md:text-[20px]
    "
          />

          <button
            className="
     h-full
w-[155px]
shrink-0
border
border-white
bg-white

font-tactic-reg
text-[3px]
font-normal
leading-[88%]
tracking-[0%]
text-center
uppercase
whitespace-nowrap
text-[#000000]

max-[639px]:!w-[125px]
max-[639px]:!text-[12px]

sm:w-[175px]
sm:text-[7px]

md:w-[210px]
md:text-[18px]

lg:w-[230px]
lg:text-[24px]
    "
          >
            JOIN POWER RUSH
          </button>
        </div>
      </div>
    </section>
  );
}
