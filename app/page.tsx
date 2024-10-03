import Link from "next/link";


export default function Home() {
  return (
    
    <div className=" nav grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <nav>
      <ul className="flex">
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        <Link href="services" target="_blank"><li>Services</li></Link>
      </ul>
     </nav>
    </div>
  
  );
}
