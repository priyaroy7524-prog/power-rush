"use client";

import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

type Flavour = {
  name: string;
  title: string;
  description: string;
  color: string;
  splashImage: string;
  backgroundImage: string;
};

const flavours: Flavour[] = [
  {
    name: "MANGO",
    title: "MANGO",
    description:
      "A bold, juicy mango experience with a refreshing tropical taste. Crafted to deliver a smooth, delicious pre-workout boost with every stick.",
    color: "#FFD21C",
    splashImage: "/images/orignal mengo.png",
    backgroundImage: "/images/mango-background.png",
  },
  {
    name: "WATERMELON",
    title: "WATERMELON",
    description:
      "A juicy, refreshing watermelon taste with a crisp, fruity finish. Light, delicious, and refreshing—perfect for an instant burst of flavour with every stick.",
    color: "#F3263A",
    splashImage: "/images/WATERMELLON.png",
    backgroundImage: "/images/watermelon-background.png",
  },
  {
    name: "BLUE RASPBERRY",
    title: "BLUE RASPBERRY",
    description:
      "A vibrant burst of sweet-tart blue raspberry with a refreshing fruity finish. Bold, smooth, and deliciously refreshing in every stick.",
    color: "#2498FF",
    splashImage: "/images/MANGO.png",
    backgroundImage: "/images/blue-raspberry-background.png",
  },
  {
    name: "GRAPES",
    title: "GRAPES",
    description:
      "A rich, juicy grape taste with a smooth, refreshing finish. Sweet, fruity, and satisfying in every sip.",
    color: "#7B19FF",
    splashImage: "/images/GRAPES.png",
    backgroundImage: "/images/grapes-background.png",
  },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;
const softEase = [0.16, 0.8, 0.2, 1] as const;

const textVariants: Variants = {
  initial: (direction: number) => ({
    opacity: 0,
    y: direction === -1 ? 45 : -45,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.35, ease: "easeOut" },
      y: { duration: 0.58, ease: smoothEase },
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction === -1 ? -45 : 45,
    transition: {
      opacity: { duration: 0.25, ease: "easeIn" },
      y: { duration: 0.45, ease: smoothEase },
    },
  }),
};

const productVariants: Variants = {
  initial: { opacity: 0, x: "var(--product-enter-x)" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      opacity: { duration: 0.45, ease: "easeOut" },
      x: { duration: 0.9, ease: smoothEase },
    },
  },
  exit: {
    opacity: 0,
    x: "var(--product-exit-x)",
    transition: {
      opacity: { duration: 0.45, ease: "easeIn" },
      x: { duration: 0.85, ease: smoothEase },
    },
  },
};

const splashVariants: Variants = {
  initial: { opacity: 0, x: "var(--splash-enter-x)", scale: 0.88 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      opacity: { duration: 0.55, ease: "easeOut" },
      x: { duration: 0.9, ease: smoothEase },
      scale: { duration: 0.9, ease: softEase },
    },
  },
  exit: {
    opacity: 0,
    x: "var(--splash-exit-x)",
    scale: 0.92,
    transition: {
      opacity: { duration: 0.42, ease: "easeIn" },
      x: { duration: 0.85, ease: smoothEase },
      scale: { duration: 0.7, ease: smoothEase },
    },
  },
};

const backgroundVariants: Variants = {
  initial: { opacity: 0, scale: 1.03 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      opacity: { duration: 0.55, ease: "easeOut" },
      scale: { duration: 0.8, ease: smoothEase },
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: {
      opacity: { duration: 0.35, ease: "easeOut" },
    },
  },
};

