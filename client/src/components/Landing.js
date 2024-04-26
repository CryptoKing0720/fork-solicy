import React from "react";
import { Link } from "react-router-dom";
import "./style/Form.css";
import logo from "../utils/img/logo.png";
import Navbar from "./Nabvar";

function Landing() {
  return (
    <>
      <Navbar />
      <div className="intro-home">
        <meta charSet="utf-8" />
        <section className="intro-home-container">
          <div className="intro-inner">
            <div className="intro-home-inner">
              <div className="intro_innerContent">
                <div className="subTitleText_subTitle intro_title">
                  <h1 className="subTitleText_subTitleText subTitleText_subTitleTextFont50px subTitleText_subTitleTextColor--primary-color-font">
                    Fluent in Development
                  </h1>
                </div>
                <div
                  style={{ maxWidth: "620px" }}
                  className="subTitleText_description title-text-color"
                >
                  We provide flexible and intuitive web3, software, and
                  blockchain solutions
                </div>
                <div className="intro_allButtonHome">
                  <div className="intro_btnContainer">
                    <button
                      className="scheduleCall_sketch-button scheduleCall_sketch-button-light"
                      type="button"
                    >
                      <span className="img-span1">
                        <span className="img-span2">
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                            className="img-span3"
                          />
                        </span>
                        <img
                          alt="/telegram-get.svg"
                          draggable="false"
                          srcset="https://ik.imagekit.io/2zlgs27bjo/public/icons//telegram-get.svg?tr=w-20,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons//telegram-get.svg?tr=w-20,q-100 2x"
                          src="https://ik.imagekit.io/2zlgs27bjo/public/icons//telegram-get.svg?tr=w-20,q-100"
                          decoding="async"
                          data-nimg="intrinsic"
                          className="img-span4"
                        />
                      </span>
                      Get in touch
                      <div className="scheduleCall_lines">
                        <div id="groupTop">
                          <svg viewBox="0 0 133 48">
                            <rect
                              x="0"
                              y="0"
                              width="100%"
                              height="100%"
                              rx="11"
                              ry="11"
                              pathLength="11"
                            ></rect>
                          </svg>
                          <svg viewBox="0 0 133 48">
                            <rect
                              x="0"
                              y="0"
                              width="100%"
                              height="100%"
                              rx="11"
                              ry="11"
                              pathLength="11"
                            ></rect>
                          </svg>
                          <svg viewBox="0 0 133 48">
                            <rect
                              x="0"
                              y="0"
                              width="100%"
                              height="100%"
                              rx="11"
                              ry="11"
                              pathLength="11"
                            ></rect>
                          </svg>
                          <svg viewBox="0 0 133 48">
                            <rect
                              x="0"
                              y="0"
                              width="100%"
                              height="100%"
                              rx="11"
                              ry="11"
                              pathLength="11"
                            ></rect>
                          </svg>
                        </div>
                        <div id="groupBottom">
                          <svg viewBox="0 0 133 48">
                            <rect
                              x="0"
                              y="0"
                              width="100%"
                              height="100%"
                              rx="11"
                              ry="11"
                              pathLength="11"
                            ></rect>
                          </svg>
                          <svg viewBox="0 0 133 48">
                            <rect
                              x="0"
                              y="0"
                              width="100%"
                              height="100%"
                              rx="11"
                              ry="11"
                              pathLength="11"
                            ></rect>
                          </svg>
                          <svg viewBox="0 0 133 48">
                            <rect
                              x="0"
                              y="0"
                              width="100%"
                              height="100%"
                              rx="11"
                              ry="11"
                              pathLength="11"
                            ></rect>
                          </svg>
                          <svg viewBox="0 0 133 48">
                            <rect
                              x="0"
                              y="0"
                              width="100%"
                              height="100%"
                              rx="11"
                              ry="11"
                              pathLength="11"
                            ></rect>
                          </svg>
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="ant-btn ant-btn-default button_btn intro_rightButton button_light button_direction-row"
                    >
                      <p>Schedule a call</p>
                      <div className="button_img">
                        <span className="img-span1">
                          <span className="img-span2">
                            <img
                              alt=""
                              aria-hidden="true"
                              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2715%27/%3e"
                              className="img-span3"
                            />
                          </span>
                          <img
                            alt="call.svg"
                            draggable="false"
                            srcset="https://ik.imagekit.io/2zlgs27bjo/public/icons/call.svg?tr=w-20,q-100 1x, https://ik.imagekit.io/2zlgs27bjo/public/icons/call.svg?tr=w-20,q-100 2x"
                            src="https://ik.imagekit.io/2zlgs27bjo/public/icons/call.svg?tr=w-20,q-100"
                            decoding="async"
                            data-nimg="intrinsic"
                            className="img-span4"
                          />
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Landing;
