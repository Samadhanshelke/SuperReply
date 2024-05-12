import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import StarImage from "../../../public/home/star.png"

interface HeaderProps {}

export const FiveStar: React.FC<HeaderProps> = ({}) => {
    return (
        <>
            <div className="flex">
                <Image src={StarImage} alt="" height={15} width={15}></Image>
                <Image src={StarImage} alt="" height={15} width={15}></Image>
                <Image src={StarImage} alt="" height={15} width={15}></Image>
                <Image src={StarImage} alt="" height={15} width={15}></Image>
                <Image src={StarImage} alt="" height={15} width={15}></Image>
            </div>
        </>
    );
};
