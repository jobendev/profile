import React, { useState } from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer-center">
        <footer>
          <p>Copyright ⓒ {year} </p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
