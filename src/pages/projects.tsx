import Layout from "@/components/layout";
import ProjectCard from "@/components/project-card";
import Link from "next/link";
import React from "react";

interface PortLinks {
    picture: string,
    href: string,
    title:string,
    description: string

}

const projectPics: PortLinks[] = [
    {
        picture: "/astromusic.png",
        href: "https://astro-div.github.io/Astro-Music/",
        title: "Astro Music",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti dolorem quos, nihil voluptate voluptatibus maxime nemo! Debitis, necessitatibus eum."
    },
    {
        picture: "/README.png",
        href: "https://github.com/Pauldan1988/readme_generator",
        title: "README Generator",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti dolorem quos, nihil voluptate voluptatibus maxime nemo! Debitis, necessitatibus eum."
    },
    {
        picture: "/ecommerce.png",
        href: "https://github.com/Pauldan1988/Ecommerce_BE",
        title: "E-commerce Backend",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti dolorem quos, nihil voluptate voluptatibus maxime nemo! Debitis, necessitatibus eum."

    },
    {
        picture: "/notetaker.png",
        href: "https://github.com/Pauldan1988/note_taker",
        title: "Note Taker",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti dolorem quos, nihil voluptate voluptatibus maxime nemo! Debitis, necessitatibus eum."

    },
    {
        picture: "/flicktracker.png",
        href: "https://flick-tracker.herokuapp.com/",
        title: "Flick Tracker",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corrupti dolorem quos, nihil voluptate voluptatibus maxime nemo! Debitis, necessitatibus eum."

    }
]

export default function Project() {
    return (
        <Layout>
                <ul className="flex flex-col gap-2">
                    {projectPics.map(project =>
                        <li>
                            <ProjectCard
                            href={project.href}
                            description={project.description}
                            picture={project.picture}
                            title={project.title}
                            />
                        </li>)}
                </ul>
        </Layout>
    )
}
