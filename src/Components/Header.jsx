import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Headericons from "./Headericons";

function Header(props) {
  return (
    <>
      <header>
        <div className="logo">
          <img src="src/assets/android-chrome-192x192.png" alt="Logo" />
        </div>
        {props.aboutClicked ? <Headericons /> : null}

        <div className="socials">
          <button>
            <a
              href="https://www.linkedin.com/in/joben-villodrez/"
              target="_blank"
            >
              <LinkedInIcon style={{ fill: "black" }} className="svg_icon" />
            </a>
          </button>
          <button>
            <a href="https://github.com/jobendev" target="_blank">
              <GitHubIcon style={{ fill: "black" }} className="svg_icon" />
            </a>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
