import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";



function Header() {
  const [] = useState("");
  return (
    <>
      <header>
        <div className="logo">
          <img src="../src/assets/android-chrome-192x192.png" alt="Logo" />
        </div>
        <div className="socials">
          <button>
            <a href="https://www.linkedin.com/in/joben-villodrez/">
              <LinkedInIcon />
            </a>
          </button>
          <button>
            <a href="https://github.com/jobendev">
              <GitHubIcon />
            </a>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
