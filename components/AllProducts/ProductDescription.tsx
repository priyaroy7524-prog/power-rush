
"use client";

import { useState } from "react";

const sections = [
  {
    id: "description",
    title: "DESCRIPTION",
    content:
      "Power Rush is an ultra-premium performance formula designed to support strength, power, energy and focus. Each serving combines carefully selected ingredients in a convenient single-stick format.",
  },
  {
    id: "benefits",
    title: "KEY BENEFITS",
    content: [
      "Supports strength and power",
      "Helps improve workout performance",
      "Supports energy and focus",
      "3G creatine per serving",
      "250 MG taurine",
      "100% micronized formula",
    ],
  },
  {
    id: "formula",
    title: "WHY POWER RUSH?",
    content:
      "A simple and effective performance formula made for people who want a convenient daily creatine routine without unnecessary added sugar.",
  },
  {
    id: "usage",
    title: "HOW TO USE",
    content:
      "Mix one stick with your preferred amount of water, shake or stir thoroughly and enjoy before or after your workout.",
  },
];

export default function ProductDescription() {
  const [openSection, setOpenSection] = useState<string | null>(
    "description"
  );

  const toggleSection = (id: string) => {
    setOpenSection((current) => (current === id ? null : id));
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        px-[16px]
        py-[70px]
        text-white

        min-[380px]:px-[18px]
        min-[480px]:px-[22px]

        sm:px-[30px]
        sm:py-[85px]

        md:px-[45px]
        md:py-[105px]

        lg:px-[65px]
        lg:py-[125px]

        xl:px-[80px]
        xl:py-[140px]

        2xl:px-[100px]
        2xl:py-[155px]
      "
    >
     
      <div
        className="
          mx-auto
          w-full
          max-w-[1450px]
        "
      >
       
        <div className="w-full border-t border-white/20">
          {sections.map((section) => {
            const isOpen = openSection === section.id;

            return (
              <div
                key={section.id}
                className="w-full border-b border-white/20"
              >
                
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={isOpen}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-[16px]
                    py-[20px]
                    text-left

                    min-[380px]:py-[22px]

                    sm:gap-[20px]
                    sm:py-[25px]

                    md:py-[28px]

                    lg:py-[30px]

                    xl:py-[32px]

                    2xl:py-[35px]
                  "
                >
                  
                  <span
                    className="
                      min-w-0
                      flex-1
                      uppercase
                      leading-[89%]
                      font-semibold
                      tracking-[0%]
                      transition-opacity
                      duration-300

                      text-[22px]

                      min-[380px]:text-[24px]

                      min-[480px]:text-[27px]

                      sm:text-[30px]

                      md:text-[33px]

                      lg:text-[36px]

                      xl:text-[36.47px]

                      2xl:text-[38px]
                    "
                    style={{
                      fontFamily: "TacticSansExd",
                      fontStyle: "normal",
                      background:
                        "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      opacity: isOpen ? 1 : 0.55,
                    }}
                  >
                    {section.title}
                  </span>

                
                  <span
                    className={`
                      relative
                      flex
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300

                      h-[30px]
                      w-[30px]

                      min-[380px]:h-[32px]
                      min-[380px]:w-[32px]

                      sm:h-[34px]
                      sm:w-[34px]

                      md:h-[36px]
                      md:w-[36px]

                      lg:h-[38px]
                      lg:w-[38px]

                      ${
                        isOpen
                          ? "rotate-180 border-white bg-white text-black"
                          : "border-white/30 text-white"
                      }
                    `}
                  >
                   
                    <span
                      className="
                        absolute
                        h-[2px]
                        w-[12px]
                        rounded-full
                        bg-current

                        sm:w-[13px]
                        md:w-[14px]
                        lg:h-[3px]
                        lg:w-[15px]
                      "
                    />

                    {/* Vertical line */}
                    <span
                      className={`
                        absolute
                        h-[12px]
                        w-[2px]
                        rounded-full
                        bg-current
                        transition-transform
                        duration-300

                        sm:h-[13px]
                        md:h-[14px]
                        lg:h-[15px]
                        lg:w-[3px]

                        ${isOpen ? "rotate-90 opacity-0" : ""}
                      `}
                    />
                  </span>
                </button>

               
                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        pb-[25px]
                        pl-[4px]
                        pr-[4px]

                        min-[380px]:pb-[28px]

                        sm:pb-[30px]
                        sm:pl-[8px]
                        sm:pr-[15px]

                        md:pb-[32px]
                        md:pl-[35px]
                        md:pr-[25px]

                        lg:pb-[35px]
                        lg:pl-[38px]
                        lg:pr-[50px]

                        xl:pl-[40px]

                        2xl:pl-[45px]
                      "
                    >
                      {Array.isArray(section.content) ? (
                      
                        <div
                          className="
                            grid
                            grid-cols-1
                            gap-y-[13px]

                            sm:grid-cols-2
                            sm:gap-x-[35px]
                            sm:gap-y-[15px]

                            md:gap-x-[55px]
                            md:gap-y-[16px]

                            lg:gap-x-[70px]
                            lg:gap-y-[17px]

                            xl:gap-x-[90px]
                          "
                        >
                          {section.content.map((item) => (
                            <div
                              key={item}
                              className="
                                flex
                                min-w-0
                                items-start
                                gap-[9px]

                                sm:gap-[10px]

                                md:gap-[11px]

                                lg:gap-[12px]
                              "
                            >
                            
                              <span
                                className="
                                  mt-[5px]
                                  h-[4px]
                                  w-[4px]
                                  shrink-0
                                  rounded-full
                                  bg-[#CECECE]

                                  sm:h-[5px]
                                  sm:w-[5px]
                                "
                              />

                            
                              <p
                                className="
                                  min-w-0
                                  font-sf
                                  text-[12px]
                                  leading-[120%]
                                  font-[510]
                                  not-italic
                                  tracking-[0%]
                                  text-[#CECECE]

                                  min-[380px]:text-[12.5px]

                                  sm:text-[13px]

                                  md:text-[14px]

                                  lg:text-[15px]

                                  xl:text-[16px]

                                  2xl:text-[17px]
                                "
                              >
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                       
                        <p
                          className="
                            w-full
                            max-w-[1050px]
                            font-sf
                            text-[14px]
                            leading-[135%]
                            font-[510]
                            not-italic
                            tracking-[0%]
                            text-[#CECECE]

                            min-[380px]:text-[14.5px]

                            sm:text-[15px]
                            sm:leading-[130%]

                            md:text-[16px]
                            md:leading-[125%]

                            lg:text-[17px]
                            lg:leading-[115%]

                            xl:text-[18px]
                            xl:leading-[104%]
                          "
                        >
                          {section.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
