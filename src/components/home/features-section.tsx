"use client";
import { cn } from "@/lib/utils";
import { SectionContainer } from "./section-container";
import { GradientText } from "@/components/gradient-text";
import Image from "next/image";
import GifOne from "../../../public/home/feature-1.gif"
import GifTwo from "../../../public/home/feature-2.gif"
import GifThree from "../../../public/home/feature-3.gif"
import Asterik from "../../../public/home/Asterisk.svg"
import HalfCircles from "../../../public/home/halfCircles.svg"
import X from "../../../public/home/X.svg"
import { GiIdCard } from "react-icons/gi";
import { useEffect } from "react";


interface FeaturesSectionProps { }

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ }) => {

   useEffect(() => {
      const gifCards = document.querySelectorAll(".gif-card");

      const observer = new IntersectionObserver(entries => {
         // console.log(entries[0].target);
         console.log("came in fully")

      }, { threshold: 1 });

      // Start observing each .gif-card element
      gifCards.forEach(gifCard => {
         observer.observe(gifCard);
      });

   }, []);
   return (
      <>
         <section className="">
            <SectionContainer>
               <div className="md:space-y-20 md:pt-20 flex flex-col justify-center items-center gap-20">
                  {DATA.map((data, idx) => (
                     <div
                        key={idx}
                        className={cn(
                           "flex flex-col items-center md:mb-0 md:h-[650px] justify-around gap-4 md:gap-6 md:flex-row",
                           idx % 2 != 0 &&
                           "flex-col md:flex-row-reverse",
                        )}
                     >
                        <div className="relative gif-card h-[400px] mb-10 md:mb-20 w-[90%] lg:w-[42%] lg:h-[85%]">
                           <div className={cn("absolute -top-[40px] -left-[34px] md:-top-[60px] md:-left-[57px]", idx % 2 != 0 && "hidden",)}>
                              <Image src={Asterik} className="hidden md:block" alt="" width={280} height={280}></Image>
                              <Image src={Asterik} className="md:hidden block" alt="" width={160} height={160}></Image>
                           </div>
                           <div className={cn("absolute -top-[60px] -left-[0px]", idx % 2 == 0 && "hidden",)}>
                              <Image src={HalfCircles} className="hidden md:block" alt="" width={560} height={280}></Image>
                              <Image src={HalfCircles} className="md:hidden block" alt="" width={400} height={160}></Image>
                           </div>
                           <div className="w-full h-full flex justify-center items-center gradient-primary-faded rounded-[2rem] md:rounded-[calc(5rem)]">
                              <div className="w-auto h-[100%] items-center justify-center">
                                 <Image className="translate-y-8 md:translate-y-16 rounded-3xl md:rounded-[3.4rem] w-full h-full" src={data.source} alt="Description" unoptimized />
                              </div>
                           </div>
                        </div>
                        <div className="w-[80%] md:w-[40%] text-left">
                           <p className="font-sharp-grotesk leading-snug text-[30px] font-semibold text-black md:text-[46px] lg:text-[50px] leading-[115%]">
                              {data.heading}
                           </p>
                           <p className="mt-4 md:mt-8 font-sf-pro-display text-[18px] font-normal md:text-[24px]">{data.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </SectionContainer>
            <SectionContainer className="hidden md:block">
               <div className="flex items-center justify-between gap-10 rounded-[2rem] bg-black md:py-12 md:px-20 text-5xl font-medium text-white md:gap-4">
                  {NUM_DATA.map((item, idx) => (
                     <div
                        key={idx}
                        className="flex flex-col items-center text-center"
                     >
                        <span className="text-7xl font-sharp-grotesk flex relative">
                           {item.num}
                           <span className="absolute bottom-[14%] -right-[25%]">
                              <Image
                                 className="text-5xl font-semibold"
                                 src={X}
                                 alt=""

                              />
                           </span>
                        </span>
                        <br />
                        <span className="font-normal font-sf-pro-display text-2xl -mt-5">
                           {" "}
                           {item.text}
                        </span>
                     </div>
                  ))}
               </div>
            </SectionContainer>
            <div className="md:hidden p-3 gap-5 flex items-center justify-between bg-black text-white">
               {NUM_DATA.map((item, idx) => (
                  <div
                     key={idx}
                     className="flex flex-col justify-around items-center text-center"
                  >
                     <span className="text-3xl font-sharp-grotesk flex relative">
                        {item.num}
                        <span className="absolute bottom-[10%] h-5 w-5 -right-[35%]">
                           <Image
                              className="w-full h-full"
                              src={X}
                              alt=""
                           />
                        </span>
                     </span>
                     <br />
                     <span className="font-normal font-sf-pro-display text-sm md:text-lg -mt-5">
                        {" "}
                        {item.text}
                     </span>
                  </div>
               ))}
            </div>
         </section>
      </>
   );
};

/*
E767A9
F0D9CB
B65CDE
*/

const NUM_DATA: { num: number; text: string }[] = [
   {
      num: 8,
      text: "Conversion Rates",
   },
   {
      num: 10,
      text: "Social Engagement",
   },
   {
      num: 50,
      text: "Faster Addressal of Intent",
   },
];

const DATA: { heading: string; description: string, source: any, topImage: any }[] = [
   {
      heading: "Automate your IG sales funnel",
      description: "Convert every interaction into a sales opportunity with personalised & automated conversations",
      source: GifOne,
      topImage: Asterik
   },
   {
      heading: "Monetise every Inbound Interaction",
      description:
         "Build trust, create a bond with your audience, and add a personal touch to increase engagement, and drive higher conversions.",
      source: GifTwo,
      topImage: HalfCircles
   },
   {
      heading: "Re-engage with users Smartly",
      description:
         "Unlock Community marketing to increase organic reach and increase LTV at the same time",
      source: GifThree,
      topImage: Asterik
   },
];
