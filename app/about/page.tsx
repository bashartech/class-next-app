import Footer from "../component/Footer/footer"
import Header from "../component/Header/Header"
import Hero from "../component/Hero/Hero"
import cssStyle from "./about.module.css" 


export default function About() {
  return (
    <div>
      <Header  />
         <Hero btn = "Services" heading = "About Our Experience Client"/>
    <Footer />
    </div>
  )
}
