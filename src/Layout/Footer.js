import React from "react";
import ScrollToTop from "../Components/ScrollToTop";


const Footer = () => (
    
    <footer className="footer">
      <div className='container'>
          <hr></hr>
          <p className="mb-4 mt-3">© {new Date().getFullYear()} Photo Gallery by <a href="https://www.antartika.it/author/ada-botonjic/" target="_blank" rel="noreferrer">Ada</a></p>
        </div>
        <ScrollToTop />
    </footer>
  );

export default Footer;