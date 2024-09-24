import React from 'react';
import Layout from '../../layout/index'
import './home.css'
import Background from '../../assets/svg-export/background.jpg'
import JuiceWrld from '../../assets/svg-export/juicewrld.jpg'
import { RiCheckboxBlankFill } from "react-icons/ri";
import { BiSolidTagAlt } from "react-icons/bi";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { RiVideoFill } from "react-icons/ri";
import { MdEventBusy } from "react-icons/md";
import { PiArticleNyTimes } from "react-icons/pi";
import Naik from "../../assets/svg-export/naik.jpg";
import Shirt from "../../assets/svg-export/Shirt.jpg"
import { SlLike } from "react-icons/sl";
import { LiaShareSolid } from "react-icons/lia";
import { FaRegCommentDots } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaMarsStroke } from "react-icons/fa";
import CredlancheLimited from "../../assets/svg-export/Credlanche Limited.jpeg"
import Tina from "../../assets/svg-export/tina.jpeg"
import Syngeta from "../../assets/svg-export/syngeta.jpeg"
import Izabel from "../../assets/svg-export/izabel.jpeg"
import Cavayo from "../../assets/svg-export/cavayo.jpeg"
import Cava from "../../assets/svg-export/Cava.jpeg"
import Cod from "../../assets/svg-export/Cod.jpeg"
import Codm from "../../assets/svg-export/Codm.jpeg"



