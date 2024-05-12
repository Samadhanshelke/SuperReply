import { Inter, Space_Grotesk  } from "next/font/google";
import localFont from "next/font/local";

export const sharpGrotesk = localFont({
    src: [
        {
            path: "../assets/fonts/sharp-grotesk/semibold-25.otf",
            weight: "600",
            style: "semibold",
        },
        {
            path: "../assets/fonts/sharp-grotesk/semibold-italic-20.otf",
            // weight: "600",
            style: "semibold italic",
        },
        {
            path: "../assets/fonts/sharp-grotesk/medium-25.otf",
            weight: "500",
            style: "medium",
        },
    ],
    variable: "--font-sharp-grotesk",
});

export const sfProDisplay = localFont({
    src: [
        {
            path: "../assets/fonts/pro/SF-Pro-Display-Semibold.otf",
            weight: "600",
            style: "semibold",
        },
        {
            path: "../assets/fonts/pro/SF-Pro-Display-SemiboldItalic.otf",
            // weight: "600",
            style: "semibold italic",
        },
        {
            path: "../assets/fonts/pro/SF-Pro-Display-Medium.otf",
            weight: "500",
            style: "medium",
        },
        {
            path: "../assets/fonts/pro/SF-Pro-Display-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/pro/SF-Pro-Display-Thin.otf",
            weight: "100",
            style: "thin",
        },
    ],
    variable: "--font-sf-pro-display",
});

export const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-space-grotesk",
});

export const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-inter",
});
