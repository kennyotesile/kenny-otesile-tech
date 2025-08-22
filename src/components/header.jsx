import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Header({
    theme,
    ...props
}) {
    return (
        <header className={`${theme == "dark" && "dark"} bg-background text-foreground flex relative justify-between items-center h-20 px-6 sm:px-8 md:px-12 xl:px-16`} {...props}>
            {/* Logo */}
            <Link href="/">
                <Image src={`${theme == "dark" ? "/kenny-otesile-logo-white.svg" : "/kenny-otesile-logo.svg"}`} width={122} height={63} className="relative z-1 w-20" alt="Kenny Otesile logo" />
            </Link>
            <nav className="flex absolute inset-x-0 px-6 justify-end md:justify-center">
                <Button size="icon" variant="ghost" className="md:hidden ">
                    <Menu />
                </Button>
                <ul className="hidden md:flex gap-x-2">
                    <li>
                        <Button asChild variant="ghost">
                            <Link href="/research">RESEARCH</Link>
                        </Button>
                    </li>
                    <li>
                        <Button asChild variant="ghost">
                            <Link href="/fellowship">FELLOWSHIP</Link>
                        </Button>
                    </li>
                    <li>
                        <Button asChild variant="ghost">
                            <Link href="/careers">CAREERS</Link>
                        </Button>
                    </li>
                    <li>
                        <Button asChild variant="ghost">
                            <Link href="/news">NEWS</Link>
                        </Button>
                    </li>
                </ul>
            </nav>
            <Button asChild className="relative z-1 bg-[#0052FF] text-white border border-transparent hover:bg-transparent hover:border-[#0052FF] hover:text-[#0052FF] mr-12 md:mr-0">
                <Link href="/contact">CONTACT</Link>
            </Button>
        </header>
    );
}