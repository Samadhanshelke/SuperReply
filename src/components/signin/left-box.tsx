import Image from "next/image";
import InstagramImage from "@/../public/home/insta.png";

function LeftBox() {
  return (
    <div>
      <h2 className="text-black font-sharp-grotesk text-[40px] font-semibold leading-[127%] stroke-[0.75px]">Convert your <br />
        <Image
          src={InstagramImage}
          alt="Instagram"
          height={77}
          width={283}
          className="hidden md:flex"
        />
        into a sales <br />channel!</h2>
      <p className="text-black font-sf-pro-display text-[24px] stroke-1">Connect your account to continue</p>
    </div>
  );
}

export default LeftBox;
