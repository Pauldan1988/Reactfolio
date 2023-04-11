import Link from "next/link";
import React from "react";

interface PortLinks{
    image:string,
    href:string,
    text:string
    
}

const projectPics: PortLinks[] = [
    {
        image:"/astromusic.png",
        href:"https://astro-div.github.io/Astro-Music/",
        text:"Astro Music"
    },
    {
        image:"/README.png",
        href:"https://github.com/Pauldan1988/readme_generator",
        text:"README Generator"
    },
    {
        image:"ecommerce.png",
        href:"https://github.com/Pauldan1988/Ecommerce_BE",
        text:"E-commerce Backend"
    },
    {
        image:"/notetaker.png",
        href:"https://github.com/Pauldan1988/note_taker",
        text:"Note Taker"
    },
    {
        image:"/flicktracker",
        href:"https://flick-tracker.herokuapp.com/",
        text:"Flick Tracker"
    }
]

const Port: React.FC = function() {
    return (
        <header>
            <nav className="Port">
                <ul className="flex-col">
                    {projectPics.map(projectPics => (
                        <Link href={projectPics}>
                            
                        </Link>
                    ))}
                </ul>
            </nav>
        </header>
    )
}