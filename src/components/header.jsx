"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header({
    theme,
    ...props
}) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const navItems = [
        {
            label: "RESEARCH",
            href: "/research",
        },
        {
            label: "FELLOWSHIP",
            href: "/fellowship",
        },
        {
            label: "CAREERS",
            href: "/careers",
        },
        {
            label: "NEWS",
            href: "/news",
        },
    ];

    const pathname = usePathname();

    useEffect(() => {
        setShowMobileMenu(false);
    }, [pathname]);

    return (
        <>
            <header className={`${theme == "dark" && "dark"} bg-background text-foreground flex relative justify-between items-center h-20 px-6 sm:px-8 md:px-12 xl:px-16`} {...props}>
                {/* Logo */}
                <Link href="/">
                    <Image src={`${theme == "dark" ? "/kenny-otesile-logo-white.svg" : "/kenny-otesile-logo.svg"}`} width={122} height={63} className="relative z-1 w-20" alt="Kenny Otesile logo" />
                </Link>
                <nav className="flex absolute inset-x-0 px-6 justify-end md:justify-center">
                    <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setShowMobileMenu(true)}>
                        <Menu />
                    </Button>
                    <ul className="hidden md:flex gap-x-2">
                        {navItems.map((item, i) => <li key={i}>
                            <Button asChild variant="ghost">
                                <Link href={item.href}>{item.label}</Link>
                            </Button>
                        </li>)}
                    </ul>
                </nav>
                <Button asChild className="relative z-1 bg-[#0052FF] text-white border border-transparent hover:bg-transparent hover:border-[#0052FF] hover:text-[#0052FF] mr-12 md:mr-0">
                    <Link href="/contact">CONTACT</Link>
                </Button>
            </header>
            <AnimatePresence>
                {showMobileMenu ? <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="md:hidden absolute z-999 inset-0 bg-white w-screen h-screen">
                    <div className="flex relative justify-between items-center h-20 px-6 sm:px-8 md:px-12 xl:px-16 border-b border-b-[1px] border-b-gray-200">
                        {/* Logo */}
                        <Link href="/">
                            <Image src="/kenny-otesile-logo.svg" width={122} height={63} className="relative z-1 w-20" alt="Kenny Otesile logo" />
                        </Link>
                        <div className="flex gap-2">
                            <Button asChild className="relative z-1 bg-[#0052FF] text-white border border-transparent hover:bg-transparent hover:border-[#0052FF] hover:text-[#0052FF]">
                                <Link href="/contact">CONTACT</Link>
                            </Button>
                            <Button size="icon" variant="ghost" onClick={() => setShowMobileMenu(false)}>
                                <X />
                            </Button>
                        </div>
                    </div>
                    <nav>
                        <ul className="flex flex-col">
                            {navItems.map((item, i) => <li key={i} className="border-b border-b-[1px] border-b-gray-200">
                                <Button asChild variant="ghost" className="p-5 h-auto w-full justify-start">
                                    <Link href={item.href}>{item.label}</Link>
                                </Button>
                            </li>)}
                        </ul>
                    </nav>
                </motion.header> : null}
            </AnimatePresence>
        </>
    );
}