export default function AllProductsHero() {
  const [activeFlavour, setActiveFlavour] = useState(0);
  const [hoveredFlavour, setHoveredFlavour] = useState<number | null>(null);
  const [textDirection, setTextDirection] = useState(-1);
  const [autoAnimationFinished, setAutoAnimationFinished] = useState(false);

  const flavour = flavours[activeFlavour];

  useEffect(() => {
    if (autoAnimationFinished) return;

    if (activeFlavour === flavours.length - 1) {
      setAutoAnimationFinished(true);
      return;
    }

    const timer = window.setTimeout(() => {
      setTextDirection(-1);
      setActiveFlavour((current) => {
        if (current >= flavours.length - 1) return current;
        return current + 1;
      });
    }, 3400);

    return () => window.clearTimeout(timer);
  }, [activeFlavour, autoAnimationFinished]);

  const selectFlavour = (index: number) => {
    if (index === activeFlavour) return;
    setTextDirection(1);
    setAutoAnimationFinished(true);
    setActiveFlavour(index);
    setHoveredFlavour(null);
  };

  return (
   <section
  className="
    relative
    min-h-screen
    min-h-[100dvh]
    w-full
    overflow-hidden
    bg-black
    text-white
  "
      style={
        {
          "--product-enter-x": "clamp(90px, 24vw, 360px)",
          "--product-exit-x": "clamp(-360px, -24vw, -90px)",
          "--splash-enter-x": "clamp(120px, 30vw, 430px)",
          "--splash-exit-x": "clamp(-430px, -30vw, -120px)",
        } as React.CSSProperties
      }
    >
      <AnimatePresence mode="wait">
        {hoveredFlavour !== null && (
          <motion.div
            key={flavours[hoveredFlavour].backgroundImage}
            variants={backgroundVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 z-0"
          >
            <Image
              src={flavours[hoveredFlavour].backgroundImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-[1] bg-black/20" />

      <div
        className="
          hidden sm:block
          pointer-events-none
          absolute
          left-[clamp(-25px,-2vw,-15px)]
          top-[clamp(-10px,-1vw,-5px)]
          z-[5]
          w-[clamp(190px,27vw,410px)]
          lg:w-[clamp(300px,27vw,390px)]
          xl:w-[clamp(360px,28vw,410px)]
          2xl:w-[clamp(390px,26vw,520px)]
        "
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.9) 68%, rgba(0,0,0,0.45) 82%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.9) 68%, rgba(0,0,0,0.45) 82%, transparent 100%)",
        }}
      >
        <Image
          src="/images/image415.png"
          alt=""
          width={420}
          height={420}
          priority
          className="h-auto w-full object-contain"
        />
      </div>

      <div
        className="
          hidden sm:block
          pointer-events-none
          absolute
          right-[clamp(-25px,-2vw,-15px)]
          top-[clamp(-10px,-1vw,-5px)]
          z-[5]
          w-[clamp(190px,27vw,410px)]
          lg:w-[clamp(300px,27vw,390px)]
          xl:w-[clamp(360px,28vw,410px)]
          2xl:w-[clamp(390px,26vw,520px)]
        "
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.9) 68%, rgba(0,0,0,0.45) 82%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.9) 68%, rgba(0,0,0,0.45) 82%, transparent 100%)",
        }}
      >
        <Image
          src="/images/image415.png"
          alt=""
          width={420}
          height={420}
          priority
          className="h-auto w-full scale-x-[-1] object-contain"
        />
      </div>

     <div className="sm:hidden relative z-20 flex flex-col items-center pt-12 mt-10 pb-2 px-5">
       
       {/* MOBILE PRODUCT + SPLASH */}
