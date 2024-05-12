"use client";
import Image from "next/image";
import { SectionContainer } from "./section-container";
import { GradientText } from "../gradient-text";
import { Button } from "../ui/button";
import { GuideStep } from "./guide-step";
import "./home.css";
import Feature1 from "../../../public/home/Feature-1.png"
import Feature2 from "../../../public/home/Feature-2.png"
import Feature3 from "../../../public/home/Feature-3.png"
import { useEffect, useState } from "react";

interface StepsSectionProps {}

export const GuideSection: React.FC<StepsSectionProps> = ({}) => {
    return (
        <>
            <div className="relative flex items-center snap-y snap-mandatory justify-center md:mb-0 mb-5">
                <div className="custom-scrollbar snap-y scroll-smooth snap-mandatory flex md:flex-col items-center justify-around gap-6 mx-2 overflow-x-scroll overflow-y-auto md:h-[80vh] md:mb-10 md:block md:w-[100%] md:overflow-x-auto md:overflow-y-scroll">
                    <div className="snap-center">
                    <GuideStep stepNum={"1 :"} stepName={"Comment"} imageOffset={"-translate-x-4"} imageOffsetMobile={"-translate-x-3"} width={330} height={330} image={Feature1} description={"Encourage user comments on your posts & significantly increase your content's reach. More comments, More reach, More automated conversations."} />
                    </div>
                    <div className="snap-center">
                    <GuideStep stepNum={"2 :"} stepName={"Automated Reply & DM"} imageOffset={"translate-x-4"} imageOffsetMobile={"translate-x-2"} width={330} height={330} image={Feature2} description={"Send a personalised reply to the comment and initiate a DM chat through Superreply Automation."} />
                    </div>
                    <div className="snap-center">
                    <GuideStep stepNum={"3 :"} stepName={"Sales Conversion"} imageOffset={"translate-x-7"} imageOffsetMobile={"translate-x-3 translate-y-[40px]"}  width={200} height={300} image={Feature3} description={"Convert the intent automatically into sales by offering incentives and building urgency in the DM chat. "} />
                    </div>
                </div>
            </div>
        </>
    );
};
