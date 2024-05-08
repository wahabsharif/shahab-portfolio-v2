import Link from "next/link";

const Clients = () => {
  return (
    <div className="client-logo-area rel z-1 pt-130 rpt-100 pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center pt-5 mb-65 wow fadeInUp delay-0-2s">
              <h6>
                I’ve <span>500+ Global Clients</span> &amp; lot’s of Project
                Complete
              </h6>
            </div>
          </div>
        </div>
        <div className="client-logo-wrap">
          <Link legacyBehavior href="projects">
            <a className="client-logo-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/client-logos/aamir.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="projects">
            <a className="client-logo-item wow fadeInUp delay-0-3s">
              <img
                src="assets/images/client-logos/big-ben.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="projects">
            <a className="client-logo-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/client-logos/chef.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="projects">
            <a className="client-logo-item wow fadeInUp delay-0-5s">
              <img src="assets/images/client-logos/hsm.png" alt="Client Logo" />
            </a>
          </Link>
          <Link legacyBehavior href="projects">
            <a className="client-logo-item wow fadeInUp delay-0-6s">
              <img
                src="assets/images/client-logos/ilmi.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="projects">
            <a className="client-logo-item wow fadeInUp delay-0-2s">
              <img src="assets/images/client-logos/itl.png" alt="Client Logo" />
            </a>
          </Link>
          <Link legacyBehavior href="projects">
            <a className="client-logo-item wow fadeInUp delay-0-3s">
              <img
                src="assets/images/client-logos/khass.png"
                alt="Client Logo"
              />
            </a>
          </Link>
          <Link legacyBehavior href="projects">
            <a className="client-logo-item wow fadeInUp delay-0-4s">
              <img src="assets/images/client-logos/ktc.png" alt="Client Logo" />
            </a>
          </Link>
          <Link legacyBehavior href="projects">
            <a className="client-logo-item wow fadeInUp delay-0-5s">
              <img src="assets/images/client-logos/mtl.png" alt="Client Logo" />
            </a>
          </Link>
          <Link legacyBehavior href="projects">
            <a className="client-logo-item wow fadeInUp delay-0-6s">
              <img src="assets/images/client-logos/ptc.png" alt="Client Logo" />
            </a>
          </Link>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
export default Clients;

export const Clients2 = () => {
  return (
    <div className="client-logo-area bgc-black rel z-1 pt-25 pb-60">
      <div className="container">
        <div className="client-logo-wrap style-two">
          <Link
            legacyBehavior
            className="client-logo-item wow fadeInUp delay-0-2s"
            href="projects"
          >
            <img
              src="assets/images/client-logos/client-logo-two1.png"
              alt="Client Logo"
            />
          </Link>
          <Link
            legacyBehavior
            className="client-logo-item wow fadeInUp delay-0-3s"
            href="projects"
          >
            <img
              src="assets/images/client-logos/client-logo-two2.png"
              alt="Client Logo"
            />
          </Link>
          <Link
            legacyBehavior
            className="client-logo-item wow fadeInUp delay-0-4s"
            href="projects"
          >
            <img
              src="assets/images/client-logos/client-logo-two3.png"
              alt="Client Logo"
            />
          </Link>
          <Link
            legacyBehavior
            className="client-logo-item wow fadeInUp delay-0-5s"
            href="projects"
          >
            <img
              src="assets/images/client-logos/client-logo-two4.png"
              alt="Client Logo"
            />
          </Link>
          <Link
            legacyBehavior
            className="client-logo-item wow fadeInUp delay-0-6s"
            href="projects"
          >
            <img
              src="assets/images/client-logos/client-logo-two5.png"
              alt="Client Logo"
            />
          </Link>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
