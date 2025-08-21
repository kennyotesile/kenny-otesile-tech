import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ExternalLink({ href, children, className }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex gap-1 ${className}`}
        >
            {children}
            <ArrowUpRight className="h-[1em] w-[1em]" />
        </Link>
    );
};