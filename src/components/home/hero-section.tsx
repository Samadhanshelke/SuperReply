import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "./section-container";
import Image from "next/image";
import InstagramImage from "../../../public/home/insta.png";
import Avatar0 from "../../../public/home/hero-section-avatar-0.png";
import Avatar1 from "../../../public/home/hero-section-avatar-1.png";
import Avatar2 from "../../../public/home/hero-section-avatar-2.png";
import Avatar3 from "../../../public/home/hero-section-avatar-3.png";
import Avatar4 from "../../../public/home/hero-section-avatar-4.png";
import Avatar5 from "../../../public/home/hero-section-avatar-5.png";
import MetaLogo from "../../../public/home/Meta.svg";
import { AvatarStack } from "./avatar-stack";
import { FiveStar } from "./five-star";
import { MessagePopup } from "./message-popup";

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = ({}) => {
    return (
        <>
            <section className="pt-4 md:pt-16">
                <SectionContainer className="relative">
                    <div className="absolute right-[80%] top-[50px] hidden md:block">
                        <MessagePopup
                            avatar={Avatar0}
                            message="Can I get this recipe?"
                            position1="-top-3"
                            position2="left-[35px]"
                        />
                    </div>
                    <div className="absolute right-[20%] top-[50px] hidden md:block">
                        <MessagePopup
                            avatar={Avatar3}
                            message="How do I order this?"
                            position1="-top-3"
                            position2="-right-[30px]"
                        />
                    </div>
                    <div className="absolute right-[90%] top-[40%] hidden md:block">
                        <MessagePopup
                            avatar={Avatar1}
                            message="Price please?"
                            position1="-top-3"
                            position2="left-[35px]"
                        />
                    </div>
                    <div className="absolute top-[40%] hidden md:right-[5%] md:block">
                        <MessagePopup
                            avatar={Avatar4}
                            message="Can I get a sample?"
                            position1="-top-3"
                            position2="-right-[30px]"
                        />
                    </div>
                    <div className="absolute bottom-[100px] right-[80%] hidden md:block">
                        <MessagePopup
                            avatar={Avatar2}
                            message="This jacket looks lit🔥"
                            position1="-bottom-3"
                            position2="left-[35px]"
                        />
                    </div>
                    <div className="absolute bottom-[100px] left-[75%] hidden md:right-[20%] md:block">
                        <MessagePopup
                            avatar={Avatar5}
                            message="Looks Interesting❤️❤️"
                            position1="-bottom-3"
                            position2="-right-[30px]"
                        />
                    </div>

                    <div className="absolute right-[80%] top-[30px] block md:hidden">
                        <MessagePopup
                            avatar={Avatar1}
                            message="Price please?"
                            position1="-bottom-3"
                            position2="left-[25px]"
                        />
                    </div>
                    <div className="absolute bottom-[20px] right-[80%] block md:hidden">
                        <MessagePopup
                            avatar={Avatar2}
                            message="This jacket looks🔥"
                            position1="-bottom-3"
                            position2="left-[25px]"
                        />
                    </div>
                    <div className="absolute left-[80%] top-[10px] block md:hidden">
                        <MessagePopup
                            avatar={Avatar3}
                            message="How do I order this?"
                            position1="-bottom-3"
                            position2="right-[20px]"
                        />
                    </div>
                    <div className="absolute bottom-[20px] left-[80%] block md:hidden">
                        <MessagePopup
                            avatar={Avatar4}
                            message="Can I get a sample?"
                            position1="-top-3"
                            position2="right-[20px]"
                        />
                    </div>

                    <div className="py-10 text-center md:px-10">
                        <div className="flex items-center justify-center gap-2 md:translate-y-[7px] md:gap-4">
                            <h1 className="font-sharp-grotesk text-3xl font-semibold sm:text-3xl md:text-5xl lg:text-6xl">
                                Turn your
                                {/* <GradientText text="Instagram" /> */}
                            </h1>
                            <Image
                                src={InstagramImage}
                                alt="Instagram"
                                height={90}
                                width={315}
                                className="hidden md:flex"
                            />
                            <Image
                                src={InstagramImage}
                                alt="Instagram"
                                height={50}
                                width={175}
                                className="flex md:hidden"
                            />
                        </div>
                        <span className="font-sharp-grotesk text-3xl font-semibold sm:text-3xl md:text-5xl lg:text-6xl">
                            engagement into
                        </span>{" "}
                        <br className="md:hidden" />
                        <span className="font-sharp-grotesk text-3xl font-semibold text-black sm:text-3xl md:text-5xl lg:text-6xl">
                            {" $$$"}
                        </span>
                        <h2 className="text-md mx-5 my-5 font-sf-pro-display font-normal md:mx-0 md:mb-10 md:text-2xl">
                            Convert every interaction into{" "}
                            <br className="block md:hidden" /> sales of leads
                            with <br className="hidden md:block" />
                            100% <br className="block md:hidden" /> automated IG
                            workflows.
                        </h2>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <Button
                                asChild
                                size={"lg"}
                                className="rounded-full px-16 py-8 font-space-grotesk text-3xl"
                            >
                                <Link href={"/signin"}>Get Started</Link>
                            </Button>
                            <Image
                                className="flex items-center justify-center"
                                alt=""
                                width={123}
                                height={45}
                                src={MetaLogo}
                                unoptimized
                            ></Image>
                            <div className="flex items-center justify-center gap-2 pb-2 md:gap-3">
                                <AvatarStack />
                                <div>
                                    <FiveStar />
                                    <div className="font-space-grotesk text-xs">
                                        100+ Brands & Creators
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </>
    );
};
