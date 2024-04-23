import Intro from '../components/home/Intro.jsx'
import About from '../components/home/About.jsx'
import Skills from "../components/home/Skills.jsx";
import Projects from '../components/home/Projects.jsx'
import Layout from '../components/layouts/Layout.jsx'

export default function Home() {
    return (
    <>
    <Layout>      
        <Intro />
        <About />
        <Skills />
        <Projects />
    </Layout>
    </>   
    )
};