<div className="relative w-full h-[345px] flex items-center justify-center my-0">
  
  <motion.div
    key={`splash-${activeFlavour}`}
    variants={splashVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    custom={textDirection}
    className="absolute z-10"
  >
    <Image
      src={flavours[activeFlavour].splashImage}
      alt={flavours[activeFlavour].name}
      width={300}
      height={300}
      className="h-[300px] w-[300px] object-contain"
      priority
    />
  </motion.div>

 
  <motion.div
    key={`product-${activeFlavour}`}
    variants={productVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    custom={textDirection}
    className="absolute z-20"
  >
    <Image
      src="/images/powoe2.png"
      alt="Power Rush"
      width={400}
      height={400}
      className="h-72 w-auto object-contain"
      priority
    />
  </motion.div>
</div>


<div className="relative z-10 -mt-1 flex w-full justify-center">
  <Image
    src="/images/smallRock.png"
    alt=""
    width={300}
    height={150}
    className="h-[95px] w-[200px] object-contain"
    priority
  />
</div>

{/* CONTENT STARTS IMMEDIATELY AFTER ROCK */}
<div className="relative z-20 mt-0 flex flex-col items-center text-center">
  
</div>

        <div className="text-center mt-2 w-full">
          <div
            className="uppercase text-[11px] tracking-widest mb-1"
            style={{
              fontFamily: "TacticSansExd",
              background:
                "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            POWER RUSH
          </div>

          <AnimatePresence mode="wait" custom={textDirection}>
            <motion.div
              key={flavour.name}
              custom={textDirection}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h1
                className="uppercase text-2xl font-bold italic"
                style={{
                  fontFamily: "TacticSansExd-UltIt",
                  color: flavour.color,
                }}
              >
                {flavour.title}
              </h1>
              <p className="mt-2 text-xs text-zinc-300 font-sf max-w-xs mx-auto leading-relaxed">
                {flavour.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 w-full max-w-xs text-center">
          <div
            className="uppercase text-[11px] mb-2.5 tracking-widest"
            style={{
              fontFamily: "TacticSansExd",
              background:
                "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FLAVOURS
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
  {flavours.map((item, index) => {
    const isActive = activeFlavour === index;

    return (
      <button
        key={item.name}
        type="button"
        onClick={() => selectFlavour(index)}
        className="cursor-pointer uppercase px-3 py-1 rounded-full text-[11px] font-bold transition-all"
        style={{
          fontFamily: "TacticSansExd-UltIt",
          backgroundColor: isActive
            ? "black"
            : "rgba(255,255,255,0.08)",
          color: isActive ? item.color : "#A5A5A5",
        }}
      >
        {item.name}
      </button>
    );
  })}
</div>
        </div>

        <div className="mt-6 px-2 text-center">
          <p className="text-[11px] text-zinc-400 font-sf leading-relaxed">
            Ultra Premium Performance Formula Creatine + Caffeine + Taurine
            designed to support instant power, strength, energy, and mental
            focus.
          </p>
        </div>
      </div>
      <div className="hidden sm:block relative z-10 min-h-screen min-h-[100dvh] w-full">
        <div
          className="
            absolute
            sm:left-[clamp(28px,4.5vw,55px)]
            sm:top-[clamp(280px,35vh,390px)]
            sm:w-[clamp(220px,42vw,330px)]
            sm:max-w-[44vw]
            md:left-[clamp(38px,5vw,80px)]
            md:top-[clamp(210px,24vh,300px)]
            md:w-[clamp(350px,36vw,500px)]
            md:max-w-none
            lg:left-[clamp(55px,6vw,95px)]
            lg:top-[clamp(230px,27vh,330px)]
            lg:w-[clamp(360px,32vw,520px)]
            xl:left-[6%]
            xl:top-[27%]
            xl:w-[32%]
            2xl:left-[clamp(80px,6vw,140px)]
            2xl:top-[clamp(260px,28vh,390px)]
            2xl:w-[clamp(420px,30vw,620px)]
            z-40
          "
        >
          <div
            className="mb-[clamp(7px,1.1vw,18px)] uppercase"
            style={{
              fontFamily: "TacticSansExd",
              fontSize: "clamp(16px, 2.15vw, 30.27px)",
              lineHeight: "89%",
              fontWeight: 400,
              fontStyle: "normal",
              textTransform: "uppercase",
              background:
                "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            POWER RUSH
          </div>

          <AnimatePresence mode="wait" custom={textDirection}>
            <motion.div
              key={flavour.name}
              custom={textDirection}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h1
                className="w-full max-w-full uppercase leading-none whitespace-nowrap"
                style={{
                  fontFamily: "TacticSansExd-UltIt",
                  fontSize: "clamp(22px, 4.2vw, 65.48px)",
                  lineHeight: "89%",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: flavour.color,
                  whiteSpace: "nowrap",
                }}
              >
                {flavour.title}
              </h1>

              <p
                className="
                  mt-[clamp(7px,1.25vw,18px)]
                  w-full
                  max-w-[520px]
                  font-sf
                  text-[clamp(11px,1.15vw,18.15px)]
                  font-[510]
                  leading-[1.3]
                "
              >
                {flavour.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-[clamp(14px,3.5vw,55px)]">
            <div
              className="mb-[clamp(6px,1.35vw,23px)] uppercase"
              style={{
                fontFamily: "TacticSansExd",
                fontSize: "clamp(14px, 2.15vw, 30.27px)",
                lineHeight: "89%",
                fontWeight: 400,
                fontStyle: "normal",
                textTransform: "uppercase",
                background:
                  "linear-gradient(90.24deg, #A5A5A5 0%, #FFFFFF 46.06%, #878787 99.79%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FLAVOURS
            </div>

            <div className="flex flex-col gap-[clamp(6px,0.85vw,13px)]">
              {flavours.map((item, index) => {
                const isActive = activeFlavour === index;
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => selectFlavour(index)}
                    onMouseEnter={() => setHoveredFlavour(index)}
                    onMouseLeave={() => setHoveredFlavour(null)}
                    className="
                      w-full
                      max-w-full
                      self-start
                      cursor-pointer
                      text-left
                      uppercase
                      outline-none
                      touch-manipulation
                    "
                    style={{
                      fontFamily: "TacticSansExd-UltIt",
                      fontSize: "clamp(13px, 2.6vw, 26.73px)",
                      lineHeight: "75%",
                      fontWeight: 400,
                      fontStyle: "italic",
                      textTransform: "uppercase",
                      color: isActive ? item.color : "#8B8B8B",
                      WebkitTextStroke: "0.7px currentColor",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="
            pointer-events-auto
            absolute
            left-[50%]
            top-0
            z-20
            h-full
            w-[42vw]
            -translate-x-1/2
            md:left-[53%]
            md:w-[clamp(300px,38vw,500px)]
            lg:left-[54%]
            lg:w-[clamp(400px,36vw,600px)]
            xl:left-[54%]
            xl:w-[clamp(500px,35vw,680px)]
            2xl:left-[54%]
            2xl:w-[clamp(560px,34vw,760px)]
            
            
          "
        >

      <AnimatePresence mode="wait">
  <motion.div
    key={flavour.splashImage}
    variants={splashVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="
      pointer-events-none
      absolute
      left-1/2

      top-[58%]
      h-[280px]
      w-[280px]

      sm:top-[clamp(275px,40vh,390px)]
      sm:h-[clamp(260px,32vw,380px)]
      sm:w-[clamp(260px,32vw,380px)]

      md:!top-[calc(clamp(330px,44vh,470px)_-_45px)]
      md:-mt-5
      md:h-[clamp(380px,35vw,450px)]
      md:w-[clamp(380px,35vw,450px)]

      lg:top-[44%]
      lg:h-[clamp(450px,34vw,550px)]
      lg:w-[clamp(450px,34vw,550px)]

      xl:top-[44%]
      xl:h-[clamp(520px,32vw,620px)]
      xl:w-[clamp(520px,32vw,620px)]

      2xl:h-[clamp(580px,31vw,720px)]
      2xl:w-[clamp(580px,31vw,720px)]

      min-[2560px]:!translate-y-[calc(-50%-50px)]

      z-10
      flex
      -translate-x-1/2
      -translate-y-1/2
      items-center
      justify-center
    "
  >
    <Image
      src={flavour.splashImage}
      alt=""
      width={800}
      height={800}
      priority
      className="h-full w-full object-contain rotate-[3deg]"
    />
  </motion.div>
</AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={flavour.name}
              variants={productVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="
                absolute
                left-1/2
                sm:top-[clamp(125px,14vh,155px)]
                md:top-[clamp(105px,13vh,155px)]
                lg:top-[clamp(115px,13vh,175px)]
                xl:top-[clamp(125px,13vh,190px)]
                z-30
                -translate-x-1/2
                min-[2560px]:!translate-y-[60px]
              "
            >
              <Image
                src="/images/powoe2.png"
                alt="Power Rush"
                width={300}
                height={520}
                priority
               className="
  h-auto
  object-contain
  rotate-[7deg]
  sm:w-[clamp(100px,12vw,135px)]
  md:w-[clamp(125px,12vw,150px)]
  lg:w-[clamp(145px,12vw,175px)]
  xl:w-[clamp(165px,11vw,190px)]
  2xl:w-[clamp(180px,10vw,215px)]
  min-[2560px]:max-[2561px]:!w-[230px]
min-[2560px]:max-[2561px]:!translate-y-[10px]
"
              />
            </motion.div>
          </AnimatePresence>

        
          <div
  className="
    pointer-events-none
    absolute
    bottom-0
    left-1/2
    z-20
    -translate-x-1/2

    sm:w-[clamp(250px,31vw,330px)]
    sm:translate-y-0

    md:w-[clamp(300px,30vw,390px)]
  min-[768px]:max-[1023px]:!-translate-y-[200px]

    lg:w-[clamp(360px,29vw,460px)]
     min-[1024px]:max-[1439px]:!-translate-y-[100px]

    xl:w-[clamp(430px,28vw,520px)]

    2xl:w-[clamp(480px,27vw,600px)]
min-[2560px]:!-translate-y-[230px]
  min-[2560px]:!w-[650px]"
  style={{
    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, black 62%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.45) 84%, transparent 100%)",
    maskImage:
      "linear-gradient(to bottom, black 0%, black 62%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.45) 84%, transparent 100%)",
  }}
>
  <Image
    src="/images/smallRock.png"
    alt=""
    width={600}
    height={360}
    priority
    className="h-auto w-full object-contain"
  />
         </div>
        </div>

      
        <div
          className="
            absolute
            sm:right-[clamp(28px,5vw,70px)]
            sm:bottom-[clamp(35px,7vh,80px)]
            sm:z-20
            sm:block
            sm:w-[clamp(280px,36vw,500px)]
            sm:text-right
            md:right-[clamp(35px,5vw,80px)]
            md:top-1/2
            md:bottom-auto
            md:w-[clamp(280px,30vw,430px)]
            md:-translate-y-1/2
            lg:right-[clamp(55px,7vw,110px)]
            lg:w-[clamp(330px,27vw,520px)]
            xl:right-[7%]
            xl:w-[27%]
            2xl:right-[clamp(90px,7vw,150px)]
            2xl:w-[clamp(400px,26vw,560px)]
          "
        >
          <p
            className="
              ml-auto
              w-full
              font-sf
              text-[clamp(14px,1.25vw,18.15px)]
              font-[510]
              leading-[1.25]
              text-right
            "
          >
            Ultra Premium Performance Formula Creatine +
            <br className="hidden lg:block" />
            Caffeine + Taurine designed to support instant
            <br className="hidden lg:block" />
            power, strength, energy, and mental focus.
          </p>
        </div>
      </div>
    </section>
  );
}




