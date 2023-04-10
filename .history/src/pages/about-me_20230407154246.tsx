import AboutSection from "@/components/about-section";
import Layout from "@/components/layout";
import Head from "next/head";

const aboutSections = [
    {
      heading: 'Restaurant Job',
      paragraphs: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nemo architecto quas fuga velit optio voluptatibus excepturi iusto rerum, numquam deserunt similique a? Doloremque unde, velit excepturi quas delectus magnam.',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nemo architecto quas fuga velit optio voluptatibus excepturi iusto rerum, numquam deserunt similique a? Doloremque unde, velit excepturi quas delectus magnam.',
        'Lorem ipsum dolor, sit amet consectetur ptatibus excepturi iusto rerum, numquam deserunt similique a? Doloremque unde, velit excepturi quas delectus magnam.'
      ]
    }, {
      heading: 'UCF Bootcamp',
      paragraphs: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nemo architecto quas fuga velit optio voluptatibus excepturi iusto rerum, numquam deserunt similique a? Doloremque unde, velit excepturi quas delectus magnam.',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nemo architecto quas fuga velit optio voluptatibus excepturi iusto rerum, numquam deserunt similique a? Doloremque unde, velit excepturi quas delectus magnam.',
        'Lorem ipsum dolor, sit amet consectetur ptatibus excepturi iusto rerum, numquam deserunt similique a? Doloremque unde, velit excepturi quas delectus magnam.'
      ]
    }
  ]



export default function AboutMe() {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <Layout>
                <h1>About Me</h1>
                {aboutSections.map(aboutSection => <AboutSection )}
            </Layout>
        </>
    )
}