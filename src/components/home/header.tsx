"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../../public/home/logo-1.svg";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const [navVis, setNavVis] = useState(false);
    const handleNavVis = () => {
        setNavVis(!navVis);
    };
    return (
        <>
            <header className="fixed left-0 right-0 top-0 z-50 flex w-full justify-between bg-white px-4 py-8 md:py-6 md:px-20 lg:px-32">
                {navVis && (
                    <div className="absolute md:hidden left-0 top-0 z-10 h-[100vh] w-full bg-white p-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-between gap-2">
                                <div className="h-7 w-7 flex-shrink-0 md:h-8 md:w-8">
                                    <Image
                                        className="h-full w-full rounded-full"
                                        src={Logo}
                                        alt=""
                                    />
                                </div>
                                <span className="font-sharp-grotesk text-xl font-extrabold  md:text-2xl">
                                    SuperReply
                                </span>
                            </div>
                            <div>
                                <button onClick={handleNavVis}>
                                    <IoClose
                                        size={40}
                                        className="mx-3 text-primary"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="m-4">
                            <nav className="w-full">
                                <ul className="flex flex-col w-full items-center justify-center pt-[80px] gap-4 font-space-grotesk">
                                    <div className="border-b-2 w-full"></div>
                                    <li className="">
                                        <Button
                                            asChild
                                            variant={"ghost"}
                                            size={"sm"}
                                            className="rounded-full"
                                        >
                                            <Link href={"#"} className="text-xl">Pricing</Link>
                                        </Button>
                                    </li>
                                    <div className="border-b-2 w-full"></div>
                                    <li>
                                        <Button
                                            asChild
                                            size={"sm"}
                                            variant={"ghost"}
                                            className="rounded-full border-primary"
                                        >
                                            <Link href={"#"} className="text-xl">Get Demo</Link>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            asChild
                                            size={"sm"}
                                            className="rounded-full"
                                        >
                                            <Link href={"/signin"}>Get Started</Link>
                                        </Button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
                <div className="flex items-center justify-center gap-1">
                    <div className="h-7 w-7 flex-shrink-0 md:h-8 md:w-8">
                        <Image
                            className="h-full w-full rounded-full"
                            src={Logo}
                            alt=""
                        />
                    </div>
                    <span className="font-sharp-grotesk text-xl font-extrabold  md:text-2xl">
                        SuperReply
                    </span>
                </div>
                <div className="flex items-center justify-center md:hidden">
                    <button onClick={handleNavVis}>
                        <GiHamburgerMenu
                            size={30}
                            className="mx-2 text-primary"
                        />
                    </button>
                </div>
                <nav className="hidden items-center md:flex">
                    <ul className="flex gap-3 font-space-grotesk">
                        <li>
                            <Button
                                asChild
                                variant={"ghost"}
                                size={"lg"}
                                className="rounded-full text-lg font-semibold hover:bg-white "
                            >
                                <Link href={"#"}>Pricing</Link>
                            </Button>
                        </li>
                        <li>
                            <Button
                                asChild
                                size={"lg"}
                                variant={"outline"}
                                className="rounded-full border-primary border-2 text-lg font-semibold"
                            >
                                <Link href={"#"} >Get Demo</Link>
                            </Button>
                        </li>
                        <li>
                            <Button
                                asChild
                                size={"lg"}
                                className="rounded-full text-lg"
                            >
                                <Link href={"/signin"}>Get Started</Link>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
