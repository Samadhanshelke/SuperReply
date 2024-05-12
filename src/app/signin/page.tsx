import { HeaderLite } from '@/components/signin/header-lite';
import LeftBox from '@/components/signin/left-box';
import RightBox from '@/components/signin/right-box';

export interface SignInPageProps { }
const SigninPage: React.FC<SignInPageProps> = ({ }) => {
    return (
        <>
            <div className="h-[100%] w-[100%]">
                <HeaderLite/>
                <div className="flex flex-col md:flex-row h-[90%] items-center justify-center pt-[10%]">
                    <div className="max-w-[614px] max-h-[623px] h-[600px] flex-1 flex justify-center items-center bg-gradient-to-b from-[rgba(166,0,255,0.05)] to-[rgba(255,0,151,0.05)] rounded-[24px] ">
                        <LeftBox />
                    </div>
                    <div className="max-w-[614px] max-h-[623px] h-[600px] flex-1 flex justify-center items-center">
                        <RightBox />
                    </div>
                </div>
            </div>
        </>
    );
};
export default SigninPage;
