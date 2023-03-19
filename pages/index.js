import dynamic from "next/dynamic";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      

      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Suhayl Tarsoo</h1>
                  <p className="lead">
                    I Am Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, graphics, brand identity and other design collateral.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="https://drive.google.com/file/d/19CEeOQlLd2jec1mcg5GkTNqzYYRxzUow/view?usp=sharing">
                      Download CV
                    </a>
                    <img src="static/img/space.png"></img>
                    <img src="static/img/suh.png"></img>
                  </div>
                  
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-banner.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
