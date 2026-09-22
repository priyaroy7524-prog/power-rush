
"use client";

import Image from "next/image";

const blogs = [
  {
    image: "/images/blogCard1.png",
    category: "WORKOUT PERFORMANCE",
    title: "BIG PERFORMANCE. ONE SIMPLE STICK.",
    description:
      "Your supplement routine shouldn't slow you down. Single-serving sachets...",
  },
  {
    image: "/images/blogCard2.png",
    category: "WORKOUT PERFORMANCE",
    title: "TURN YOUR PRE-WORKOUT ROUTINE INTO PERFORMANCE MODE",
    description:
      "Training hard requires more than motivation. Energy and mental focus...",
  },
  {
    image: "/images/blogCard1.png",
    category: "WORKOUT PERFORMANCE",
    title: "BIG PERFORMANCE. ONE SIMPLE STICK.",
    description:
      "Your supplement routine shouldn't slow you down. Single-serving sachets...",
  },
  {
    image: "/images/blogCard2.png",
    category: "WORKOUT PERFORMANCE",
    title: "TURN YOUR PRE-WORKOUT ROUTINE INTO PERFORMANCE MODE",
    description:
      "Training hard requires more than motivation. Energy and mental focus...",
  },
  {
    image: "/images/blogCard1.png",
    category: "WORKOUT PERFORMANCE",
    title: "BIG PERFORMANCE. ONE SIMPLE STICK.",
    description:
      "Your supplement routine shouldn't slow you down. Single-serving sachets...",
  },
  {
    image: "/images/blogCard2.png",
    category: "WORKOUT PERFORMANCE",
    title: "TURN YOUR PRE-WORKOUT ROUTINE INTO PERFORMANCE MODE",
    description:
      "Training hard requires more than motivation. Energy and mental focus...",
  },
];

export default function BlogGrid() {
  return (
    <section
      className="
        relative
        z-0
        w-full
        overflow-hidden
        bg-black
        px-[16px]
        pb-[50px]
        pt-[14px]

        min-[380px]:px-[18px]

        min-[480px]:px-[22px]
        min-[480px]:pb-[55px]

        sm:px-[30px]
        sm:pb-[60px]
        sm:pt-[16px]

        md:px-[40px]
        md:pb-[70px]

        lg:px-[29px]
        lg:pb-[80px]
        lg:pt-[18px]

        xl:px-[45px]

        2xl:px-[60px]
      "
    >

      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-x-[18px]
          gap-y-[35px]

          min-[480px]:gap-y-[40px]

          sm:grid-cols-2
          sm:gap-x-[18px]
          sm:gap-y-[45px]

          md:gap-x-[20px]
          md:gap-y-[50px]

          lg:grid-cols-3
          lg:gap-x-[20px]
          lg:gap-y-[50px]

          xl:gap-x-[24px]
          xl:gap-y-[55px]

          2xl:gap-x-[28px]
          2xl:gap-y-[60px]
        "
      >
        {blogs.map((blog, index) => (
          <article
            key={`${blog.image}-${index}`}
            className="
              relative
              z-0
              w-full
              min-w-0
              overflow-hidden
            "
          >
           

            <div
              className="
                relative
                aspect-square
                w-full
                overflow-hidden
                rounded-[4px]
              "
            >
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 50vw,
                  33vw
                "
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-500
                  hover:scale-[1.02]
                "
              />
            </div>

           

            <div
              className="
                mt-[9px]
                inline-flex
                max-w-full
                items-center
                justify-center
                border
                border-[#555555]
                px-[7px]
                py-[5px]

                min-[380px]:mt-[10px]
                min-[380px]:px-[8px]

                sm:mt-[10px]
              "
            >
              <span
                className="
                  whitespace-normal
                  font-tactic-reg
                  text-[10px]
                  font-normal
                  uppercase
                  leading-[100%]
                  tracking-[0%]
                  text-center
                  text-white

                  min-[380px]:text-[10.5px]

                  min-[480px]:text-[11px]

                  sm:text-[12px]

                  md:text-[13px]

                  lg:text-[14.19px]
                "
              >
                {blog.category}
              </span>
            </div>


            <h2
              className="
                mt-[10px]
                w-full
                max-w-[520px]
                font-tactic-exd
                text-[16px]
                font-[900]
                uppercase
                leading-[115%]
                tracking-[0%]
                text-white

                min-[380px]:mt-[11px]
                min-[380px]:text-[17px]

                min-[480px]:text-[18px]

                sm:mt-[12px]
                sm:text-[18px]

                md:text-[19px]

                lg:text-[18.52px]

                xl:text-[19px]

                2xl:text-[20px]
              "
            >
              {blog.title}
            </h2>

          

            <p
              className="
                mt-[8px]
                w-full
                max-w-[540px]
                font-sf
                text-[13px]
                font-[510]
                leading-[120%]
                tracking-[0%]
                text-[#808080]

                min-[380px]:mt-[9px]
                min-[380px]:text-[13.5px]

                min-[480px]:text-[14px]

                sm:mt-[10px]
                sm:text-[15px]
                sm:leading-[115%]

                md:text-[17px]

                lg:text-[19px]

                xl:text-[20px]

                2xl:text-[21.53px]
              "
            >
              {blog.description}
            </p>
          </article>
        ))}
      </div>

    

      <div
        className="
          mt-[40px]
          flex
          items-center
          justify-center
          gap-[18px]

          min-[380px]:mt-[42px]
          min-[380px]:gap-[20px]

          min-[480px]:mt-[45px]
          min-[480px]:gap-[22px]

          sm:mt-[48px]
          sm:gap-[25px]

          md:mt-[50px]
          md:gap-[27px]

          lg:mt-[52px]
          lg:gap-[28px]
        "
      >
        <button
          type="button"
          aria-label="Page 1"
          className="
            flex
            h-[34px]
            w-[34px]
            items-center
            justify-center
            bg-white
            font-tactic-reg
            text-[17px]
            font-normal
            leading-[88%]
            text-black

            min-[380px]:h-[35px]
            min-[380px]:w-[35px]

            min-[480px]:h-[36px]
            min-[480px]:w-[36px]

            sm:h-[38px]
            sm:w-[38px]
            sm:text-[19px]

            md:h-[40px]
            md:w-[40px]
            md:text-[21px]
          "
        >
          1
        </button>

        <button
          type="button"
          aria-label="Page 2"
          className="
            font-tactic-reg
            text-[17px]
            font-normal
            leading-[88%]
            text-white

            sm:text-[19px]

            md:text-[21px]
          "
        >
          2
        </button>

      
        <button
          type="button"
          aria-label="Page 3"
          className="
            font-tactic-reg
            text-[17px]
            font-normal
            leading-[88%]
            text-white

            sm:text-[19px]

            md:text-[21px]
          "
        >
          3
        </button>

     
        <button
          type="button"
          aria-label="Next page"
          className="
            font-tactic-reg
            text-[18px]
            font-normal
            leading-[88%]
            text-white

            sm:text-[20px]

            md:text-[21px]
          "
        >
          »
        </button>
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