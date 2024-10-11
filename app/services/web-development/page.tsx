import Header from "@/app/component/Header/Header"
import cssStyle from "./skill.module.css"
import Hero from "@/app/component/Hero/Hero"
import Footer from "@/app/component/Footer/footer"

function WebDevelopmentPage() {
  return (
    <div>
      <Header />
      <Hero btn = "Services" heading = "Web Development" />
    <Footer />
    </div>
  )
}

export default WebDevelopmentPage
