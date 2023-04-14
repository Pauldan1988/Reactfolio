import Projects from "@/components/project-card";
import Link from "next/link";
import React from "react";

interface PortLinks {
    picture: string,
    href: string,
    description: string

}

const projectPics: PortLinks[] = [
    {
        picture: "/astromusic.png",
        href: "https://astro-div.github.io/Astro-Music/",
        description: "Astro Music"
    },
    {
        picture: "/README.png",
        href: "https://github.com/Pauldan1988/readme_generator",
        description: "README Generator"
    },
    {
        picture: "ecommerce.png",
        href: "https://github.com/Pauldan1988/Ecommerce_BE",
        description: "E-commerce Backend"
    },
    {
        picture: "/notetaker.png",
        href: "https://github.com/Pauldan1988/note_taker",
        description: "Note Taker"
    },
    {
        picture: "/flicktracker",
        href: "https://flick-tracker.herokuapp.com/",
        description: "Flick Tracker"
    }
]

export default function Project() {
    return (
        <header>
            <nav className="Project">
                <ul className="flex-col">
                    {projectPics.map(projectPics =>
                        <Link>
                        <Projects
                            href={projectPics.href}
                            description={projectPics.description}
                            picture={projectPics.picture}
                        />)}
                        </Link>
                </ul>
            </nav>
        </header>
    )
}
