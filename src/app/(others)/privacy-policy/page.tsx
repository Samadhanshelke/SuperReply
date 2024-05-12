import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import Breadcrumb from "@/components/Common/Breadcrumb";

interface PrivacyPolicyPageProps { }

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ }) => {
    return (
        <>
            <Breadcrumb
                pageName="Privacy Policy"
                description="Last updated on 2024-03-16"
            />
            <PrivacyPolicy />
        </>
    );
};
export default PrivacyPolicyPage;
