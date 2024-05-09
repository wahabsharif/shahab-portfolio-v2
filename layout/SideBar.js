"use client";
import { Fragment } from "react";
const SideBar = () => {
  const toggleSidebar = () => {
    console.log("hi");
    document.querySelector("body").classList.remove("side-content-visible");
  };
  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" onClick={() => toggleSidebar()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => toggleSidebar()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                toggleSidebar();
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="https://www.linkedin.com/in/shahab-munir-48b208213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://www.facebook.com/shahabmunir.me">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.behance.net/shahabmunir">
              <i className="fab fa-behance" />
            </a>
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
    </Fragment>
  );
};
export default SideBar;
