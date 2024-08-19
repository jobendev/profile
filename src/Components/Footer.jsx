import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <footer id="footer">
        <p>Copyright ⓒ {year} </p>
        <p>
          <EmailIcon />
          jjvillodrez@gmail.com
        </p>
        <p>
          <PhoneIcon />
          +639751031493
        </p>
      </footer>
    </div>
  );
}

export default Footer;
