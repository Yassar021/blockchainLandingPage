import { Box } from "@chakra-ui/react"
import Head from "next/head"
import About from "../components/about"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Values from "../components/values"

const Index = () => {
  return(
    <>
      <Head>
        <title>Excursy</title>
      </Head>

      <Box px={{base:'16px',md:'40px',lg:'60px',xl:'120px','2xl':'120px'}} >
        <Hero />
        <About />
        <Values />
        <Projects />
      </Box>

      <Footer />
    </>
  )
}

export default Index