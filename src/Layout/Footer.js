import React from "react";

const Footer = () => (
    
  <footer className="footer">
    <div className='container'>
        <div className="row">
            <div className="col-12">
            <hr></hr>
                <p className="mb-4">© {new Date().getFullYear()} Photo Gallery by Ada</p>
            </div>
        </div>
      </div>
  </footer>
);

export default Footer;