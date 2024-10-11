import Link from "next/link"
import { MouseEvent } from 'react';
export default function Hero(props :any) {
console.log(props, "props")
    const MyComponent = () => {
      const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Prevent default navigation behavior
        const targetId = event.currentTarget.getAttribute('href')?.substring(1);
        console.log(targetId); // Logs the id without the '#'
      };
    }    
  return (
    <div>
      <section className="hero-section">
        <div className="background-image"></div>
        <div className="container">
        <h2>{props.About}</h2>
            <h1 className="headline">{props.heading}</h1>
            <p className="subheading">Expert IT services for startups and enterprises, driving digital transformation and growth</p>
          <Link href = "/services"><button className="cta-button">{props.btn}</button></Link>
        </div>
    </section>
    </div>
  )
}
