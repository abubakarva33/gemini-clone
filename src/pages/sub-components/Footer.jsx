import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
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
