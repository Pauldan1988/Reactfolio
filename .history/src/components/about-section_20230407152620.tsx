interface Props {
    heading: string
    paragraphs: string[]
}


export default function AboutSection({heading, paragraphs}: Props) {
    return (
        <div>
            <h2>{heading}</h2>
            <div>{paragraphs.map(paragraphs => <p>{paragraph}</p>)}
            </div>
        </div>
    )
}