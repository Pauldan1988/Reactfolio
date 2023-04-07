type TechList = string[]

interface Technologies {
    frontend: TechList
    backend: TechList
}

const technologies: Technologies = {
    frontend: [
        "React",
        "TailwindCSS"
    ],
    backend: [
        "Node.js",
        "Express.js",
        "GraphQL"
    ]
}

export default function TechList() {
    return (
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur minus a commodi. Animi excepturi minus minima laboriosam accusantium soluta, nam ratione odit officia doloremque modi fuga quas cum velit explicabo?</p>  
        <ul>
            {technologies.frontend.map(tech => <li>{tech}</li>)}
        </ul>
        </div>
    )
} 