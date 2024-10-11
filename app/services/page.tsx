import cssStyle from "./services.module.css"
import Link from "next/link"
import Header from "../component/Header/Header"
import Hero from "../component/Hero/Hero"
import Footer from "../component/Footer/footer"


function ServicePage() {
  return (
    <div>
<Header />
<Hero btn = "Services" heading = "Demanding Services" />
    <div className={cssStyle.text}>    <Footer />
    </div>
    </div>

  )
}

export default ServicePage
