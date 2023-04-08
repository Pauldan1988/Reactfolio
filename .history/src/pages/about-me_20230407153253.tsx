import AboutSection from "@/components/about-section";
import Layout from "@/components/layout";
import Head from "next/head";


export default function AboutMe() {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <Layout>
                <h1>About Me</h1>
                <AboutSection>
                    
                </AboutSection>
            </Layout>
        </>
    )
}