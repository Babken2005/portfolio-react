import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="a-c">
    <div className="footerLeft a-c">
      <Link to="/say-hi">
      <img src="./images/share-alt.svg" alt="share" />
      </Link>
    </div>
    <div className="footerRight">
      <Link to="/works">
      <p>works.</p>
      </Link>
    </div>
  </footer>
  )
};

export default Footer;