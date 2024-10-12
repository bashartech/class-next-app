import Footer from "./component/Footer/footer";
import Header from "./component/Header/Header"
import Hero from "./component/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Header  />

     <Hero  heading = "Transforming Businesses through Innovative IT Solutions" ></Hero>
    <Footer/>
    </div>
     );
}
