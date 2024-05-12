import Image from "next/image";
import Logo from "@/../public/home/logo-1.svg";
import Link from 'next/link';

interface HeaderLiteProps { }

export const HeaderLite: React.FC<HeaderLiteProps> = ({ }) => {
    return (
        <>
            <header className="fixed left-0 right-0 top-0 z-50 flex w-full justify-between bg-white px-4 py-8 md:py-6 md:px-20 lg:px-32">
            <Link href="/">
                <div className="flex items-center justify-center gap-1">
                    <div className="h-7 w-7 flex-shrink-0 md:h-8 md:w-8">
                        <Image
                            className="h-full w-full rounded-full"
                            src={Logo}
                            alt="SuperReply Logo"
                        />
                    </div>
                    <span className="font-sharp-grotesk text-xl font-extrabold  md:text-2xl">
                        SuperReply
                    </span>
                </div>
                </Link>
            </header>
        </>
    );
};
