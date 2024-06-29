import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ fontSize: 12, marginTop: 5, marginBottom:8 }}>
      <span>BongoBOT can make mistakes. Check important info. </span>
      <span>
        Developed by
        <Link target="blank" to="https://abubakar375.netlify.app/" className="mx-1">
          Abubakar Siddik
        </Link>
        using Gemini API provided by google.
      </span>
    </div>
  );
};

export default Footer;
