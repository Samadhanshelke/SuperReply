import { CalculatorSection } from "@/components/home/calculator-section";
import { FeaturesSection } from "@/components/home/features-section";
import { FooterSection } from "@/components/home/footer-section";
import { GuideSection } from "@/components/home/guide-section";
import { HeroSection } from "@/components/home/hero-section";
import { StepsSection } from "@/components/home/steps-section";
import { Header } from "@/components/home/header";

export interface HomePageProps {}
const HomePage: React.FC<HomePageProps> = ({}) => {
    return (
        <>  
            <Header />
            <div className="h-full w-[100%] pt-20">
                <HeroSection />
                <div className="my-20 snap-start md:my-0">
                    <GuideSection />
                </div>
                <CalculatorSection />
                <FeaturesSection />
                <StepsSection />
                <FooterSection />
            </div>
        </>
    );
};
export default HomePage;
