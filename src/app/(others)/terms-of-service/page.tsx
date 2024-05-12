import TermsOfService from "@/components/TermsOfService";
import Breadcrumb from "@/components/Common/Breadcrumb";

interface TermsOfServicePageProps { }

const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ }) => {
    return (
        <>
            <Breadcrumb
                pageName="Terms of Service"
                description="Superreply.ai"
            />
            <TermsOfService />
        </>
    );
};
export default TermsOfServicePage;
