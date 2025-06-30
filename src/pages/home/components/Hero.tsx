import { HeroParallax } from "../../../components/ui/hero-parallax";


export function Hero() {
    return (
        <>
            <HeroParallax products={products} />
        </>
    )
}


export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
            "3.jpeg",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            "4.jpeg",
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
            "5.jpeg",
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            "6.jpeg",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            "7.jpeg",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "8.jpeg",
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "9.jpeg",
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            "10.jpeg",
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "11.jpeg",
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "12.jpeg",
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "13.jpeg",
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            "14.jpeg",
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "15.jpeg",
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "16.jpeg",
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "17.jpeg",
    },
];

// const Hero = () => {
//     return (
//         <>

//         </>
//     )
// }

export default Hero