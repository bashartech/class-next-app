import Link from "next/link";

// Define an interface for the props to specify the expected types
interface HeroProps {
  heading: string;
  
}

export default function Hero({ heading }: HeroProps) {
  return (
    <div>
      <section className="hero-section">
        <div className="background-image"></div>
        <div className="container">
          <h1 className="headline">{heading}</h1>
          <p className="subheading">
            Expert IT services for startups and enterprises, driving digital transformation and growth
          </p>
          <Link href="/services">
            <button className="cta-button">Contact</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

