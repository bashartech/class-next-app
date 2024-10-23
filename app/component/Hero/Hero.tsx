import Link from "next/link";
import cssStyle from "./hero.module.css"
// Define an interface for the props to specify the expected types
interface HeroProps {
  heading: string;
}

export default function Hero({ heading}: HeroProps) {
  return (
    <div>
      <section className={cssStyle.heroSection}>
        <div className={cssStyle.backgroundImage}></div>
        <div className={cssStyle.container}>
          <h1 className={cssStyle.headline}>{heading}</h1>
          <p className={cssStyle.subheading}>
            Expert IT services for startups and enterprises, driving digital transformation and growth
          </p>
          <Link href="/services">
            <button className={cssStyle.ctaButton}>Contact</button>
          </Link>
        </div>
      </section>
    </div>
  );
}


