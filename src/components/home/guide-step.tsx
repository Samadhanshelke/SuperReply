import Image from "next/image";
import { GradientText } from "../gradient-text";
import { Button } from "../ui/button";

interface StepsSectionProps {
    stepNum: string, 
    stepName: string, 
    description: string,
    image: any,
    imageOffset:string,
    imageOffsetMobile:string,
    width:number,
    height:number
}

export const GuideStep: React.FC<StepsSectionProps> = ({stepNum, stepName, description, image, imageOffset, imageOffsetMobile, width, height}) => {
    return (
        <>
            <div className="hidden md:flex h-[90vh] w-[100%] p-20 items-center justify-around flex-row">
                    <div className="flex h-[400px] w-[400px] lg:h-[550px] lg:w-[550px] items-center justify-center rounded-full gradient-primary-conic">
                        <div className={`h-[400px] w-[250px] lg:h-[520px] lg:w-auto translate-y-10 rounded-3xl ${imageOffset}`}>
                            <Image src={image} alt="" className="w-full h-full"></Image>
                        </div>
                    </div>
                <div className="flex items-center justify-center">
                    <div className="flex max-w-[600px] flex-col gap-4 md:p-[50px] lg:p-[64px] rounded-[40px] bg-white shadow-[0px_11px_30px_0px_rgba(0,0,0,0.10)]">
                        <div className="font-sharp-grotesk font-semi-bold gap-2 text-3xl lg:text-[40px]">
                            <span>Step </span> <GradientText text={stepNum} />
                            <span> {stepName}</span>
                        </div>
                        <p className="text-md font-sf-pro-display lg:text-2xl font-normal">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex w-[100%] flex-col gap-24 pb-10 mx-5 items-center justify-around">
                    <div className="h-[300px] w-[300px] flex items-center justify-center rounded-full gradient-primary-conic">
                        <div className={` ${imageOffsetMobile} translate-y-[50px] `}>
                            <Image src={image} alt="" className={`rounded-[1.4rem] w-[${width}px] h-[${height}px]`}></Image>
                        </div>
                    </div>
                <div className="flex items-center h-[200px] justify-center">
                    <div className="flex flex-col gap-4 rounded-3xl p-4 shadow-xl">
                        <div className="font-semi-bold gap-2 font-sharp-grotesk text-xl">
                            <GradientText text={"Step "} />
                            <GradientText text={stepNum} />
                            <span> {stepName}</span>
                        </div>
                        <p className="text-sm font-sf-pro-display font-medium">
                            Encourage user comments on your posts &
                            significantly increase your content&apos;s reach. More
                            comments - More reach - More automated
                            conversations.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
