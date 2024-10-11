import Link from "next/link"
import cssStyle from "./header.module.css"

export default function Header(props: any) {
  return (
    <div className={cssStyle.navbar}>
      <nav>
    
    <Link href={"/"}> <li id="home">Home</li> </Link>
    <Link href={"/about"}> <li id="about" >About</li> </Link>
    <Link href={"/services"}> <li id="services">Services</li> </Link>
    <Link href={"/contact"}> <li id="contact">Contact</li> </Link>
    <Link href={"/services/web-development"}> <li id="contact">Web Development</li> </Link>

</nav>
    </div>
  )
}
