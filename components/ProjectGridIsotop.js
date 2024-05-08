"use client";

import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectGridIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-masonry-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <Fragment>
      <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          All
        </li>
        <li
          className={`c-pointer ${activeBtn("branding")}`}
          onClick={handleFilterKeyChange("branding")}
        >
          Branding
        </li>
        <li
          className={`c-pointer ${activeBtn("flayers")}`}
          onClick={handleFilterKeyChange("flayers")}
        >
          Flayers
        </li>
        <li
          className={`c-pointer ${activeBtn("logo")}`}
          onClick={handleFilterKeyChange("logo")}
        >
          Logo
        </li>
        <li
          className={`c-pointer ${activeBtn("social-media")}`}
          onClick={handleFilterKeyChange("social-media")}
        >
          Social Media
        </li>
        <li
          className={`c-pointer ${activeBtn("stationary")}`}
          onClick={handleFilterKeyChange("stationary")}
        >
          Stationary
        </li>
        {/* <li
          className={`c-pointer ${activeBtn("graphics")}`}
          onClick={handleFilterKeyChange("graphics")}
        >
          Graphics
        </li> */}
      </ul>
      <div className="row project-masonry-active">
        {/* Branding */}
        <div className="col-lg-3 item branding">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/branding/branding-2.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Branding For PTL
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item branding">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/branding/branding-3.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Branding For PTC
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item branding">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/branding/branding-4.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Branding For PTC
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item branding">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/branding/branding-5.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Branding For PTC
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item branding">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/branding/branding-1.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Branding For PTC
                </Link>
              </h4>
            </div>
          </div>
        </div>

        {/* flayers */}
        <div className="col-lg-3 item flayers">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/flayers/flayer-2.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Flayers Design For PTC
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item flayers">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/flayers/flayer-3.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Flayers Design For PTC
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item flayers">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/flayers/flayer-1.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Flayers Design For SHATCO
                </Link>
              </h4>
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="col-lg-3 item logo">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/logos/logo-5.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Graphics Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Logo Design For Fighters Gujrat
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item logo">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/logos/logo-6.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Graphics Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Logo Design For Gujranwala Knights
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item logo">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/logos/logo-7.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Graphics Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Logo Design For Multan Smashers
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item logo">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/logos/logo-8.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Graphics Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Logo Design For Sialkot Lions
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item logo">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/logos/logo-9.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Graphics Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Logo Design For Pindi Boys
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item logo">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/logos/logo-10.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Graphics Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Logo Design For Sargodha Shaheens
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item logo">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/logos/logo-11.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Graphics Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Logo Design For PTL
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item logo">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/logos/logo-4.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Graphics Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Logo Design For Lahore Stallions
                </Link>
              </h4>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="col-lg-3 item design social-media">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/social-media/social-media-1.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Social Media Post Design For Castle heights
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item design social-media">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/social-media/social-media-2.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Social Media Post Design For PTC
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item design social-media">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/social-media/social-media-3.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Social Media Post Design For Statesmen
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item design social-media">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/social-media/social-media-4.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Social Media Post Design For Khaas
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item design social-media">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/social-media/social-media-5.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Social Media Post Design For GCC
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item design social-media">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/projects/social-media/social-media-6.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Social Media Post Design For Pearl Kami
                </Link>
              </h4>
            </div>
          </div>
        </div>

        {/* Stationary */}
        <div className="col-lg-3 item stationary">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/stationery/stationery-2.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Design &amp; Stationery</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Stationery Design For Castle Heights
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item stationary">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/stationery/stationery-3.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Design &amp; Stationery</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Stationery Design For Castle Heights
                </Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="col-lg-3 item stationary">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/projects/stationery/stationery-1.png"
                alt="Project"
              />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Design &amp; Stationery</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Stationery Design For Castle Heights
                </Link>
              </h4>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-3 item design marketing apps">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/projects/project6.jpg" alt="Project" />
              <Link legacyBehavior href="#">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h4>
                <Link legacyBehavior href="project-details">
                  Design &amp; Branding Mokeup
                </Link>
              </h4>
            </div>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};
export default ProjectGridIsotop;
