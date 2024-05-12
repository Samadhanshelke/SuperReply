import Link from "next/link";
import { SectionContainer } from "./section-container";
import { Globe } from "lucide-react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import Image from "next/image";

interface FooterSectionProps {}

export const FooterSection: React.FC<FooterSectionProps> = ({}) => {
    return (
        <>
            <section className="bg-black text-white">
                <SectionContainer className="px-10 py-10 md:py-10 md:px-0">
                    <div className="flex flex-wrap items-center justify-between gap-10 pb-10 pt-10 md:flex-row md:items-start md:justify-between">
                        <div className="flex w-full items-center justify-between pt-4 md:w-auto md:pt-0">
                            <div className="flex items-center justify-center gap-2 md:gap-1">
                                <div className="h-8 w-8 md:h-11 md:w-11">
                                    <Image
                                        alt="LOGO"
                                        src={"/home/logo-1.svg"}
                                        className="h-full w-full rounded-full "
                                        height={20}
                                        width={20}
                                    ></Image>
                                </div>
                                <span className="font-sharp-grotesk text-lg font-extrabold md:text-4xl">
                                    SuperReply
                                </span>
                            </div>
                            <div className="inline-item flex gap-5 items-center justify-center md:hidden">
                                <AiFillLinkedin size={30} />
                                <AiFillInstagram size={30} />
                            </div>
                        </div>
                        <div className="">
                            <span className="font-medium text-gray-400">
                                PRODUCT
                            </span>
                            <ul className="mt-5 space-y-1 text-sm">
                                <li>Features</li>
                                <li>Security</li>
                                <li>Testimonials</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="font-medium text-gray-400">
                                RESOURCES
                            </div>
                            <ul className="mt-5 space-y-1 text-sm">
                                <li>FAQ</li>
                                <li>About Us</li>
                                <li>Account Delete</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="hidden gap-5 md:flex">
                            <AiFillLinkedin size={30} />
                            <AiFillInstagram size={30} />
                        </div>
                    </div>
                    <div className="mt-20 flex flex-col items-center justify-between gap-5 font-space-grotesk md:flex-row">
                        <div className="hidden flex-1 flex-grow items-center gap-2 md:flex">
                            <Globe size={24} />
                            <span>English</span>
                        </div>
                        <div className="flex flex-1 flex-grow items-center justify-center gap-2">
                            <span>@2024 SocialSaas</span>
                        </div>
                        <div className="flex flex-1 flex-grow flex-col items-center justify-end gap-4 md:flex-row">
                            <Link
                                href={"/privacy-policy"}
                                className="hover:underline"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href={"/terms-of-service"}
                                className="hover:underline"
                            >
                                Terms Of Service
                            </Link>
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </>
    );
};
