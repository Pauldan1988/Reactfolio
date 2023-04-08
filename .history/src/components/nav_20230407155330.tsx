import Link from "next/link";
import React from "react";

interface NavLink{
    href:string,
    text:string
}

const navLinks: NavLink[] = [
    {
        href:"/about-me",
        text:"About Me"
    },
    {
        href:"/portfolio",
        text:"Portfolio"
    },
    {
        href:"/contact",
        text:"Contact Me"
    }
]

const Nav: React.FC = function() {
    return (
        <header>
            <nav className="Nav">
                <ul className="flex gap-2 justify-content-right">
                {navLinks.map(navlink => (
                    <li key={navlink.href}>
                        <Link href={navlink.href}>
                            {navlink.text}
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav