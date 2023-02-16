import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "black",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "right",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
  } as React.CSSProperties;

  const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  };

  const colorLink = {
    color: "white"
  };
  return (
    <footer>
      <div style={phantomStyle}>
        <div style={footerStyle}>
          <a
            href="mailto:henriquefcosta19@gmail.com"
            style={colorLink}
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/henriquefernandescosta/"
            style={colorLink}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />{" "}
          </a>
          <a
            href="https://github.com/h-fcosta"
            style={colorLink}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>{" "}
          Desenvolvido por: {""}
          Henrique F. Costa
        </div>
      </div>
    </footer>
  );
};

export default Footer;
