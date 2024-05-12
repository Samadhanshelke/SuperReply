import Image from "next/image";
import { SectionContainer } from "./section-container";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { GradientText } from "../gradient-text";
import { Button } from "../ui/button";
import Link from "next/link";
import Growth1 from "../../../public/home/Growth-1.svg"
import Growth2 from "../../../public/home/Growth-2.svg"
import Growth3 from "../../../public/home/Growth-3.svg"
// import StepThree from "../Steps/StepThree";
import One from "../../../public/home/1.svg"
import Two from "../../../public/home/2.svg"
import Three from "../../../public/home/3.svg"

interface StepsSectionProps {}

export const StepsSection: React.FC<StepsSectionProps> = ({}) => {
    return (
        <>
            <section className="snap-start flex flex-col my-10">
                    <div className="font-sharp-grotesk text-center mt-10 md:mt-0 mb-8 text-3xl font-semibold md:text-4xl lg:text-7xl">
                        <h2>Get Started with</h2>
                        <div className="flex gap-2 lg:gap-4 items-center justify-center">
                            <div className="h-10 w-10 md:h-14 md:w-14 lg:w-20 lg:h-20">
                            <Image
                                height={50}
                                width={50}
                                alt="logo"
                                src={"/home/logo-1.svg"}
                                className="h-full w-full rounded-full"
                            /></div>
                            SuperReply
                        </div>
                    </div>

                    <div className="mx-8 mt-5 md:mt-10 md:mx-32 flex flex-col md:flex-row justify-center gap-8">
                        {CARDS_DATA.map((item) => {
                            return (
                                <Card
                                    key={item.num}
                                    className="md:w-[30%] md:px-8 rounded-3xl shadow-2xl border-none"
                                >
                                    <CardHeader className="gap-10">
                                        <CardDescription className="gradient-primary-light mx-auto h-[130px] w-[130px] md:h-38 md:w-38 rounded-full">
                                            <Image src={item.image} alt="" ></Image>
                                        </CardDescription>
                                        <CardTitle className="font-sharp-grotesk text-[34px] flex items-baseline gap-2 font-semibold md:text-[40px]">
                                            Step
                                            <div className="w-33 h-57">
                                                <Image alt="" src={item.number} className=""></Image>
                                            </div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-[22px] font-normal font-sf-pro-display">
                                        {item.text}
                                    </CardContent>
                                    <CardFooter />
                                </Card>
                            );
                        })}
                    </div>
                    <div className="mt-20 mb-10 text-center">
                    <Button
                            asChild
                            size={"lg"}
                            className="md:px-16 md:py-8 font-space-grotesk text-2xl md:text-3xl rounded-full"
                        >
                            <Link href={"/signin"}>Get Started</Link>
                        </Button>
                    </div>
            </section>
        </>
    );
};

const CARDS_DATA = [
    {
        num: 1,
        text: "Connect with SuperReply in less than 2 mins. No tech integration needed.",
        image: Growth1,
        number: One
    },
    {
        num: 2,
        text: "Use 10+ Templates to achieve goals like sales, lead collections, grievance management etc.",
        image: Growth2,
        number: Two
    },
    {
        num: 3,
        text: "See the flywheel running and minting dollars while you sleep.",
        image: Growth3,
        number: Three
    },
];
