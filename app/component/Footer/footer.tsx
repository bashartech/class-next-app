"use client"
import { useEffect } from 'react';
import Link from "next/link"

export default function Footer() {
    useEffect(() => {
        // Get references to form and button
        const newsletterForm = document.getElementById('newsletter-form') as HTMLFormElement;
        const ctaButton = document.querySelector('.cta-button') as HTMLButtonElement;
    
        // Handle form submission
        const handleSubmit = (e: Event) => {
          e.preventDefault();
          const emailInput = newsletterForm.querySelector('input[type="email"]') as HTMLInputElement;
          alert(`Thank you for subscribing with email: ${emailInput.value}`);
          emailInput.value = '';
        };
    
        // Handle button click
        const handleButtonClick = () => {
          alert('Thank you for your interest! We will contact you shortly.');
        };
    
        // Smooth scrolling for footer links
        const handleSmoothScroll = (e: Event) => {
          e.preventDefault();
          const anchor = e.currentTarget as HTMLAnchorElement;
          const targetId = anchor.getAttribute('href')?.substring(1);
          const targetElement = document.getElementById(targetId!);
    
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: 'smooth',
            });
          }
        };
    
        // Add event listeners
        if (newsletterForm) {
          newsletterForm.addEventListener('submit', handleSubmit);
        }
        if (ctaButton) {
          ctaButton.addEventListener('click', handleButtonClick);
        }
    
        const footerLinks = document.querySelectorAll('.footer a[href^="#"]');
        footerLinks.forEach(anchor => {
          anchor.addEventListener('click', handleSmoothScroll);
        });
    
        // Cleanup listeners on unmount
        return () => {
          if (newsletterForm) {
            newsletterForm.removeEventListener('submit', handleSubmit);
          }
          if (ctaButton) {
            ctaButton.removeEventListener('click', handleButtonClick);
          }
          footerLinks.forEach(anchor => {
            anchor.removeEventListener('click', handleSmoothScroll);
          });
        };
      }, []);
    
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
            <div className="footer-section contact-info">
                <h3>Contact Us</h3>
                <p><i className="fas fa-map-marker-alt"></i> Teacher Society 21 A Karachi</p>
                <p><i className="fas fa-phone"></i> 03042985456</p>
                <p><i className="fas fa-envelope"></i> <a href="bashar-portfolio-pk,netlify.app">bashartc13@gmail.com</a></p>
            </div>
            <div className="footer-section quick-links">
                <h3>Quick Links</h3>
                <ul>
                   <Link href={"/"}> 
                    <li>Home</li>
                   </Link>
                   <Link href={"/services"}> 
                    <li>Services</li>
                   </Link>
                   <Link href={"/about"}> 
                    <li>About</li>
                   </Link>
                   <Link href={"/contact"}> <li>Contact</li>
                   </Link>
                </ul>
            </div>
            <div className="footer-section newsletter">
                <h3>Stay Updated</h3>
                <p>Subscribe to our newsletter for latest news and updates</p>
                <form id="newsletter-form">
                    <input type="email" placeholder="Enter your email" required/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Bashar Tech. All rights reserved.</p>
           <Link href={"/contact"}><button className="cta-button">Get in Touch</button></Link> 
        </div>
    </footer>
    </div>
  )
}
