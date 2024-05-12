"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { SectionContainer } from "./section-container";
import { useEffect, useState } from "react";

interface CalculatorSectionProps { }

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ }) => {
  const [numberofComments, setNumberofComments] = useState(100);
  const [avo, setAvo] = useState(40);

  const handleNumberOfCommentsChange = (value: number[]) => {
    if (value.length > 0) {
      setNumberofComments(value[0]);
    }
  };
  const handleAvoChange = (value: number[]) => {
    if (value.length > 0) {
      setAvo(value[0]);
      console.log(value[0])
    }
  };

  return (
    <section className=" w-full px-6 bg-black  text-center font-bold ">
      <SectionContainer>
        <h2 className="font-sharp-grotesk mb-12 text-3xl font-semibold text-white md:mb-20 lg:text-4xl">
          Convert every <br className="block md:hidden" /> interaction into
          <br className="" />
          sales opportunity
        </h2>
        <div className="mx-4 my-5 flex flex-col items-stretch gap-5 sm sm:gap-10 md:mx-0 md:my-14 md:flex-row md:gap-20">
          <Card className=" flex-1 rounded-xl md:rounded-3xl border-none bg-gradient-to-l from-[#E11C93] to-[#F0D9CA]">
            <div className="m-[3px] md:py-6 md:px-4 rounded-xl md:rounded-3xl bg-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-sf-pro-display md:text-2xl">
                  Comments per post
                </CardTitle>
                <div className="w-[100px] rounded-lg bg-gradient-to-l from-[#E11C93] to-[#F0D9CA] p-[3px] md:w-36">
                  <input
                    // disabled={true}
                    className="h-full w-full md:text-2xl rounded-[calc(1rem-0.6rem)] border-none bg-white p-1 pr-3 text-right font-sharp-grotesk font-medium outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={numberofComments}
                    onChange={(e) => setNumberofComments(e.target.value ? parseInt(e.target.value) : 0)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Slider
                  value={[Math.min(500, Math.max(50, numberofComments - (numberofComments % 50) + (numberofComments % 50 ? 50 : 0)))]}
                  onValueChange={handleNumberOfCommentsChange}
                  max={500}
                  min={50}
                  step={50}
                />
              </CardContent>
              <CardFooter />
            </div>
          </Card>
          <Card className=" flex-1 rounded-xl md:rounded-3xl border-none bg-gradient-to-l from-[#E11C93] to-[#F0D9CA]">
            <div className="m-[3px] md:py-6 md:px-4 rounded-xl md:rounded-3xl bg-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg md:text-2xl font-sf-pro-display">
                  Average Order Value
                </CardTitle>
                <div className="relative w-[100px] rounded-lg bg-gradient-to-l from-[#E11C93] to-[#F0D9CA] p-[3px] md:w-36">
                  <span className="absolute left-4 top-[15%] font-sharp-grotesk text-xl md:text-2xl font-medium">
                    $
                  </span>
                  <input
                    className="h-full md:text-2xl w-full rounded-[calc(1rem-0.6rem)] border-none bg-white p-1 pr-3 text-right font-sharp-grotesk font-medium outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={avo}
                    onChange={(e) => setAvo(e.target.value ? parseInt(e.target.value) : 0)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Slider
                  value={[Math.min(200, Math.max(20, avo - (avo % 20) + (avo % 20 ? 20 : 0)))]}
                  onValueChange={handleAvoChange}
                  max={200}
                  min={20}
                  step={20}
                />
              </CardContent>
              <CardFooter />
            </div>
          </Card>
        </div>
        <div className="mx-5 rounded-3xl border-none bg-gradient-to-l from-[#E11C93] to-[#F0D9CA] p-[3px] md:mx-0">
          <Card className="rounded-3xl md:px-6 md:py-3">
            <CardHeader className="flex items-center sm:flex-row sm:justify-between">
              <div className="flex items-center gap-5 md:flex-col md:items-start">
                <CardTitle className="text-center font-sharp-grotesk text-2xl font-bold sm:text-3xl md:text-left md:text-4xl">
                  Opportunity Per Post
                </CardTitle>
                <span className="text-md hidden font-sf-pro-display font-normal md:block">
                  {" "}
                  *Min. Channel Engagement rate = 1% and Min.
                  Audience = 100k
                </span>
              </div>
              <div className="relative w-[100%] rounded-lg bg-gradient-to-l from-[#E11C93] to-[#F0D9CA] p-[3px] md:w-[35%]">
                <span className="absolute left-4 top-[20%] font-sharp-grotesk text-3xl font-medium md:top-[25%] md:text-5xl">
                  $
                </span>
                <input
                  readOnly
                  className="h-full w-full rounded-[calc(1rem-0.6rem)] border-none bg-white p-2 text-right font-sharp-grotesk text-3xl font-medium outline-none focus-visible:ring-0 focus-visible:ring-offset-0 md:p-4 md:text-5xl"
                  value={numberofComments * avo * 0.05}
                />
              </div>
            </CardHeader>
          </Card>
        </div>
      </SectionContainer>
    </section>
  );
};
