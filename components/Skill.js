import Link from "next/link";

const items = [
  {
    id: 1,
    name: "PhotoShop",
    image: "assets/images/skills/photoshop.png",
    value: "95",
  },
  {
    id: 2,
    name: "Illustrator",
    image: "assets/images/skills/illustrator.png",
    value: "83",
  },
  {
    id: 3,
    name: "After Effect",
    image: "assets/images/skills/after-effect.png",
    value: "93",
  },
  {
    id: 4,
    name: "Premiere",
    image: "assets/images/skills/premiere.png",
    value: "84",
  },
  {
    id: 5,
    name: "WordPress",
    image: "assets/images/skills/wordpress.png",
    value: "65",
  },
  {
    id: 6,
    name: "Html",
    image: "assets/images/skills/html.png",
    value: "56",
  },
  {
    id: 7,
    name: "Css",
    image: "assets/images/skills/css.png",
    value: "60",
  },
  {
    id: 8,
    name: "JavaScript",
    image: "assets/images/skills/javascript.png",
    value: "64",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-5">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">My Skills</span>
                  <h2>
                    Let’s Explore Popular <span>Skills &amp; Experience</span>
                  </h2>
                  <p>
                    PhotoShop and Illustrator for graphics, After Effects and
                    Premiere Pro for video, wordpress and JavaScript for web,
                    Html and Css for programming.{" "}
                  </p>
                </div>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn">
                    Learn More <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-items-wrap">
                <div className="row">
                  {items.map((item) => (
                    <div className="col-xl-3 col-lg-4 col-md-3 col-sm-4 col-6">
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src={item.image} alt="Skill" />
                        <h5>{item.name}</h5>
                        <span className="percent">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
    </section>
  );
};
export default Skill;

export const Skill2 = () => {
  return (
    <section
      id="skills"
      className="skill-area-two rel z-1 pt-130 rpt-100 pb-105 rpb-70"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skill-content-two rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-60">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> professional skill of me
                </span>
                <h2>professional skill</h2>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-8">
                  <img src="assets/images/skills/skill-man.png" alt="Skill" />
                </div>
                <div className="col-4">
                  <img src="assets/images/shape/skill-arrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="skill-wrap-two">
              <div className="row gap-40">
                {items.map(
                  (item) =>
                    item.id <= 6 && (
                      <div className="col-md-4 col-sm-4 col-6" key={item.id}>
                        <div className="skill-item-two wow fadeInUp delay-0-3s">
                          <div className="icon-percent">
                            <img src={item.image} alt="Skill" />
                            <span className="percent">{item.value}%</span>
                          </div>
                          <h5 className="title">{item.name}</h5>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
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
    </section>
  );
};
