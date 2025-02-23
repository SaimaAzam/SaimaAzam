import { useContext } from "react";
import { AppContext } from "../context";

export const AboutSection = () => {
  const { name, title, summary, about, about_quote, resume_url } = useContext(
    AppContext
  );
  return (
    //   <!-- ABOUT -->
    <section
      className="
        about
        full-screen-top
        d-lg-flex
        justify-content-center
        align-items-center
      "
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <small className="small-text">
                Welcome to
                <span className="mobile-block"> my portfolio website!</span>
              </small>
              <h1 className="animated animated-text">
                <span className="mr-2">Hey folks, I'm</span>
                <div className="animated-info">
                  <span className="animated-item">{name}</span>
                  <span className="animated-item">{title}</span>
                </div>
              </h1>

              <p>{summary}</p>

              <div className="">
                <h3>
                  <span>
                    <strong>Objective</strong>
                  </span>
                </h3>
                <p>{about}</p>
                {about_quote && <p>{about_quote}</p>}
              </div>

              <div className="custom-btn-group mt-4">
                <a
                  href={resume_url}
                  className="btn mr-lg-2 custom-btn"
                  target="_blank"
                >
                  <i className="uil uil-file-alt"></i> View Resume
                </a>
                <a
                  href="#contact"
                  className="btn custom-btn custom-btn-bg custom-btn-link"
                >
                  Get a free quote
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-12">
            <div className="about-image svg">
              <img
                src="./undraw/undraw_software_engineer_lvl5.svg"
                className="img-fluid"
                alt="svg image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
