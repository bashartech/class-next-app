import cssStyle from "./services.module.css"
import Link from "next/link"

function ServicePage() {
  return (
    <div className={cssStyle.text}>
      This is service page
<Link href={"/services/web-development"}>Web Development</Link>
    </div>

  )
}

export default ServicePage
