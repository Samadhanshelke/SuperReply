import { cn } from "@/lib/utils";

interface GradientTextProps {
    text: any;
    className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
    text,
    className,
}) => {
    return (
        <span
            className={cn(
                "gradient-primary bg-clip-text text-transparent",
                className,
            )}
        >
            {text}
        </span>
    );
};
