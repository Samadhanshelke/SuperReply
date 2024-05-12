import { cn } from "@/lib/utils";

interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
    children,
    className,
}) => {
    return (
        <div
            className={cn(
                "px-2 py-20 sm:px-4 md:px-10 lg:px-20 xl:px-40",
                className,
            )}
        >
            {children}
        </div>
    );
};
