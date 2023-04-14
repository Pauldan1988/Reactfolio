import Image from "next/image"
import Link from "next/link"

interface Props {
    picture:string
    href:string
    title:string
    description:string
}

export default function ProjectCard({picture, href, description, title}: Props) {
    return(
        <Link href={href}>
            <div className="flex-col">
                <Image
                    src={picture}
                    alt="Project pictures"
                    width="500"
                    height="500"
                    />
                    <h2>{title}</h2>
                    <p>{description}</p>           
            </div>
        </Link>
    )
}