export default function Home() {
  return (
    <Layout>
      <div className="home-page-cards">
        <div className="home-page-col-one">
          <div className="col-card-one-home">
            <div className="col-card-one-img1">
              <img src={Background} alt="" />
            </div>
            <div className="col-card-one-img2">
              <img src={JuiceWrld} alt="" />
            </div>
            <div className="juicewrld-home-page-name">
              <h1>Ayenimayt</h1>
            </div>
            <div className="juicewrld-home-page-about">
              <p>
                👋Aspiring frontend developer|HTML,CSS,JavaScript enthusiast.
                Gamer who loves tackling challenges and connecting with others.
                Excited to grow in tech!
              </p>
            </div>

            <div
              style={{ marginTop: "10px", marginBottom: "10px" }}
              className="app-hr-line"
            ></div>

            <div className="whoViewedYourProfileSec">
              <div className="whoViewedCOl-one">
                <span>Who viewed your profile</span>
                <span>30</span>
              </div>
              <div className="whoViewedCOl-two">
                <span>Views of your post</span>
                <span>100</span>
              </div>
            </div>
            <div
              style={{ marginTop: "15px", marginBottom: "10px" }}
              className="app-hr-line"
            ></div>

            <div className="exclusive-content-home">
              <p>Access exclusive tools & insights</p>
              <p>
                <div style={{ marginRight: "5 px" }}>
                  <RiCheckboxBlankFill />
                </div>
                Try Premium Free for 1 Month
              </p>
            </div>
            <div>
              <div
                style={{ marginTop: "10px", marginBottom: "10px" }}
                className="app-hr-line"
              ></div>

              <div className="exclusive-content-home">
                <p></p>
                <p style={{ marginTop: "10px" }}>
                  {" "}
                  <div style={{ marginRight: "10px" }}>
                    <BiSolidTagAlt />
                  </div>
                  My Items
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-page-col-two">
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "4px",
              border: " 1px solid rgba(128, 128, 128, 0.288)",
            }}
          >
            <div className="second-col-search-section-home">
              <img src={JuiceWrld} alt="" />
              <input type="text" placeholder="Start a post" />
            </div>

            <div className="page-home-uploads-section">
              <ul>
                <li>
                  {" "}
                  <span>
                    <MdPhotoSizeSelectActual />
                  </span>{" "}
                  Photo
                </li>
                <li>
                  {" "}
                  <span>
                    <RiVideoFill />
                  </span>{" "}
                  Video
                </li>
                <li>
                  {" "}
                  <span>
                    <MdEventBusy />
                  </span>{" "}
                  Event
                </li>
                <li>
                  {" "}
                  <span>
                    <PiArticleNyTimes />
                  </span>{" "}
                  Write article
                </li>
              </ul>
            </div>
          </div>
          {[..."1"].map(() => {
            return (
              <div className="postContainer">
                <div className="whoViewedPost">
                  <span className="whoViewedPostName">
                    <span>LinkedIn</span> commented on this
                  </span>
                  <span className="whoViewedPost-dots">...</span>
                </div>
                <div
                  style={{ marginTop: "5px", marginBottom: "5px" }}
                  className="app-hr-line"
                ></div>

                <div className="userPostDetails">
                  <div className="userPostDetailsImg">
                    <img src={Naik} alt="" />
                  </div>

                  <div className="userPostMainDetails">
                    <span className="userDetailsNamepost">Abdul Naik</span>
                    <span className="userDetails-About">
                      Digital & Architectural Designer
                    </span>
                  </div>
                </div>

                <div className="mainFeedPost">
                  <p>
                    Illusions are like a mirage in the desert,shimmering with
                    promise yet fading into nothingness when approached with
                    clarity. You will face many defeats in life, but never let
                    yourself be defeated.
                  </p>
                  <img src={Shirt} alt="" />
                  <div
                    style={{ marginTop: "18px", marginBottom: "10px" }}
                    className="app-hr-line"
                  ></div>
                </div>
                <div className="userPostDetails">
                  <div className="userPostDetailsImg">
                    <img src={CredlancheLimited} alt="" />
                  </div>

                  <div className="userPostMainDetails">
                    <span className="userDetailsNamepost">
                      Credlanche Limited
                    </span>
                    <span className="userDetails-About">
                      {" "}
                      Financial Service
                    </span>
                  </div>
                </div>

                <div className="mainFeedPost">
                  <p>
                    Monday just got a little brighter! At Credlanche, we believe
                    every new week brings new opportunities. Let’s dive into
                    your financial success with confidence and energy.
                  </p>
                  <img src={CredlancheLimited} alt="" />
                  <div
                    style={{ marginTop: "18px", marginBottom: "10px" }}
                    className="app-hr-line"
                  ></div>
                </div>
                <div className="userPostDetails">
                  <div className="userPostDetailsImg">
                    <img src={Tina} alt="" />
                  </div>

                  <div className="userPostMainDetails">
                    <span className="userDetailsNamepost">Akpotohwo Tina</span>
                    <span className="userDetails-About">
                      {" "}
                      Sales Team Manager
                    </span>
                  </div>
                </div>

                <div className="mainFeedPost">
                  <p>
                    Did you know life insurance is not just about leaving a
                    legacy? It also comes with living benefits! From covering
                    medical expenses to securing your financial future, life
                    insurance is a powerful tool for life today and tomorrow.
                    Ready to protect what matters most? Please send us a DM
                    08125275707 now to get started.
                  </p>
                  <img src={Tina} alt="" />
                  <div
                    style={{ marginTop: "18px", marginBottom: "10px" }}
                    className="app-hr-line"
                  ></div>
                </div>

                <div className="userPostDetails">
                  <div className="userPostDetailsImg">
                    <img src={Izabel} alt="" />
                  </div>

                  <div className="userPostMainDetails">
                    <span className="userDetailsNamepost">Izabel Favorita</span>
                    <span className="userDetails-About">
                      {" "}
                      Analista de Sustentabilidade Syngenta
                    </span>
                  </div>
                </div>

                <div className="mainFeedPost">
                  <p>
                    Time Stewardship!!! Syngenta Roberto Moretzsohn de Castro
                    Rodrigo Cavallini Crespo Paulo Junior
                  </p>
                  <img src={Syngeta} alt="" />
                  <div
                    style={{ marginTop: "18px", marginBottom: "10px" }}
                    className="app-hr-line"
                  ></div>
                </div>

                <div className="userPostDetails">
                  <div className="userPostDetailsImg">
                    <img src={Cavayo} alt="" />
                  </div>

                  <div className="userPostMainDetails">
                    <span className="userDetailsNamepost">
                      Cavayo Nigeria Limited
                    </span>
                    <span className="userDetails-About">
                      {" "}
                      Business Consulting and Services.
                    </span>
                  </div>
                </div>

                <div className="mainFeedPost">
                  <p>
                    Introducing CAVAYO NIGERIA LIMITED- Your Trusted Partner in
                    Business Solutions At CAVAYO NIGERIA LIMITED, we specialize
                    in delivering top-notch professional services that empower
                    your business to thrive. From corporate business
                    consultations, to tax planning and consults, CAC
                    registrations, trademark and patent registrations amongst
                    others, we’ve got you covered!
                  </p>
                  <img src={Cava} alt="" />
                  <div
                    style={{ marginTop: "18px", marginBottom: "10px" }}
                    className="app-hr-line"
                  ></div>

                  <div className="userPostDetails">
                    <div className="userPostDetailsImg">
                      <img src={Cod} alt="" />
                    </div>

                    <div className="userPostMainDetails">
                      <span className="userDetailsNamepost">
                        Call of Duty Mobile
                      </span>
                      <span className="userDetails-About">
                        {" "}
                        Online Gaming Platform
                      </span>
                    </div>
                  </div>

                  <div className="mainFeedPost">
                    <p>
                      Experience the thrill of Call of Duty on the go. Play as
                      iconic characters in battle royale and multiplayer in our
                      best fps free mobile game.
                    </p>
                    <img src={Codm} alt="" />
                    <div
                      style={{ marginTop: "18px", marginBottom: "10px" }}
                      className="app-hr-line"
                    ></div>
                  </div>
                </div>
                <div className="postAction">
                  <ul>
                    <li>
                      <span>
                        <SlLike />
                      </span>
                      Like{" "}
                    </li>
                    <li>
                      <span>
                        <FaRegCommentDots />
                      </span>
                      Comment{" "}
                    </li>
                    <li>
                      <span>
                        <LiaShareSolid />
                      </span>
                      Share{" "}
                    </li>
                    <li>
                      <span>
                        <RiSendPlaneFill />
                      </span>
                      Send{" "}
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="home-page-col-three">
          <div className="topCoursesCol3">
            <div className="topCHeader">
              <p>Today's top courses</p> <FaMarsStroke />
            </div>

            <div className="coursesList">
              <div className="coursesListMain">
                <div className="coursesListCol1">
                  <span>1.</span>
                </div>
                <div className="coursesListCol2">
                  <span>How to Stand Out Remotely</span>
                  <span>Madecraft and Bianca Lager</span>
                </div>
              </div>
              <div className="coursesListMain">
                <div className="coursesListCol1">
                  <span>2.</span>
                </div>
                <div className="coursesListCol2">
                  <span>Learning Excel: Data Analysis</span>
                  <span>Curt Fye</span>
                </div>
              </div>
              <div className="coursesListMain">
                <div className="coursesListCol1">
                  <span>3.</span>
                </div>
                <div className="coursesListCol2">
                  <span>
                    The Non-Technical Skills of Effective Data Scientist
                  </span>
                  <span>Keith McCormick</span>
                </div>
              </div>
              <div className="coursesListMain">
                <div className="coursesListCol1">
                  <span>4.</span>
                </div>
                <div className="coursesListCol2">
                  <span>Data Literacy: Exploring and Describing Data</span>
                  <span>Barton Poulson</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
