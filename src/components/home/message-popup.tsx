import Image from "next/image";

interface MessagePopupProps {
    avatar: any;
    message: string;
    position1: string,
    position2: string
}

export const MessagePopup: React.FC<MessagePopupProps> = ({
    avatar,
    message,
    position1,
    position2
}) => {
    return (
        <>
            <div>
                <div className="relative  group transition duration-100 md:hover:filter-none">
                    <div className="h-14 w-14 md:h-20 md:w-20 opacity-50 md:grayscale md:filter md:group-hover:filter-none md:group-hover:opacity-100 duration-100">
                    <Image
                        src={avatar}
                        alt=""
                        // height={80}
                        // width={80}
                        className="rounded-full w-full h-full "
                    ></Image></div>
                    <div className={`absolute filter-none opacity-100 ${position1} ${position2} w-[150px] md:w-[220px]`}>
                    <span className="hidden md:inline-block rounded-full text-sm md:text-md bg-[#F1F1EF] p-1 px-2 md:p-2 md:px-4">
                        {message}
                    </span>
                    <span className="md:hidden rounded-full text-sm md:text-md bg-[#F1F1EF] p-1 px-2 md:p-2 md:px-4">
                        <span className="opacity-50">{message}</span>
                    </span>
                    </div>
                </div>
            </div>
        </>
    );
};
