"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BenefitCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="
        benefit-card
        !relative
        !box-border
        !border-[1px]
        !border-solid

        !w-[97%]
        sm:!w-[97%]
        md:!w-[97%]
        lg:!w-[97%]
        xl:!w-[97%]
        2xl:!w-[97%]

        !min-w-0
        !max-w-full
        !bg-black

        overflow-hidden

        transition-colors
        duration-300
      "
      style={{
        borderColor: hover ? "#353535" : "transparent",
      }}
      animate={{
        y: hover ? -5 : 0,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0

          transition-opacity
          duration-500
          ease-out
        "
        style={{
          opacity: hover ? 1 : 0,
          background:
            "linear-gradient(to top, rgba(157,157,157,0.42) 0%, rgba(157,157,157,0.24) 25%, rgba(157,157,157,0.10) 48%, rgba(157,157,157,0.025) 65%, transparent 82%)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[9px]
          z-[20]

          transition-opacity
          duration-200

          sm:inset-[11px]
          md:inset-[15px]
        "
        style={{
          opacity: hover ? 1 : 0,
        }}
      >
        <span
          className="
            absolute
            left-0
            top-0

            h-[20px]
            w-[20px]

            border-l-[2px]
            border-t-[2px]
            border-[#C5D0D8]

            sm:h-[24px]
            sm:w-[24px]

            md:h-[30px]
            md:w-[30px]
          "
        />

        <span
          className="
            absolute
            right-0
            top-0

            h-[20px]
            w-[20px]

            border-r-[2px]
            border-t-[2px]
            border-[#C5D0D8]

            sm:h-[24px]
            sm:w-[24px]

            md:h-[30px]
            md:w-[30px]
          "
        />

        <span
          className="
            absolute
            bottom-0
            left-0

            h-[20px]
            w-[20px]

            border-b-[2px]
            border-l-[2px]
            border-[#C5D0D8]

            sm:h-[24px]
            sm:w-[24px]

            md:h-[30px]
            md:w-[30px]
          "
        />

        <span
          className="
            absolute
            bottom-0
            right-0

            h-[20px]
            w-[20px]

            border-b-[2px]
            border-r-[2px]
            border-[#C5D0D8]

            sm:h-[24px]
            sm:w-[24px]

            md:h-[30px]
            md:w-[30px]
          "
        />
      </div>

    
      <div
        className="
          benefit-number
          relative
          z-[10]

          !text-[13px]
          sm:!text-[15px]
          md:!text-[17px]
          lg:!text-[18px]

          transition-colors
          duration-300
        "
        style={{
          color: hover ? "#ffffff" : "#606060",
        }}
      >
        {number}
      </div>

      <h3
        className="
          relative
          z-[10]

          min-w-0
          break-words

          !font-tactic-exd
          !text-[18px]
          !font-normal
          !uppercase
          !leading-[1]
          !tracking-[0%]

          sm:!text-[20px]
          md:!text-[23px]
          lg:!text-[25px]

          transition-colors
          duration-300
        "
        style={{
          color: hover ? "#ffffff" : "#606060",
        }}
      >
        {title}
      </h3>

      <p
        className="
    relative
    z-[10]

    min-w-0
    break-words

    !font-sf
    !text-[13px]
    !font-normal
    !leading-[115%]
    !tracking-[0%]

    sm:!text-[13px]
    md:!text-[14px]
    lg:!text-[16px]
    xl:!text-[18px]

    lg:!leading-[104%]

    transition-colors
    duration-300
  "
        style={{
          color: hover ? "#ffffff" : "#606060",
        }}
      >
        {body}
      </p>
    </motion.article>
  );
}
