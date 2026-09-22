
"use client";

export default function ProductProgress() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
    
      <div
        className="
          relative
          z-[30]
          mt-[70px]
          flex
          w-full
          flex-col
          items-center
          px-[16px]
          text-center

          min-[380px]:mt-[80px]
          min-[380px]:px-[18px]

          min-[480px]:mt-[90px]
          min-[480px]:px-[22px]

          sm:mt-[100px]
          sm:px-[30px]

          md:mt-[110px]
          md:px-[45px]

          lg:mt-[120px]
          lg:px-[65px]

          xl:mt-[120px]
          xl:px-[80px]

          2xl:mt-[130px]
          2xl:px-[100px]
        "
      >
       
        <h2
          className="
            w-full
            max-w-[1500px]
            bg-[linear-gradient(90.24deg,#A5A5A5_0%,#FFFFFF_46.06%,#878787_99.79%)]
            bg-clip-text
            font-tactic-exd
            text-[31px]
            font-normal
            uppercase
            leading-[89%]
            tracking-[0%]
            text-transparent

            min-[380px]:text-[34px]

            min-[480px]:text-[40px]

            sm:text-[48px]

            md:text-[58px]

            lg:text-[68px]

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
            max-w-[700px]
            font-sf
            text-[13px]
            font-[510]
            leading-[125%]
            tracking-[0%]
            text-center
            text-[#CECECE]

            min-[380px]:mt-[15px]
            min-[380px]:text-[13.5px]

            min-[480px]:mt-[16px]
            min-[480px]:text-[14px]

            sm:mt-[17px]
            sm:text-[16px]
            sm:leading-[115%]

            md:mt-[18px]
            md:text-[18px]
            md:leading-[110%]

            lg:text-[21px]
            lg:leading-[106%]

            xl:text-[23.2px]
            xl:leading-[104%]
          "
        >
          Join the{" "}
          <span className="font-sf font-bold text-white">
            POWER RUSHhttps://www.figma.com/design/gT297uRIbwvi6EkmFu3bga/rush-power?node-id=0-1&p=f&t=OtEi5Ylfp1AaDmjw-0
          </span>{" "}
          community for exclusive offers, product
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          updates, and early access to future releases.
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