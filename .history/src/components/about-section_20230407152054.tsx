interface Props {
    heading: string
    paragraphs: string[]
}


export default function AboutSection({heading, paragraphs}: Props) {
    return (
        <div>
            <h2>{heading}</h2>
            <p></p>
        </div>
    )
}