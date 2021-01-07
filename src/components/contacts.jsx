import React from "react";

const Contacts = ({ footer }) => {
  return (
    <React.Fragment>
      <div className="widgets-block">
        <div className="widget twitter">
          <p className="title">Contact</p>
          <ul>
            <li>
              Email:{" "}
              <a
                href="mailto:esculturajerome@jescultura.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                esculturajerome@jescultura.com
              </a>
              <br />
              Github:{" "}
              <a
                href="https://github.com/esculturajerome"
                rel="noopener noreferrer"
                target="_blank"
              >
                esculturajerome
              </a>
              <br />
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/jeromeescultura/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Jerome Escultura
              </a>{" "}
              <br />
              Whatsapp:{" "}
              <a
                href="https://api.whatsapp.com/send?phone=+639566754237"
                rel="noopener noreferrer"
                target="_blank"
              >
                +639566754237
              </a>
            </li>
          </ul>
        </div>
      </div>
      {footer && <p className="copyright"> escultura &copy; 2021</p>}
    </React.Fragment>
  );
};

export default Contacts;
