import cssStyle from "./contact.module.css"
import Header from "../component/Header/Header"
import Hero from "../component/Hero/Hero"
import Footer from "../component/Footer/footer"

export default function contact() {
  return (
    <div>
<Header />
    <Hero btn = "Services" heading = "Contact Us" />
    <Footer />
    </div>
  )
}
